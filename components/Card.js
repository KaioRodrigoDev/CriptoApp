import React from 'react';
import { View, Text } from 'react-native';

export default function Card({ content }) {
    return (
        <View>
            <Text>{content}</Text>
        </View>
    );
}