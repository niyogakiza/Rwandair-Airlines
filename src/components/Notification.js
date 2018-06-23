import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


export const Notificatiob = () => (
    <View style={styles.slideView}>
        <Text style={styles.notiText}> Special Announcements</Text>
    </View>
);

const styles = StyleSheet.create({
    notiView: {
        height: 35,
        backgroundColor: '#c22e2c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notiText: {
        alignSelf: 'center',
        color: `#fff`
    }
})
