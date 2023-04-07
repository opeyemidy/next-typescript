import { render } from '@testing-library/react'
import Home from '@/pages/index'
import { Provider } from 'react-redux'
import { store } from '../store'

it('renders homepage unchanged', () => {
  const { container } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  )
  expect(container).toMatchSnapshot()
})
