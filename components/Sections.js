import React, { Component } from 'react';

import {View, StyleSheet, Dimensions,ListView,ScrollView} from 'react-native';
// import {colors} from './utils/constants.js';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,ScrollableTab } from 'native-base';
import Tabone from '../screen/Tabone';
import Tab2 from '../screen/Tabtwo';
import Tab3 from '../screen/propertyOptions';
import ContentScreen from './Content';

let {height,width} = Dimensions.get('window');

const styles = StyleSheet.create({
  marginFix:{
    width:width*1,
    height:200,
    backgroundColor:'black'
  },
  containerView:{
    flex:1,
    height: 200,
    width:width,
    backgroundColor:'black'
  }
//   SectionView: {
//     height:height*0.05,
//     width:width,
//     backgroundColor:colors.PINK_300,
//     borderBottomColor: colors.PINK_500,
//     borderBottomWidth: 1,
//     borderTopColor: colors.PINK_500,
//     borderTopWidth: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between', 
//   },
//   scene: {
//     flex: 1,
//     backgroundColor:'black'
//   }
});

class SectionsScreen extends Component {
  
  render() {
    return (
     
      <View style={{height:height, width:width,backgroundColor:'#3b5998'}}>
        <Tabs renderTabBar={()=> <ScrollableTab />} locked={true} tabStyle={styles.containerView}>
          <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
            <ContentScreen />
          </Tab>
          <Tab heading="Nation">
            <Tab2 />
          </Tab>
          <Tab heading="International">
            <Tab3 />
          </Tab>
          <Tab heading="Politics">
            <Tab3 />
          </Tab>
          <Tab heading="Entertainment">
            <Tab3 />
          </Tab>
          <Tab heading="Economy">
            <Tab3 />
          </Tab>
          <Tab heading="Crime">
            <Tab3 />
          </Tab>
          <Tab heading="Sports">
            <Tab3 />
          </Tab>
          <Tab heading="Bollywood">
            <Tab3 />
          </Tab>
          <Tab heading="Education">
            <Tab3 />
          </Tab>
          <Tab heading="Health">
            <Tab3 />
          </Tab>
        </Tabs>
      </View>  
     
    );
  }
}

export default SectionsScreen;
