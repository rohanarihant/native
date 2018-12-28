import React, { Component } from 'react';
import {Text, View,StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let {height,width} = Dimensions.get('window');
const styles = StyleSheet.create({
  headingText:{
    textAlign:'center',
    fontSize: 20,
    color:'#2B4F7F',
    marginTop: height*0.03
  },
  firstRow:{
    // flex:2,
    flexDirection:'row',
    marginTop:height*0.03,
    marginBottom:height*0.03,
    marginLeft:height*0.02,
    marginRight:height*0.02,
    // maxHeight:height*0.1,
    justifyContent:'space-around'
  },
  viewStyle:{
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:"center"
  },
  textStyle:{
    fontSize:12,
    alignItems:'center'
  }
})
export default class PropertyOptions extends Component {
  
    render() {
      return (
        <View >
          <Text style={styles.headingText}>What you are looking for?</Text>
        <View style={styles.firstRow}>
          <View style={styles.viewStyle}>
              <Icon name="home" size={40} color="#2B4F7F" /><Text style={styles.textStyle}>Home Removals</Text>
          </View>
          <View style={styles.viewStyle}>
              <Icon name="home" size={40} color="#2B4F7F" /><Text style={styles.textStyle}>Office Removals</Text>
          </View>
          <View style={styles.viewStyle}>
              <Icon name="home" size={40} color="#2B4F7F" /><Text style={styles.textStyle}>Piano Removals</Text>
          </View>
        </View>
        <View style={styles.firstRow}>
          <View style={styles.viewStyle}>
              <Icon name="home" size={40} color="#2B4F7F" /><Text style={styles.textStyle}>Interstate Removals</Text>
          </View>
          <View style={styles.viewStyle}>
              <Icon name="home" size={40} color="#2B4F7F" /><Text style={styles.textStyle}>Furniture Removals</Text>
          </View>
          <View style={styles.viewStyle}>
              <Icon name="home" size={40} color="#2B4F7F" /><Text style={styles.textStyle}>Antique Removals</Text>
          </View>
        </View>
        <View style={styles.firstRow}>
          <View style={styles.viewStyle}>
              <Icon name="home" size={40} color="#2B4F7F" /><Text style={styles.textStyle}>Rubbish Removals</Text>
          </View>
          <View style={styles.viewStyle}>
              <Icon name="home" size={40} color="#2B4F7F" /><Text style={styles.textStyle}>Packing Services</Text>
          </View>
          <View style={styles.viewStyle}>
              <Icon name="home" size={40} color="#2B4F7F" /><Text style={styles.textStyle}>Furniture Assembly</Text>
          </View>
        </View>
        

        </View>
      );
    }
  }