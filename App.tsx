/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const {width}  = Dimensions.get('window');


function App(): JSX.Element {


  return (
    <View style={styles.container}>
    <ScrollView
      pagingEnabled={true}
      horizontal={true}
    >
      <Text style={styles.title}>1</Text>
      <Text style={styles.title}>2</Text>
      <Text style={styles.title}>3</Text>
      <Text style={styles.title}>4</Text>
      <Text style={styles.title}>5</Text>
      <Text style={styles.title}>6</Text>
      <Text style={styles.title}>7</Text>
      <Text style={styles.title}>8</Text>
      <Text style={styles.title}>9</Text>
      <Text style={styles.title}>10</Text>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: '#FFEB3B',
		flex: 1,
		flexDirection: 'row',
	},
	title: {
		backgroundColor: 'orange',
		marginVertical: 30,
		textAlign: 'center',
		paddingVertical: 60,
		borderColor: 'yellow',
		borderWidth: 2,
		fontSize: 36,
    width
	}
});

export default App;

