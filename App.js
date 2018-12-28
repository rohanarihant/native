/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Dimensions, Text, View} from 'react-native';
import ProfileScreen from './components/Profile';
import ContentScreen from './components/Content';
import FooterScreen from './components/Footer';
import SectionsScreen from './components/Sections';
import SplashScreen from './screen/splash';
import {colors} from './components/utils/constants.js';
let {height,width} = Dimensions.get('window');



export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading:true
    }
  }
  componentWillMount(){
    setTimeout(()=>{
      this.setState({loading:false});
    },500);        
  }
  render() {
    return (
   
      <View style={styles.container}>
        {/* <View style={styles.drawer}>
          <Text style={styles.welcome}>Welcome ROHAN</Text>
        </View> */}
        {this.state.loading?<SplashScreen />:
        <View>
          <ProfileScreen />
          {/* <ContentScreen /> */}
          <SectionsScreen />
        </View>
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.PINK_300,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  drawer:{
    backgroundColor:'black',
    height:50,
    width:width
  }
});
