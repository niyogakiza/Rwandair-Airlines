import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export const Footer = () => (
    <View style={styles.footerView}>
        <View style={styles.footerRow}>
            <Image style={styles.footerLogo} source={require('')}/>
                <Text style={[styles.fontStyle, styles.footerLogoText]}>Rwandair Express</Text>
        </View>
        <View>
            <Text style={styles.fontStyle}>Copyright©2018 Rwandair Express</Text>
        </View>
        <View>
            <Text style={styles.fontStyle}>Rwandair ICP No. 56436543985</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    footerView: {
        paddingVertical: 5,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#dcdcdc',
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        backgroundColor:'#fff'
    },
    footerRow: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    footerLogo: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
    },
    footerLogoText: {
        lineHeight: 20,
        fontWeight: 'bold'
    },
    fontStyle: {
        fontSize: 12,
        color: '#999'
    }

})