import React,{Component} from 'react';
import {Text,View,Button} from 'react-native';


export  class Cat extends Component {
    state={isHungry:true};
    
    render(props){

        return (
               <View>
                 <Text>
                     I am {this.props.name} , and I am
                     {this.state.isHungry ? "Hungry" : " full"}!
                 </Text>
                 <Button
                    onPress={()=>{
                        this.setState({isHungry:false})
                    }}
                    disabled={!this.state.isHungry}
                    title={
                        this.state.isHungry ? "Some milk" : "Thanks"
                    }

                     >

                 </Button>
                </View>
           
        );
    }
}

export default class Cafe extends Component {
    render() {
      return (
        <>
          <Cat name="Munkustrap" />
          <Cat name="Spot" />
        </>
      );
    }
  }