import React from 'react';
import Gap from '../src/settings/Spacing';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#3c5268',
      },

    ],
  },
};

export const decorators = [
  Story => (
    <>
      <Gap />
      <Story />
    </>
   )
  ];