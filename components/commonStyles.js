import {Text, View,StyleSheet,Dimensions} from 'react-native';
let {height,width} = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    textStyle:{
        fontSize: 100,
        color: '#fff',
    },
    IconLeftContainer:{
        height: height,
        paddingLeft: 15,
        justifyContent: "center",
    },
    IconRightContainer:{
        height: height,
        paddingRight: 15,
        justifyContent: "center",
    },
    titleText:{
        fontSize: 20,
        color:"#fff"
    }
});