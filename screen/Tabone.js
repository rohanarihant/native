import React, { Component } from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';


let {height,width} = Dimensions.get('window');
const styles = StyleSheet.create({
  marginFix:{
    width:width*1
  },
  containerView:{
   
    height: 300,
    width: 100,
    // backgroundColor:'#E6DFDD',
    color:'black'
  }
});
export default class TabOne extends Component {
  
    render() {
      return (
<Container>
        <Header />
        <Content ref={c => (this.component = c)}>
          <Button style={{ margin: 20 }}
            onPress={() => this.component._root.scrollToEnd()}>
            <Text>Scroll to end</Text>
          </Button>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
         
        </Content>
      </Container>
      );
    }
  }