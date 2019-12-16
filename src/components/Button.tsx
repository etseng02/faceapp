import React from 'react';
import { tsPropertySignature } from '@babel/types';

interface Props {
  text: String
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button>
      {props.text}
    </button>
  )
}