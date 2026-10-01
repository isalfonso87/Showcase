import { getCategories } from '../../services/api'

export default {
  namespaced: true,
  state: () => ({
    categoriaSeleccionada: '',
    categorias: []
  }),
  mutations: {
    SET_CATEGORIA(state, categoria) {
      state.categoriaSeleccionada = categoria
    },
    SET_CATEGORIAS(state, categorias) {
      state.categorias = categorias
    }
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const data = await getCategories()
        commit('SET_CATEGORIAS', data)
      } catch (err) {
        console.error('Error al obtener categorías:', err)
      }
    },
    seleccionarCategoria({ commit }, categoria) {
      commit('SET_CATEGORIA', categoria)
    }
  },
  getters: {
    productosFiltrados: (state, getters, rootState) => {
      const todos = rootState.productos.items
      if (!state.categoriaSeleccionada) {
        return todos
      }
      return todos.filter(
        p => p.category.toLowerCase() === state.categoriaSeleccionada.toLowerCase()
      )
    }
  }
}