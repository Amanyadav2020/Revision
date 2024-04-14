import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import navStrings from '../Constants/navStrings';
import {useTheme} from '@react-navigation/native';

export default function WlcmSrn({navigation}) {
  var color = useTheme().colors;
  const [isLoad, setIsLoad] = useState(false);
    useEffect (() =>{
      const timeOutId = setTimeout(() =>{
        setIsLoad(true);
        navigation.navigate(navStrings.HOME)
      },3000)
      return () => clearTimeout(timeOutId)
  },[navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.imageStyle
          ,
          {

          },
        ]}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/images/boy.png')}
        />
      </View>
      <View style={{alignItems: 'center',flex:2, top:10}}>
        <Text style={[styles.motiveTxt, {color: color.text}]}>
          Kal Kabhi Nahi Aati
        </Text>
        <Text style={[styles.motiveTxt, {fontSize: 25, color: color.text}]}>
          Learn Today!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'pink',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'center',
    height: 300,
    width: 300,
    marginVertical: hp('10%'),
    borderRadius: 20,
  },
  motiveTxt: {
    fontSize: 28,

    fontWeight: 'bold',
  },
});
