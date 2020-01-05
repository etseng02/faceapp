import React, { Fragment, useState } from 'react';
import { Header } from '../components/Header';
import UploadImage from '../components/UploadImage'
import { Button } from '../components/Button';
import {Instructions} from '../components/instructions'

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
      <div className="main-body">
      <h2>Face app is an application that can identify faces when trained. To begin please train a face or if you have already, you can identify a face.</h2>

      <div className="main-buttons">
        <Button
          text ={'Identify Face'}
          changeUploadMode={changeUploadMode}
          selected={state.imageUploadMode}
        />
        <Button
          text ={'Train Face'}
          changeUploadMode={changeUploadMode}
          selected={state.imageUploadMode}
        />
      </div>

      {state.imageUploadMode === 'train' &&
        <Instructions/>
      }

      {state.imageUploadMode === 'train' &&
        <Fragment>
        <UploadImage
          mode = {state.imageUploadMode}
        />
        </Fragment>
      }

      {state.imageUploadMode === 'identify' &&
        <Fragment>
        <UploadImage
          mode = {state.imageUploadMode}
        />
        </Fragment>
      }

      </div>

    </Fragment>
  )
}