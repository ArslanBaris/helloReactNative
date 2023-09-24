/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,

} from 'react-native';


import FlatListExample from './src/components/FlatListExample';


function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
   	<FlatListExample />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1
	},
});

export default App;

