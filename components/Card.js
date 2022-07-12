import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Card({ content }) {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>

                <Text style={styles.name}>{content.name}</Text>
                <View style={styles.subContainer} >
                    <Text style={styles.price}>{content.price}</Text>
                    <Text style={styles.changeNegative}>{content.change}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 20,
        justifyContent: 'space-between',
        marginHorizontal: 'auto',
        alignItems: 'center',
    },
    container2: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    price: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    changePositive: {
        fontSize: 15,
        color: '#00ff00',
    },
    changeNegative: {
        fontSize: 15,
        color: '#ff0000',
    }

});