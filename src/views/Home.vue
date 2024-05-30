<template>
  <div class="home">
    <WalletConnect />
  </div>
</template>

<script>
import WalletConnect from '../components/WalletConnect.vue';

export default {
  components: {
    WalletConnect,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1d1d1d;
  color: white;
  text-align: center;
  width: 100%;
}
</style>