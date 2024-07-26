import { render, screen } from '@testing-library/react'

import Moacir from '.'

describe('<Moacir />', () => {
  it('should render the heading', () => {
    const { container } = render(<Moacir />)

    expect(screen.getByRole('heading', { name: /Moacir/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
