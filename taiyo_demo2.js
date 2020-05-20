import React, { Component } from 'react';
import { Text, View ,Image,Button, StyleSheet,Dimensions} from 'react-native';

export default class app extends Component {
  render() {
    return (
        <View >
            <Text style={{color:'red',fontSize:20}} >Text</Text>   
            <Text style={{color:'red',fontSize:40}} >Text</Text> 
            <Text>Text</Text> 
            <Text>Text</Text> 
            <Text>Text</Text>  
        </View>
    );
  }
}

