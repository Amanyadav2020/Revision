import {View, Text, StyleSheet, SafeAreaView, useColorScheme} from 'react-native';
import React from 'react';

import {
  DarkTheme,
  DefaultTheme,
  useTheme,
  NavigationContainer,
} from '@react-navigation/native';
import navStrings from '../../Constants/navStrings';
import CoreBtn from '../../Components/ButtonComp/CoreBtn';




export default function RN({navigation}) {
  const colors = useTheme().colors;
  return (
    <SafeAreaView  style={styles.container}>
      <Text style={[styles.header,{color:colors.white}]}>CoreConcepts</Text>
       <View style={styles.btnAlign}>
        <CoreBtn  onPress={() => navigation.navigate(navStrings.HOME)} btnText={"State"}/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:'#e6e6fa',
    // backgroundColor:colors.card
  },
  header: {
    alignSelf: 'center',
    fontSize: 30,
    // color: colors
    fontFamily:"One",
    // fontStyle:'italic'
  },
  btnAlign: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // padding: 1,
    // margin: 1,
    marginVertical: 10,
  },
});

// <CoreBtn  onPress={() => navigation.navigate(NavStrings.WLCMSRN)} btnText={"Welcome"}/>
// <CoreBtn  onPress={() => navigation.navigate(NavStrings.WLCMSRN)} btnText={"Welcome"}/>
// <CoreBtn  onPress={() => navigation.navigate(NavStrings.WLCMSRN)} btnText={"Welcome"}/>
// <CoreBtn  onPress={() => navigation.navigate(NavStrings.WLCMSRN)} btnText={"Welcome"}/>
// <CoreBtn  onPress={() => navigation.navigate(NavStrings.WLCMSRN)} btnText={"Welcome"}/>
// <CoreBtn  onPress={() => navigation.navigate(NavStrings.WLCMSRN)} btnText={"Welcome"}/>
// <CoreBtn  onPress={() => navigation.navigate(NavStrings.WLCMSRN)} btnText={"Welcome"}/>

// <CoreBtn  onPress={() => navigation.navigate(NavStrings.WLCMSRN)} btnText={"Welcome"}/>