/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <View
      style={styles.container}>
      <View
        style={[styles.box,styles.box1]}>
        <Text style={styles.welcome}>Box 1</Text>
      </View>
      <View
        style={[styles.box,styles.box2]}>
        <Text style={styles.welcome}>Box 2</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  box:{
    width:100,
    height:100,
    borderWidth:5,
    borderColor:"#ddd",
    marginBottom:5
  },
  box1: {
    backgroundColor: "aquamarine",
  },
  box2: {
    backgroundColor: "purple",
  }

});

export default App;
