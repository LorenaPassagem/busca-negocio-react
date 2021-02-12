import React from 'react';
import Styles from '../src/styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  backgrounds: {
    layout: 'fullscreen',
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
      <Styles />
      <Story />
    </>
   )
  ];