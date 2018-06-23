import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

class HeaderToBack extends Component{
    constructor(props){
        super(props);
    }

    toBackPress = () => {
        this.props.navigation.goBack();
    };

    render(){
        return(
            <TouchableOpacity
                onPress={this.toBackPress}
                activeOpacity={0.6}
            >
                <Image
                    style={styles.imageSize}
                    source={require('')}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    imageSize: {
        width: 52,
        height: 26,
        marginLeft: 10
    }
});

export default HeaderToBack;