import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state=
    {
      color: "coral",
      colorText: "purple",
      borderColor: "red",
      clickCounter: 0
    }
  }

  colorChange=()=> //function to to return random colors
  {
    const colors=["purple","red","green","darkorchid", "aqua","cyan","darkkhaki", "gold", "yellow","chartreuse","burlywood","aliceblue", "orange","blue","brown","antiquewhite","aquamarine","coral","darkviolet"];
    let color=colors[Math.floor(Math.random()*colors.length)];
    return color;
  }

  onChange=()=>
  {  
    this.setState(
    {
      color: this.colorChange(), //call colorChange() function to get random color
      colorText:this.colorChange(),
      borderColor: this.colorChange(),
      clickCounter: (this.state.clickCounter+1) //increase counter by 1 for each click
    })
    console.log("click counter ===>",this.state.clickCounter)
  }

  render()
  {
    return(
      <div className="App">
      <h1>Box color change</h1>
      <div className="colorBox"
      style={{backgroundColor:
      this.state.color, borderColor: this.state.borderColor}}
      onClick={this.onChange}>
        <p style={{color:this.state.colorText}}>Click Me</p>
      </div>
      </div>
    )
  }
}

export default App;