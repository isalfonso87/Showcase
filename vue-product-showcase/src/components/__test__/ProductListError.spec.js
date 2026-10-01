import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createStore } from 'vuex'
import ProductList from '../ProductList.vue'

describe('ProductList.vue - Manejo de Errores', () => {
  it('despliega el mensaje visual amigable cuando ocurre un error de API', () => {
    const storeMock = createStore({
      modules: {
        productos: {
          namespaced: true,
          state: () => ({
            items: [],
            loading: false,
            error: 'No se pudieron cargar los productos desde la API.'
          })
        },
        filtros: {
          namespaced: true,
          state: () => ({
            categoriaSeleccionada: '',
            categorias: []
          }),
          getters: {
            productosFiltrados: () => []
          }
        }
      }
    })

    const wrapper = mount(ProductList, {
      global: {
        plugins: [storeMock]
      }
    })

    const errorMessage = wrapper.find('.error')
    expect(errorMessage.exists()).toBe(true)
    expect(errorMessage.text()).toContain('No se pudieron cargar los productos desde la API.')
  })
})