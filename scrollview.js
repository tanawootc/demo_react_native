import React, { Component, useState } from 'react';
import { Text, TextInput, View,ScrollView,Image } from 'react-native';

export default App=()=> {
    const logo={
        uri:'https://reactnative.dev/img/tiny_logo.png',
        width:64,
        height:64
    };

    return (
       <ScrollView>
           <Text style={{fontSize:80}} >Scroll Me </Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Text style={{fontSize:80}} >Scroll Me </Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Text style={{fontSize:80}} >Scroll Me </Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
       </ScrollView>
    )


}