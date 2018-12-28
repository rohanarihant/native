import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {commonStyles} from '../commonStyles';


const Hamburger = () => (
  <View style={commonStyles.IconLeftContainer}>
    <Ionicons name="ios-menu" size={25} color='white' />
  </View>
);

export default Hamburger;
