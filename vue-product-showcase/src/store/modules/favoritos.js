export default {
  namespaced: true,
  state: () => ({
    items: []
  }),
  mutations: {
    TOGGLE_FAVORITO(state, producto) {
      const index = state.items.findIndex(item => item.id === producto.id)
      if (index >= 0) {
        state.items.splice(index, 1)
      } else {
        state.items.push(producto)
      }
    }
  },
  actions: {
    toggleFavorito({ commit }, producto) {
      commit('TOGGLE_FAVORITO', producto)
    }
  },
  getters: {
    esFavorito: (state) => (id) => {
      return state.items.some(item => item.id === id)
    },
    totalFavoritos: (state) => state.items.length
  }
}