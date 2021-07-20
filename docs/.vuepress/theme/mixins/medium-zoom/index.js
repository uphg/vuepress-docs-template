import './style.styl'
import mediumZoom from 'medium-zoom'

export default {
  data: () => ({ zoom: null }),

  mounted () {
    this.updateZoom()
  },

  updated () {
    this.updateZoom()
  },

  methods: {
    updateZoom() {
      this.$nextTick(()=>{
        if (this.zoom) {
          this.zoom.detach()
        }
        this.zoom = mediumZoom('.page img', {
          margin: 24,
          background: 'rgba(0, 0, 0, 0.6)',
          scrollOffset: 0,
        })
        this.zoom.on('open', this.addHidden)
        this.zoom.on('opened', this.removeHidden)
        this.zoom.on('close', this.addHidden)
        this.zoom.on('closed', this.removeHidden)
      })
    },

    addHidden() {
      document.body.style['overflow-y'] = 'hidden'
    },

    removeHidden() {
      document.body.style['overflow-y'] = ''
    }
  },
}