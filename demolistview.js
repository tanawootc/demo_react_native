import React from 'react';
import {FlatList,StyleSheet,Text,View} from 'react-native'

export default flastlist =()=> {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    {key:'Devid',age:20},
                    {key:'john' ,age:30},
                    {key:'dave' ,age:40}
                ]} 
            renderItem={({item})=> <Text style={styles.item} >{item.key}, {item.age} </Text>}
                >
            </FlatList>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    item:{
        padding:10,
        fontSize:18,
        height:44
    }
})