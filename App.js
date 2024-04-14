import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {View, Text, StyleSheet, Appearance, useColorScheme} from 'react-native';
import { WlcmSrn } from './src/Screens';
import Routes from './src/Navigation/Routes';



function App({navigation}) {
  return(
    <Routes />
  )
}


export default App;



