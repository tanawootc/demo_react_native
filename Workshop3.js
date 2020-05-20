import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';




export default class Component1 extends Component {
  render()
  {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>Devoop</Text>
      </View>
    )
  };
 
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#FF0000',
    alignItems:'center',
    justifyContent:'center'
  },
  item:{
    color:'#0000FF'
  }
})

