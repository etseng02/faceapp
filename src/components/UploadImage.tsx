import React, {Component, Fragment} from 'react'
import '../styles/_uploadimage.scss'
const axios = require('axios');

interface MyComponentProps {
  mode: string
}

interface MyComponentState {
  selectedFile: string
}

class UploadImage extends Component<MyComponentProps, MyComponentState>{

  constructor(props: any){
    super(props);

    this.state = {
      selectedFile: ""
   }

  }

  fileSelectedHandler = (event: any) => {

    console.log(event.target.files[0])

    if (this.props.mode === "train") {
      console.log("Training!")
      axios.get('http://localhost:5000/api/train')
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
      axios({
        method: 'post',
        url:'http://localhost:5000/api/recognize',
        data: {
          image: event.target.files[0]
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




    // if (event.target.value) {
    //   this.setState({selectedFile: event.target.files[0].name});
    // } else {
    //   this.setState({selectedFile: "No file Selected"});
    // }
  }

 render(){
   return(
     <Fragment>
       <input
         type="file"
         onChange={this.fileSelectedHandler}
         name="image"
       />
       {/* <h2>Selected File: {this.state.selectedFile}</h2> */}
     </Fragment>
   )
 }
}

export default UploadImage