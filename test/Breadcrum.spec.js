import { mount } from '@vue/test-utils'
import Breadcrumb from '@/components/Breadcrumb.vue'

describe('Breadcrumb', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Breadcrumb)
    expect(wrapper.vm).toBeTruthy()
  })

  test('Renders links', () => {
    const wrapper = mount(Breadcrumb, {
      propsData: {
        links: [
          {
            name: 'test',
            to: '/#',
            disabled: false,
          },
          {
            name: 'test2',
            to: '/#',
            disabled: false,
          },
        ],
      },
    })
    expect(wrapper.findAll('li')).toHaveLength(2)
  })
})
