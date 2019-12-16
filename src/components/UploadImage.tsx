import React, {Component} from 'react'

class UploadImage extends Component{

  constructor(props: any){
    super(props);
  }

 render(){
   return(
    <input type="file"/>
   )
 }
}

export default UploadImage