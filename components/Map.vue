<template>
  <div class="ml-8 mr-8">
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
          :icon="marker.icon"
        />
      </div>
      <gmap-circle
        v-if="markersVisibility"
        :editable="false"
        :draggable="true"
        :radius="100000"
        :center="{ lat: 44.0384, lng: -79.2 }"
        :options="circleOptions"
        ref="circle"
      />
    </gmap-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markersVisibility: false,
      circleOptions: {
        strokeColor: "#FF0000",
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0,
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
            url: "http://www.developerdrive.com/wp-content/uploads/2013/08/ddrive.png",
          },
        },
      ],
    };
  },
  methods: {
    getCurrentZoom(zoom) {
      console.log(zoom);
      if (zoom >= 5) {
        this.markersVisibility = true;
      } else {
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
