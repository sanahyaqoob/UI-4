<template>
  <div class="help">
    <h2>Help</h2>
    <p>This website allows you to connect your ArConnect wallet.</p>
    <p>Click the "Connect ArConnect Wallet" button to connect your wallet.</p>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  name: 'Help',
};
</script>

<style scoped>
.help {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
button {
  background-color: green;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: darkgreen;
}
h2 {
  margin: 0 0 10px 0;
}
</style>
