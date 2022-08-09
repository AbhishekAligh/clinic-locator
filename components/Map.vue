<template>
  <div class="ml-8 mr-8">
    <gmap-autocomplete></gmap-autocomplete>
    <gmap-map
      :center="center"
      :zoom="5"
      map-type-id="roadmap"
      style="width: 100%; height: calc(100vh - 24px - 66px - 36px)"
      :options="options"
      @zoom_changed="getCurrentZoom"
    >
      <div v-if="markersVisibility">
        <gmap-marker
          :key="index"
          v-for="(marker, index) in markers"
          :position="marker.position"
          :clickable="false"
          :draggable="false"
          @click="setZoom"
          :visible="marker.visible"
          :icon="{ url: require('../static/favicon.png') }"
        />
      </div>
      <div v-if="markersVisibility">
        <gmap-circle
          v-for="(marker, index) in markers"
          :key="index"
          :editable="false"
          :draggable="true"
          :radius="markersRadius"
          :center="marker.position"
          :options="circleOptions"
          ref="circle"
          @zoom_changed="markersRadius"
        />
      </div>
    </gmap-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markersRadius: 10000,
      markersVisibility: false,
      circleOptions: {
        strokeColor: "#7833F3",
        strokeOpacity: 0.7,
        strokeWeight: 2,
        fillColor: "#7833F3",
        fillOpacity: 1,
      },
      options: {
        mapTypeControl: false,
        zoomControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        disableDefaultUi: true,
      },
      center: { lat: 44.0384, lng: -79.2 },
      markers: [
        {
          position: {
            lat: 42.3149,
            lng: -83.026772,
          },
          visible: true,
        },
        {
          position: {
            lat: 43.653225,
            lng: -79.383186,
          },
          visible: true,
          icon: {
            // url: "http://www.developerdrive.com/wp-content/uploads/2013/08/ddrive.png",
            url: "require(''../static/favicon.png')",
          },
        },
      ],
    };
  },
  computed: {
    markersRadius() {
      getCurrentZoom(zoom)
    }
  },
  methods: {
    getCurrentZoom(zoom) {
      console.log(zoom);
      if (zoom >= 5) {
        console.log(zoom);
        this.markersVisibility = true;
        zoom>=10? this.markersRadius=200: this.markersRadius
      }  else {
        this.markersVisibility = false;
      }
    },
    // mark(event) {
    //   console.log(event.latlng.lat());
    //   console.log(event.latlng.lng());
    // },
    setZoom(zoom) {
      this.zoom = 15;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
</style>
