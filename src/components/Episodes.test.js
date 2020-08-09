import React from 'react';
import {
  render
} from '@testing-library/react';
import Episodes from './Episodes';



it('should render, in general', () => {
      render( < Episodes episodes = {
          []
        }
        />)
      })