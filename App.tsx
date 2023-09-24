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
    	<TouchableOpacity style={[styles.itemContainer, { backgroundColor: index % 2 === 1 ? '#fafafa' : 'white' }]}>
				<Image
					style={styles.avatar}
					source={{ uri: item.picture }} />
				<View style={styles.textContainer}>
					<Text style={styles.name}>{item.name}</Text>
					<Text>{item.company}</Text>
				</View>
			</TouchableOpacity>
    )
  }
  const renderHeader = () => {
		return (
			<View style={styles.searchContainer}>
				<TextInput placeholder="Search..." style={styles.searchInput} />
			</View>
		)
	};

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
    ListHeaderComponent={renderHeader}
      renderItem={renderContactsItem}
      keyExtractor={item => item._id}
      data={data} />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1
	},
	itemContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginHorizontal: 10
	},
	textContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 16
	},
  searchContainer: {
		padding: 10
	},
	searchInput: {
		fontSize: 16,
		backgroundColor: '#f9f9f9',
		padding: 10
	}
});

export default App;

