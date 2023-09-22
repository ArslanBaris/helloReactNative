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
        style={styles.slideOne}>
          	<Text>Merhaba!</Text>
      </View>
      <View style={styles.slideTwo}>
					<View style={[styles.box, styles.box1]}></View>
					<View style={[styles.box, styles.box2]}></View>
					<View style={[styles.box, styles.box3]}></View>
				</View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:"#FFEB3B"
  },
  slideOne: {
    backgroundColor:"#607D8B",
    flex:1,
    flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
  },
  slideTwo:{
    backgroundColor:"#FF5722",
    flex:2,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  box: {
		width: 100,
		height: 100
	},
	box1: {
		backgroundColor:'#795548'
	},
	box2: {
		backgroundColor: '#9E9E9E'
	},
	box3: {
		backgroundColor: '#3F51B5'
	}


});

export default App;
