import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

const HomeScreen = ()=>{
  return (
    <View style={{
      backgroundColor: "#e57ac2",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text style={{
        fontSize: 50,
        color: "#fff"
      }}>Hello World</Text>
      <Text>Domey is crazy!!!</Text>
    </View>
  )
}


export default HomeScreen;