import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import navStrings from '../../Constants/navStrings';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useTheme} from '@react-navigation/native';
import colors from '../../Components/ButtonComp/colors';
import AwesomeButton, {ThemedButton} from 'react-native-really-awesome-button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function Rn_Intro({navigation}) {
  var colors = useTheme().colors;

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <FastImage
            source={require('../../assets/images/react-native.gif')}
            style={styles.img}
          />
          <Text style={[styles.headTxt]}>React Native</Text>
          <Text style={[styles.subTxt, {color: colors.text}]}>
            Learn once, write anywhere.
          </Text>
        </View>

        <View
          style={[
            styles.info,
            {
              backgroundColor: colors.text,
            },
          ]}>
          <Text style={[styles.txt, {color: colors.background}]}>
            React Native is an open-source UI software framework created by Meta
            Platforms, Inc. It is used to develop applications for Android,
            Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling
            developers to use the React framework along with native platform
            capabilities.
          </Text>
          <Text style={[styles.txt, {color: colors.background}]}>
            There are two ways to begin with building projects.{'\n'}
            {'\n'}
            One way is with Functional component.{'\n'}
            {'\n'}
            Another way is with Class component.
          </Text>
          <Text style={[styles.txt, {color: colors.background}]}>
            Note* If you are very new to React Native. Please start with
            <Text
              style={{color: 'blue', fontStyle: 'italic', fontWeight: 'bold'}}
              onPress={() => navigation.navigate(navStrings.HOME)}>
              {' '}
              basics
            </Text>
            .
          </Text>
        </View>
        <View style={styles.btnAlign}>
          <ThemedButton
            onPress={() => navigation.navigate(navStrings.Cl_Home)}
            name="bruce"
            type="primary"
            // size='20'
            width={wp('40%')}
            style={styles.btnDesign}
            backgroundColor="#61dafb">
            Class
          </ThemedButton>
          <ThemedButton
            onPress={() => navigation.navigate(navStrings.ST_HOME)}
            name="bruce"
            // size='6/0'
            type="primary"
            width={wp('40%')}

            style={styles.btnDesign}
            backgroundColor="#61dafb">
            Functional
          </ThemedButton>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    // position: 'absolute',
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  txt: {
    alignItems: 'center',
    margin: 20,
    fontSize: 18,
    // color: colors.light.colors.white,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  headTxt: {
    alignSelf: 'center',
    color: '#61dafb',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTxt: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    // color:colors.light.colors.commonWhite,
  },
  info: {
    borderTopRightRadius:5,
    borderTopLeftRadius:5
    // flex: 1,
    // height: hp('230%'),
    // marginTop:200
    // backgroundColor:colors.light.colors.commonWhite,
    // width:wp('100%')
  },
  btnAlign: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,

  },
  btnDesign: {
    // width:10,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#61dafb',
  },
  btnText: {
    fontWeight: 'bold',
  },
});

// <TouchableOpacity
// style={styles.btnDesign}
// onPress={() => navigation.navigate(navStrings.Cl_Home)}>
// <Text style={[styles.btnText, {color: colors.text}]}>Functional</Text>
// </TouchableOpacity>
// <TouchableOpacity
// style={styles.btnDesign}
// onPress={() => navigation.navigate(navStrings.ST_HOME)}>
// <Text style={[styles.btnText, {color: colors.text}]}>Class</Text>
// </TouchableOpacity>
