import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Card({ content }) {
    return (
        <View style={styles.container}>
            <Text>{content.name}</Text>
            <View style={styles.subContainer} >
                <Text>{content.price}</Text>
                <Text>{content.change}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '77%',
        flexDirection: 'row',
        paddingBottom: 20,
        justifyContent: 'space-between',
    },
    subContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    }
});