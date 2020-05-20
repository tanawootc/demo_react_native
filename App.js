import React, { Component } from 'react';
import {Text,View} from 'react-native';

export default class App extends Component {
  render()
  {
    return (
      <View style={{flex:1,flexDirection:'column'
      ,backgroundColor:'#FF0000',alignItems:'center',justifyContent:'center'}}>
        <Text style={{textAlign:'center',color:'green'}}>
          Hi
          </Text>
      </View>
    )
  };
 
}