<template>
  <div class="card custom-card h-100 shadow-sm rounded-3">
    <div class="p-3 bg-white rounded-top d-flex align-items-center justify-content-center product-image-container">
      <img 
        :src="product.image" 
        :alt="product.title" 
        class="img-fluid product-image" 
        loading="lazy" 
      />
    </div>

    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <span class="text-uppercase fw-bold small text-navy d-block mb-1">
          {{ product.category }}
        </span>
        <h5 class="card-title h6 fw-semibold mb-2 text-truncate">
          {{ product.title }}
        </h5>
        <p class="card-text small text-secondary mb-3 description-clamp">
          {{ product.description }}
        </p>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
        <span class="fs-5 fw-bold text-navy">${{ Number(product.price).toFixed(2) }}</span>
        <button class="btn btn-custom-green btn-sm px-3 py-2">Ver Detalle</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.product-image-container {
  height: 180px;
}

.product-image {
  max-height: 100%;
  object-fit: contain;
}

.description-clamp {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  overflow: hidden;
}
</style>