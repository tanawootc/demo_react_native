import React, { Component, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function pizza(){
    const [text,settext] =useState('');
    return (
        <View style={{padding:10}}>
            <TextInput
                style={{
                height:40
                }}
                placeholder="Type here.."
                onChangeText={text=>settext(text)}
                defaultValue={text}
            >
            <Text style={{padding:10,fontSize:42}}>
            {text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>

            </TextInput>

        </View>
    )


}