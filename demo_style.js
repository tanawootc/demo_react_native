import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        marginTop:50
    },
    bigBlue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
        color:'red',
    }

})

export default LotsOfStyle=()=>{
    return (
        <View>
            <Text style={styles.red}>Red</Text>
            <Text style={styles.bigBlue}>big blue</Text>
            <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>
    )
}