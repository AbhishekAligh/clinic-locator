import Vue from 'vue'
import GmapVue from 'gmap-vue'

Vue.use(GmapVue, {
    load: {
        key: 'AIzaSyA1p4vkgtHc0r2MJswMEhNdxwDG8NPYx4M',
        libraries: 'places', // This is required if you use the Autocomplete plugin
    },
    // autobindAllEvents: false,
    installComponents: true,
})

// import GmapCluster from 'vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues

// Vue.component('GmapCluster', GmapCluster)