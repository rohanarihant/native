import React, { Component } from 'react';
import {Image,Text, View,StyleSheet,Dimensions,ListView} from 'react-native';
import PropertyOptions from './propertyOptions';
import QuoteScreen from './quote';

let {height,width} = Dimensions.get('window');
const styles = StyleSheet.create({
  headerImage : {
    width: width,
    maxHeight: height*0.2,
  },
  headerImageSection:{
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 5, width: 5 },
  }
})
export default class TabTwo extends Component {
  
    render() {
      return (
        <View>
          <View style={styles.headerImageSection}>
            <Image style={styles.headerImage}  source={require('../components/icons1/van3.jpg')} />
            <PropertyOptions />
            <QuoteScreen />
          </View>
         </View>
      );
    }
  }