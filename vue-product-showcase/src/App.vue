<template>
  <div id="app-layout">
    <Header />
    <main class="main-content">
      <ProductList />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import ProductList from './components/ProductList.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>