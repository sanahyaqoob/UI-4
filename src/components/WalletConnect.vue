<template>
  <div class="wallet-connect main-content">
    <h2>Welcome to AO</h2>
    <div class="wallet-box">
      <button @click="connectWallet">Connect ArConnect Wallet</button>
      <div v-if="address">
        <p>Wallet Address: {{ address }}</p>
        <button @click="disconnectWallet">Disconnect</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: null,
    };
  },
  methods: {
    async connectWallet() {
      if (window.arweaveWallet) {
        try {
          await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
          const address = await window.arweaveWallet.getActiveAddress();
          this.address = address;
          alert('Wallet Connected');
        } catch (e) {
          alert('Connection failed');
        }
      } else {
        alert('ArConnect is not installed');
      }
    },
    async disconnectWallet() {
      if (window.arweaveWallet) {
        await window.arweaveWallet.disconnect();
        this.address = null;
        alert('Wallet Disconnected');
      }
    },
  },
};
</script>

<style scoped>
.wallet-connect {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: darkgreen;
}
p {
  margin-top: 10px;
}
h2 {
  margin-bottom: 20px;
  font-size: 2em;
}
.wallet-box {
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
}
</style>