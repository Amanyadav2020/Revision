import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import {Aboutus, Cl_Home,Home, RN, Rn_Intro, St_Home, WlcmSrn, intro} from '../Screens';

import navStrings from '../Constants/navStrings';
import core from '../Screens/React-Native/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Routes({navigation}) {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="WlcmSrn"
        screenOptions={{headerShown:false}}>
        <Stack.Screen name={navStrings.WLCMSRN} component={WlcmSrn} />
        <Stack.Screen name={navStrings.HOME} component={Home} />
        <Stack.Screen name={navStrings.CORE} component={core} />
        <Stack.Screen name={navStrings.INTRO} component={intro} />
        <Stack.Screen name={navStrings.RN} component={RN} />
        <Stack.Screen name={navStrings.RN_INTRO} component={Rn_Intro} />
        <Stack.Screen name={navStrings.Cl_Home} component={Cl_Home} />
        <Stack.Screen name={navStrings.ST_HOME} component={St_Home} />
        <Stack.Screen name={navStrings.ABOUTUS} component={Aboutus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}