/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

  const imageSource = Platform.select({
    ios: require('./src/assets/platform.ios.png'),
    android: require('./src/assets/platform.android.png'),
  });

  // -contain
  // -cover
  // -center
  // -repeat
  // -stretch


  return (

    <View
      style={styles.container}>
      <View style={styles.container2}>
        <Image  source={imageSource} style={styles.image} />
      </View>
      <View style={styles.container2}>
        <Image resizeMode='cover'  style={styles.image} source={{ uri: 'https://media.istockphoto.com/id/903934818/tr/foto%C4%9Fraf/istanbul-say%C4%B1s%C4%B1.jpg?s=612x612&w=0&k=20&c=y8mpuX3uQZDGk2PVFqHgbokiNayLfvpgWBKzrJ5E_U4=' }} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEB3B",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: "100%",
    height: 180,
    borderWidth: 2,
    borderColor: 'red',
  },
  container2: {
    flex: 1,
    backgroundColor: "#FFEB3B",
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }



});

export default App;

