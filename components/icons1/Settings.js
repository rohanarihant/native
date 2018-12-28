import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {commonStyles} from '../commonStyles';



const Settings = () => (
  <View style={commonStyles.IconLeftContainer}>
    <Ionicons name="md-settings" size={25} color="white" />
  </View>
);

export default Settings;
