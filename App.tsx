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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const [name, setName] = useState("")

  const _onChangeText = (e: string) => {
    setName(e)
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TextInput
      // secureTextEntry={true}
      editable={true}
      keyboardAppearance='light'
        autoCapitalize='sentences'
        // keyboardType='number-pad'
        value={name}
        placeholder='Bir isim girin...'
        onChangeText={_onChangeText}
        style={styles.myInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  myInput: {
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderColor: 'gray'
  }
});

export default App;

