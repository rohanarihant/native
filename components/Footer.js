import React, { Component } from 'react';
import * as commonStyles from './commonStyles';
import {Text, View,StyleSheet,Dimensions} from 'react-native';
import {colors} from './utils/constants.js';
let {height,width} = Dimensions.get('window');
const styles = StyleSheet.create({
  TitleText: {
    height:height*0.1,
    width:width,
    backgroundColor:colors.PINK_200
  }
});

class FooterScreen extends Component {
  render() {
    return (
      <View >
  
      </View>
    );
  }
}

export default FooterScreen;
