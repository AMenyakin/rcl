import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

describe('TestComponent', () => {
  it('renders text input with correct initial state', () => {
    const { getByRole } = render(<TestComponent name="Hello world!" />);
    expect(getByRole('textbox'/* , { name: 'Hello world!' } */)).toBeEnabled();
  });
});
