import React from "react";
class Colorrender extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      rendertdn_color(["#FF00FF","#FF00FF","#FF00FF","#FF00FF","#FF00FF"])
    )
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>ちんちん<Colorrender></Colorrender></div>
    );
  }
}
function rendertdn_color(colorcodes){
  /*return (
    <div style={{color:colorcode}}>餃子の王将</div>
  )*/
  return(
    <div>
      {colorcodes.map((colorcode)=>(
            <div style={{color:colorcode}}>■</div>
      ))
      }
    </div>
  );
}
export default App;