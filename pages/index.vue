<template>
  <div>
    <search-bar />
    <Map />
  </div>
</template>

<script>
import Map from "../components/Map.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  components: { Map, SearchBar },
};
</script>
