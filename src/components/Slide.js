import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export const Slide = () => (
    <View style={styles.slideView}>
        <Image style={styles.slideImage}  source={require('')}/>
    </View>
);

const styles = StyleSheet.create({
    slideView: {
        height: 170
    },
    slideImage: {
        flex: 1,
        alignItems: 'center',
        resizeMode: 'stretch'
    }
});
