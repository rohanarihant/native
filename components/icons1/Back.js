import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {commonStyles} from '../commonStyles';


const Back = () => (
  <View style={commonStyles.IconLeftContainer}>
    <Ionicons name="md-arrow-back" size={25} color="white" />
  </View>
);

export default Back;
