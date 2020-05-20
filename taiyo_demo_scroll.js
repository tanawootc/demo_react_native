import React,{Component} from 'react';
import {Text,View,Image,TextInput, ScrollView} from 'react-native';


export default class App extends Component {

   
    render(){
        const name="devoop";

        function getfullname(firstname,secondname) {
            return firstname + ' ' + secondname;
        }
        
        function Cat(props) {
            return (
                <View>
                    <Text>{props.name}</Text>
                </View>
            );
            
        }

        return (
           <ScrollView>
               <Text>Some Text</Text>
               <View>
                 <Text>More..{name}</Text>
                 <Text>this fullname..{getfullname('tana','chou')}</Text>
                <Image 
                source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
                style={{width:200,height:200}}
                >
                </Image>
               
                </View>
                <TextInput style={{
                    height:40,
                    borderColor:'gray',
                    borderWidth:1
                }}
                    defaultValue="Please input"
                     >

                </TextInput>
                <Cat name="JJ"></Cat>
                <Cat name="BB"></Cat>
                
           </ScrollView>
        )
    }
}