import React, {Component, Fragment} from 'react'
import '../styles/_uploadimage.scss'
// import { createWriteStream } from 'fs'
const axios = require('axios');

interface MyComponentProps {
  mode: string
}

interface MyComponentState {
  selectedFile: string,
  oldImage: string,
  newImage: string
}

class UploadImage extends Component<MyComponentProps, MyComponentState>{

  constructor(props: any){
    super(props);

    this.state = {
      selectedFile: "",
      oldImage: "",
      newImage: "",
   }

  }

  fileSelectedHandler =  (event: any) => {

    //this.setState({... this.state, oldImage: files});
    this.setState({...this.state, oldImage: URL.createObjectURL(event.target.files[0])});

    console.log(event.target.files[0])

    let data = new FormData();

    data.append("image", event.target.files[0])
    
    if (this.props.mode === "train") {
       axios({
        method: 'post',
        url:'http://localhost:5000/api/train',
        data: data,
        headers:{
          'Content-Type': 'multipart/form-data',
          encoding: null
        }
      })
        .then(function (response:any) {
          // handle success
          console.log(response);
        })
        .catch(function (error:any) {
          // handle error
          console.log(error);
        })
    }

    if (this.props.mode === "identify") {
      var self = this;
       axios({
        method: 'post',
        url:'http://localhost:5000/api/recognize',
        data: data,
        responseType: 'arraybuffer',
        responseEncoding: 'binary',
        headers:{
          'Content-Type': 'multipart/form-data',
          encoding: null
        }
      })

        .then(function (response:any) {
          console.log(response.data)
          console.log(response);
          
          let blob = new Blob( [ response.data ], { type: "image/jpeg" } );

          self.setState({...self.state, newImage: URL.createObjectURL(blob)});
          
        })
        .catch(function (error:any) {
          // handle error
          console.log(error);
        })
    }

  }

 render(){
   return(
     <Fragment>
       <div className="upload">
        <input
          id='image'
          type="file"
          onChange={this.fileSelectedHandler}
          name="image"
        />
       </div>
       <div className="images">
         
        {this.state.newImage==="" &&
          <img src={this.state.oldImage} ></img>
        }

        <img src={this.state.newImage}></img>
       </div>
     </Fragment>
   )
 }
}

export default UploadImage