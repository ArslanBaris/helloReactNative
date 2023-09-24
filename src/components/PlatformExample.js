import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    Platform,
} from 'react-native';

function PlatformExample() {

    const headerStyle = Platform.select({
        ios: styles.iosHeader,
        android: styles.androidHeader
    })

    return (
        <View style={headerStyle}>
            <Text>Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    iosHeader:{
        padding:20,
        backgroundColor:"#f2f2f2"
    },
    androidHeader:{
        padding:20,
        backgroundColor:"red"
    }
});

export default PlatformExample;

