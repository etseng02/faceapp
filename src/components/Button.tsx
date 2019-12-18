import React from 'react';
import '../styles/_button.scss'
// import { tsPropertySignature } from '@babel/types';

interface Props {
  text: String
  changeUploadMode: (newMode: string)=> void
}

export const Button: React.FC<Props> = ({text, changeUploadMode}) => {

  let mode = ""

  if (text === 'Identify Face') {
    mode = 'identify'
  } else if (text === 'Train Face'){
    mode = 'train'
  }

  return (
    <button
    onClick={()=> changeUploadMode(mode)}
    >
      {text}
    </button>
  )
}