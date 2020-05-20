import React, { Component } from 'react';
import {Text,View} from 'react-native';



export default class Component1 extends Component {
  render()
  {
    return (
      <View style={{flex:1,flexDirection:'column'
      ,backgroundColor:'#FF0000',alignItems:'center',justifyContent:'center'}}>
        <BlinkText message="tanawoot" interval={100}></BlinkText>
      </View>
    )
  };
 
}

class BlinkText extends Component {
  
    constructor(props){
        super(props)
        this.state={isVisble:true};

        setInterval(()=>{
            this.setState(oldState=>{
                return {isVisble :!oldState.isVisble}
            })
        },this.props.interval)

    }

  render(){
    let display= this.state.isVisble ? this.props.message : "";

    return (     
     <Text style={{textAlign:'center',color:'green'}}>
        {display}
     </Text>
    )
  };
}

