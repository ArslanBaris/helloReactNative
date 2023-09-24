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
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import data from './data';


function App(): JSX.Element {


  const renderContactsItem = ({item,index}:any) =>{
    return(
      <View>
      <Text>{item.name}</Text>
    </View>
    )
  }

  return (
    <View style={styles.container}>
    	<FlatList
					renderItem={renderContactsItem}
					keyExtractor={item => item._id}
					data={data} />
  </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default App;

