import React, {Component, Fragment} from 'react'

interface MyComponentProps {
  props?: any
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
    if (event.target.value) {
      this.setState({selectedFile: event.target.files[0].name});
    } else {
      this.setState({selectedFile: "No file Selected"});
    }
  }

 render(){
   return(
     <Fragment>
       <input
         type="file"
         onChange={this.fileSelectedHandler}
       />
       <h2>Selected File: {this.state.selectedFile}</h2>
     </Fragment>
   )
 }
}

export default UploadImage