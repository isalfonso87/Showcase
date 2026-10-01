import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProductCard from '../ProductCard.vue'

describe('ProductCard.vue', () => {
  it('renderiza correctamente la información recibida por props', () => {
    const mockProduct = {
      id: 1,
      title: 'Audífonos Bluetooth',
      price: 99.99,
      description: 'Cancelación de ruido activa',
      category: 'audio',
      image: 'https://via.placeholder.com/150'
    }

    const wrapper = mount(ProductCard, {
      props: { product: mockProduct }
    })

    expect(wrapper.find('h3').text()).toBe('Audífonos Bluetooth')
    expect(wrapper.find('.price').text()).toContain('$99.99')
    expect(wrapper.find('.category').text()).toBe('audio')
    expect(wrapper.find('.description').text()).toBe('Cancelación de ruido activa')
  })
})