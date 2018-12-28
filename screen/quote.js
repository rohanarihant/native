import React, { Component } from 'react';
import {Text, View,StyleSheet,Dimensions,TouchableOpacity,Button} from 'react-native';

let {height,width} = Dimensions.get('window');
const styles = StyleSheet.create({
    outerView:{
        flex:2,
        height:height*0.3,
        width:width,
        backgroundColor:'#E1E3E7',
        // alignItem:'center',
        // justifyContent:'space-between'
    },
    buttonStyle:{
        height:height*0.2,
        width:width*0.4,
        backgroundColor:'#2B4F7F',
        justifyContent:'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      },
      buttonContainer: {
        backgroundColor: '#2E9298',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
      }
})

export default class QuoteScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Hello" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
      </View>
      );
    }
  }