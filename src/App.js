import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      color: "coral",
      colorText: "purple",
      clickCounter: 0
    }
  }
  onChange=()=>{
   const colors=["purple","red","green","darkorchid", "aqua","cyan","darkkhaki", "gold", "yellow","chartreuse","burlywood","aliceblue", "orange","blue","brown","antiquewhite","aquamarine","coral","darkviolet"];
    let randomColor=colors[Math.floor(Math.random()*colors.length)];
    let randomTextColor=colors[Math.floor(Math.random()*colors.length)];
    this.setState({
      color: randomColor,
      colorText:randomTextColor,
      clickCounter: (this.state.clickCounter+1)
    })
    console.log("click counter ===>",this.state.clickCounter)
  }
  render(){
    return (
      <div className="App">
      <h1>Box color change</h1>
      <div className="colorBox"
      style={{backgroundColor:
      this.state.color}}
      onClick={this.onChange}>
        <p style={{color:this.state.colorText}}>Click Me
        </p>
      </div>
      </div>
    )
  }
}

export default App;