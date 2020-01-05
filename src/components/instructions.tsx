import React, { Fragment } from 'react'
import '../styles/_instructions.scss'

export const Instructions: React.FC = (props) => {

  return (
    <Fragment>
      <div className="instructions">
        <h2>Training Instructions</h2>
        <h3>1. Upload an image!</h3>
        <h3>2. File name must be the full name of the person seperated by a '-'</h3>
        <h3>3. Image must use the following extentions: "PNG", "JPG", "JPEG"</h3>
        <h4>Accepted File Name: Tom-Hanks.png</h4>
        <h4>NOT ACCEPTED File Name: tony_hawks.pdf</h4>
      </div>
    </Fragment>
  )
}