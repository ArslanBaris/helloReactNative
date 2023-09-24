import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

function Header() {

    return (
        <View style={styles.iosHeader}>
            <Text>Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    iosHeader:{
        padding:20,
        backgroundColor:"#f2f2f2"
    },
});

export default Header;

