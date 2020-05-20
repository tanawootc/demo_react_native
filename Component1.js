import React, { Component } from 'react';
import {Text,View} from 'react-native';



export default class Component1 extends Component {
  render()
  {
    return (
      <View style={{flex:1,flexDirection:'column'
      ,backgroundColor:'#FF0000',alignItems:'center',justifyContent:'center'}}>
        <MyText message="tanawoot" option="1234"></MyText>
      </View>
    )
  };
 
}

class MyText extends Component {
  
  render(){
    return (
     <Text style={{textAlign:'center',color:'green'}}>
     Hi {this.props.message} , {this.props.option}
     </Text>
    )
  };
}

