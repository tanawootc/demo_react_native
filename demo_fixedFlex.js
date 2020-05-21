import React, { Component } from 'react';
import { View } from 'react-native';

export default function fixedDim(){
    return (
        <View style={{flex:1}} >
           <View style={{
               flex:1,
               width:50,
               height:50,
               backgroundColor:'powderblue'
           }} />

<View style={{
                flex:2,
               width:100,
               height:100,
               backgroundColor:'skyblue'
           }} />

<View style={{
                flex:3,
               width:150,
               height:150,
               backgroundColor:'steelblue'
           }} />

           
        </View>
    );
}