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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './src/components/Card';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const onPressDetail = () => {
    Alert.alert('Detail');
  };

  return (

    <View
      style={styles.container}>
      <Card text='Merhaba' backgroundColor='blue' />
      <Card text='🚀' />
      <Card text='React Native' backgroundColor='red' />
      <Button
        title='Detail'
        color='#000'
        onPress={onPressDetail}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEB3B",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },



});

export default App;

