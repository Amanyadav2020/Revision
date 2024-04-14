import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useColorScheme,
  BackHandler,
  Alert,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../Components/ButtonComp/colors';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useFocusEffect,
  useTheme,
} from '@react-navigation/native';
import navStrings from '../../Constants/navStrings';


export default function Home({navigation}) {
  // const theme = useColorScheme();
  var colors = useTheme().colors;
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
      // BackHandler.exitApp()
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackPress
        );
      };
    }, []),
  );

  return (
    <SafeAreaView

      style={styles.container}>
      <Text style={[styles.h1,{color:colors.text}]}>Which course you want to grab?</Text>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginVertical:hp('30%'),
          position:'absolute',
        }}>
        <View style={styles.imgAlign}>
          <TouchableOpacity
            onPress={() => navigation.navigate(navStrings.RN_INTRO)}
          >
            <Image
              style={styles.img}
              source={require('../../assets/images/rn.png')}
            />
          </TouchableOpacity>

          <Text style={[styles.imgTxt,{color:colors.text}]}>React-Native</Text>
        </View>
        <View style={styles.imgAlign}>
          <TouchableOpacity>
            <Image
              style={[styles.img]}
              source={require('../../assets/images/node.png')}
            />
          </TouchableOpacity>

          <Text style={[styles.imgTxt,{color:colors.text}]}>Node</Text>
        </View>
        <View style={styles.imgAlign}>
          <TouchableOpacity>
            <Image
              style={styles.img}
              source={require('../../assets/images/dsa.png')}
            />
          </TouchableOpacity>

          <Text style={[styles.imgTxt, {color:colors.text}]}>Dsa</Text>
        </View>
        <View style={styles.imgAlign}>
        <TouchableOpacity>
          <Image
            style={styles.img}
            source={require('../../assets/images/figma.jpeg')}
          />
        </TouchableOpacity>

        <Text style={[styles.imgTxt, {color:colors.text}]}>Figma</Text>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textToBold: {
    fontWeight: '700',
  },
  container: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
    // flexWrap:'wrap'
  },
  h1: {
    fontSize: 20,
    top: hp('20%'),
    fontWeight:'bold'
  },
  img: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  imgAlign: {
    // position:'absolute',

    alignItems: 'center',
    margin:10,
    // marginVertical: hp('10%'),
    marginHorizontal: wp('5%'),
  },
  imgTxt: {
    top: 10,
    fontWeight:'bold'
  },
});

// theme={theme === 'dark' ? DarkTheme : DefaultTheme}