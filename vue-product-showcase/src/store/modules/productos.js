import { getProducts } from '../../services/api'

export default {
  namespaced: true,
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),
  mutations: {
    SET_PRODUCTS(state, products) {
      state.items = products
    },
    SET_LOADING(state, status) {
      state.loading = status
    },
    SET_ERROR(state, errorMsg) {
      state.error = errorMsg
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        const data = await getProducts()
        commit('SET_PRODUCTS', data)
      } catch (err) {
        commit('SET_ERROR', 'No se pudieron cargar los productos desde la API.')
        console.error('Error al cargar productos:', err)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
}