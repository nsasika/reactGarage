import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select from './Select';
import defaultTheme from '@pagero/pagero-ui-theme';

const mockOptions = [
  {
    label: 'Any status',
    value: 'anyStatus',
  },
  {
    label: 'Fruit',
    options: [
      { label: 'Berries', value: 'berries' },
      { label: 'Lavish Meal', value: 'lavishMeal' },
      { label: 'Insect Jelly', value: 'insectJelly' },
    ],
  },
  {
    label: 'Animals',
    options: [
      { label: 'Megaspider', value: 'megaspider' },
      { label: 'Thrumbo', value: 'thrumbo' },
      { label: 'Grizzly Bear', value: 'grizzlyBear' },
      { label: 'Red fox', value: 'redFox' },
      {
        label: 'A Very Mysterious Animal with a Very Very Long Name, so long that it does not fit',
        value: 'mysteriousAnimal',
      },
    ],
  },
  {
    label: 'Mechanoids',
    options: [
      { label: 'Scyther', value: 'scyther', isDisabled: true },
      { label: 'Centipede', value: 'Centipede' },
      { label: 'Lancer', value: 'Lancer' },
    ],
  },
];

describe('Select', () => {
  test('renders', () => {
    const { getByText } = render(<Select options={mockOptions} />);
    expect(getByText('Select...')).toBeInTheDocument();
  });
});
