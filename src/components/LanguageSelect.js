import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export const LanguageSelect = () => {
    langClick = () =>{
        Alert.alert('Language switching in development')
    };
    return(
        <View style={styles.langView}>
            <View style={styles.langBtn}>
                <Button onPress={this.langClick} style={styles.langBtn} title="English" color="#c22e2c"/>
            </View>
            <View style={styles.langBtn}>
                <Button onPress={this.langClick} title="French" color="#c22e2c"/>
            </View>
            <View style={styles.langBtn}>
                <Button onPress={this.langClick} title="Italiano" color="#c22e2c"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    langView: {
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e7e7e7',
        backgroundColor: '#fff'
    },
    langBtn:{
        marginHorizontal: 10
    }
});

