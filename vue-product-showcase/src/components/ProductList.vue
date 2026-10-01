<template>
  <section class="container py-4">
    <h2 class="text-navy fw-bold mb-4">Catálogo de Productos</h2>

    <div class="row mb-4 align-items-center">
      <div class="col-12 col-md-6 col-lg-4">
        <label for="category-select" class="form-label fw-bold mb-1">Filtrar por categoría:</label>
        <select 
          id="category-select" 
          class="form-select custom-select"
          :value="categoriaSeleccionada"
          @change="onCategoryChange"
        >
          <option value="">Todas las categorías</option>
          <option v-for="cat in categorias" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>
    </div>

    <!-- 1. Carga -->
    <div v-if="loading" class="alert custom-card text-center p-4 shadow-sm">
      <p class="m-0 fs-5">Cargando productos desde la API REST...</p>
    </div>

    <!-- 2. Error -->
    <div v-else-if="error" class="alert alert-danger text-center p-4 shadow-sm">
      <p class="mb-3">{{ error }}</p>
      <button @click="cargarDatos" class="btn btn-custom-green">Reintentar conexión</button>
    </div>

    <!-- 3. Lista Vacía -->
    <div v-else-if="productosFiltrados.length === 0" class="alert custom-card text-center p-4 shadow-sm">
      <p class="m-0 fs-5">No se encontraron productos disponibles en esta categoría.</p>
    </div>

    <!-- 4. Productos -->
    <div v-else class="row g-4">
      <div 
        v-for="item in productosFiltrados" 
        :key="item.id" 
        class="col-12 col-sm-6 col-lg-4 col-xl-3"
      >
        <ProductCard :product="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ProductCard from './ProductCard.vue'

const store = useStore()

const loading = computed(() => store.state.productos.loading)
const error = computed(() => store.state.productos.error)
const categorias = computed(() => store.state.filtros.categorias)
const categoriaSeleccionada = computed(() => store.state.filtros.categoriaSeleccionada)
const productosFiltrados = computed(() => store.getters['filtros/productosFiltrados'])

const cargarDatos = () => {
  store.dispatch('productos/fetchProducts')
  store.dispatch('filtros/fetchCategories')
}

const onCategoryChange = (e) => {
  store.dispatch('filtros/seleccionarCategoria', e.target.value)
}

onMounted(() => {
  cargarDatos()
})
</script>