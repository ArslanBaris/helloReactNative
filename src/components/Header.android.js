import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

function Header() {

    return (
        <View style={styles.androidHeader}>
            <Text>Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    androidHeader:{
        padding:20,
        backgroundColor:"orange"
    }
});

export default Header;

