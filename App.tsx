/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,

} from 'react-native';

import axios from 'axios'
import FlatListExample from './src/components/FlatListExample';
import PlatformExample from './src/components/PlatformExample';


function App(): JSX.Element {

  const [name, setName] = useState<string>('Barış')
  const [surname, setSurname] = useState<string>('Arslan')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getRandomUser()
  }, [])

  const getRandomUser = async () => {

    setLoading(true)

    const { data: { results } } = await axios.get("https://randomuser.me/api/")
    const { name: { first, last } } = results[0];


    setName(first);
    setSurname(last)
    setLoading(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatListExample />
      {/* {
        loading ? <Text style={styles.text}>Loading...</Text> :
          <Text style={styles.text}>{name} {surname}</Text>
      }
      <Button
        title={"Random User"}
        onPress={getRandomUser} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  text: {
    textAlign: 'center'
  }
});

export default App;

