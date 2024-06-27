export default {
  data() {
    return {
      set: false
    }
  },
  methods: {
    showSetContainer() {
      const set = document.getElementById('set-container')
      set?.setAttribute('display', 'block')
    }
  }
}
