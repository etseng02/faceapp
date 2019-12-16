import React, { Fragment } from 'react';
import { Header } from '../components/Header';
import UploadImage from '../components/UploadImage'

export const HomeScreen: React.FC = (props) => {
  return (
    <Fragment>
      <Header/>
      <UploadImage/>

    </Fragment>
  )
}