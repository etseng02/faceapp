import React from 'react';
import '../styles/_button.scss'
// import { tsPropertySignature } from '@babel/types';

interface Props {
  text: String
  selected: String
  changeUploadMode: (newMode: string)=> void
}

export const Button: React.FC<Props> = ({text, selected, changeUploadMode}) => {

  let mode = ""
  let background = ""
  
  // On click event handler that passes Identify or train mode to to Home screen state depending on text of the button
  if (text === 'Identify Face') {
    mode = 'identify'
  } else if (text === 'Train Face'){
    mode = 'train'
  }

  if (selected === 'identify' && text === 'Identify Face') {
    background = 'yellow'
  } else if (text === 'Identify Face'){
    background = 'white'
  }

  if (selected === 'train' && text === 'Train Face') {
    background = 'yellow'
  } else if (text === 'Train Face'){
    background = 'white'
  }


  return (
    <button
    onClick={()=> changeUploadMode(mode)}
    style={{backgroundColor: background}}
    >
      {text}
    </button>
  )
}