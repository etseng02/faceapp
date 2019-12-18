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

      <Button
        text ={'Identify Face'}
        changeUploadMode={changeUploadMode}
      />
      <Button
        text ={'Train Face'}
        changeUploadMode={changeUploadMode}
      />

      <UploadImage/>

    </Fragment>
  )
}