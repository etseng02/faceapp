import React, { Fragment, useState } from 'react';
import { Header } from '../components/Header';
import UploadImage from '../components/UploadImage'
import { Button } from '../components/Button';

export const HomeScreen: React.FC = (props) => {

  const [state, setState] = useState({
    imageUploadMode: ""
  });
  
  const changeUploadMode = (newMode: string) => {
    setState({...state, imageUploadMode: newMode})
  }

  return (
    <Fragment>
      <Header/>

      <h2>Face app is an application that can identify faces when trained. To begin please train a face or if you have already, you can identify a face.</h2>

      <Button
        text ={'Identify Face'}
        changeUploadMode={changeUploadMode}
      />
      <Button
        text ={'Train Face'}
        changeUploadMode={changeUploadMode}
      />

      {state.imageUploadMode &&
        <Fragment>
        <h1>{state.imageUploadMode}</h1>
        <UploadImage
          mode = {state.imageUploadMode}
        />
        </Fragment>
      }

    </Fragment>
  )
}