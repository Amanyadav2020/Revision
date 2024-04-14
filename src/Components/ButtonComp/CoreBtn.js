import {View, Text, TouchableOpacity, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from './colors';
import { useTheme } from '@react-navigation/native';



export default function CoreBtn({onPress, btnText}) {
  const colors = useTheme().colors;
  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.btnStyling} onPress={onPress}>
        <Text style={[styles.btnText,{color:colors.white}]}>{btnText}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop:5,
  },
  btnStyling: {
    height: hp('6.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('50') -10,
    marginHorizontal:5,
    borderRadius: 10,
    backgroundColor:'#b452ff'
  },
  
  btnText: {
    fontWeight: 'bold',
    fontFamily:'two',
    // color:
  },
})

// <Text>{btnText}</Text>