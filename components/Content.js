import React, { Component } from 'react';
import * as commonStyles from './commonStyles';
import { Image,View,StyleSheet,Dimensions} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

import {colors} from './utils/constants.js';

let {height,width} = Dimensions.get('window');

const styles = StyleSheet.create({
  TitleText: {
    height:height,
    width:width,
    backgroundColor:'#F1EEED'
  },
  mainNews:{
    borderWidth:2,
    borderRadius:2
  },
  mainImage:{
    width: width,
    height: height*0.2,
    borderRadius:2,
    margin: 5,
  },
  allNews:{
    borderWidth:2,
    borderRadius:2,
    flexDirection:'row',
    marginTop:height*0.005
  },
  allImage:{
    width: width*0.4,
    height: height*0.1,
    borderRadius:2,
    alignSelf: 'flex-end',
    margin: 5,
  },
  textHeading:{
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize:18,
    marginLeft:5
  },
  allTextHeading:{
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize:18,
    marginLeft:5,
    marginTop:10,
    width:width*0.55
  },
});

class ContentScreen extends Component {
  state = {
    newsList : [
      {newsHeading:'Triple Talak Bill passed in Lok Sabha',newsImage:require('./newsImages/3-talak.jpg'),category:'national'},
      {newsHeading:'Ties Between India And China "Back On Normal Track": Report',newsImage:require('./newsImages/narendra-modi-xi-jinping.webp'),category:'international'},
      {newsHeading:'Meghalaya Rescue Operation Live Updates: Air Force, Coal India Teams To Reach Today',newsImage:require('./newsImages/meghalaya_mine.jpg'),category:'international'},
      {newsHeading:'P Chidambaram Takes Dig At PM Over His Remarks On Congress Loan Waivers',newsImage:require('./newsImages/chidambaram-conferencewebp.webp'),category:'international'},
      {newsHeading:'Wont Tolerate Attempts To Create Rift Between Communities Amarinder Singh',newsImage:require('./newsImages/amarinder-singwebp.webp'),category:'international'},
      {newsHeading:'The Men Behind Delhis Busted ISIS-Inspired Terror Group',newsImage:require('./newsImages/terrorist.jpeg'),category:'international'},
    ]
  }
  render() {
    return (
      <View style={styles.TitleText}>
        <Container>
        <Content ref={c => (this.component = c)}>
        <View style={styles.mainNews}>
          <Image style={styles.mainImage} source={require('./newsImages/3-talak.jpg')}></Image>
          <Text style={styles.textHeading}>Triple Talak Bill passed in Lok Sabha</Text>
        </View>
        {this.state.newsList.map((obj,index)=>{
          var tempUrl = obj.newsImage;
          return(
            <View style={styles.allNews} key={index}>
              <Text style={styles.allTextHeading}>{obj.newsHeading}</Text>
              <Image style={styles.mainImage} source={tempUrl}></Image>
            </View>
          )
        })}
        </Content>
      </Container>
      </View>
    );
  }
}

export default ContentScreen;
