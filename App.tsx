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
  TouchableOpacity,
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

  const _onPressButton = () => {
    Alert.alert('Alert','You tapped the button!');
  };


  return (

    <View
      style={styles.container}>
      <TouchableOpacity style={{marginBottom: 40}}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>My Button</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={_onPressButton}
        >
          <Image
            style={{width: 100, height: 100}}
            source={require('./src/assets/button.png')} />
        </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    fontSize: 24
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: 'orange',
    borderRadius: 15
  }
});

export default App;

