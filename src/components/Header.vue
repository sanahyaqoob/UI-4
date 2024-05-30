<template>
  <header>
    <a href="https://ao.arweave.dev/" class="visit-link">Visit The AO Computer</a>
    <button @click="toggleHelp">Help</button>
    <Help v-if="showHelp" @close="toggleHelp"/>
  </header>
</template>

<script>
import Help from './Help.vue';

export default {
  components: {
    Help,
  },
  data() {
    return {
      showHelp: false,
    };
  },
  methods: {
    toggleHelp() {
      this.showHelp = !this.showHelp;
    },
  },
};
</script>

<style scoped>
header {
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: absolute;
  top: 0;
  width: 100%;
}
button, .visit-link {
  background-color: green;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  text-decoration: none;
  font-size: 1em;
}
button:hover, .visit-link:hover {
  background-color: darkgreen;
}
</style>