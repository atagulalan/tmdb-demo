import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('renders props.msg when passed', () => {
    const label = 'aria label test'
    const wrapper = shallowMount(Button, {
      props: { label }
    })
    expect(wrapper.find('button').attributes('aria-label')).toMatch(label)
  })
})
