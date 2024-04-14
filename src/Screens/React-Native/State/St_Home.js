import {View, Text, Button} from 'react-native';
import React from 'react';
import navStrings from '../../../Constants/navStrings';

export default function St_Home({navigation}) {
  return (
    <View>
      <Text>St_Home</Text>
      <Button
        title="Learn More"
        color="#841584"
        onPress={() => navigation.navigate(navStrings.ABOUTUS)}
      />
    </View>
  );
}
