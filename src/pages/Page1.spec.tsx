import { fireEvent, render, screen } from '@testing-library/react';

import { Page1 } from './Page1';

describe('Page1', () => {
  it('should render the greeting', () => {
    render(<Page1 />);

    expect(screen.getByText('Hello React Page 1!')).toBeInTheDocument();
  });

  it('should render the element', () => {
    const { container } = render(<Page1 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should fire callback on button click', () => {
    const callback = jest.fn();
    render(<Page1 cb={callback} />);

    fireEvent.click(screen.getByText('Click me!'));

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
