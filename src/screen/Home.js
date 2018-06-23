import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';

import Notification from '../components/Notification';
import Slide from '../components/Slide';
import {LanguageSelect} from "../components/LanguageSelect";
import {Footer} from "../components/Footer";


class HomeScreen extends Component{
    // constructor(props){
    //     super(props);
    // }
    static navigationOptions = () => ({
        headerTitle:(<View style={}>
            <Image/>
            <Text></Text>
        </View>),
        headerLeft: (<View></View>),
        headerRight: (<ImageBackground style={} source={}/>)
    });
    menuBtnPress = () => {
        this.props.navigation.navigate(navigationName);
    };
    render(){
        return(
            <ScrollView>
                <Notification/>
                <Slide/>
                <View>
                    <View style={styles.btnMenuRow}>
                        <MenuBtn
                            text={'pre-book fly ticket'}
                            sourceChecked={require('')}
                            source={require('')}
                        />
                        <MenuBtn
                            text={'Annual ticket reservation'}
                            onPress={() => {
                                this.menuBtnPress('AnnualPassList')
                            }}
                            sourceChecked={require('')}
                            source={require('')}
                        />
                    </View>
                    <View style={styles.btnMenuRow}>
                        <MenuBtn
                            text={'Pre-boarding'}
                            sourceChecked={require('')}
                            source={require('')}
                        />
                        <MenuBtn
                            text={'Flight status'}
                            sourceChecked={require('')}
                            source={require('')}
                        />
                    </View>
                    <View>
                        <MenuBtn
                            text={'Rwandair Members'}
                            sourceChecked={require('')}
                            source={require('')}
                        />
                        <MenuBtn
                            text={'My Itinerary'}
                            sourceChecked={require('')}
                            source={require('')}
                        />
                    </View>
                    <View>
                        <MenuBtn
                            text={'Rwandair Express Information'}
                            sourceChecked={require('')}
                            source={require('')}
                        />
                        <MenuBtn
                            text={'Settings'}
                            sourceChecked={require('')}
                            source={require('')}
                        />
                    </View>
                </View>
                <LanguageSelect/>
                <Footer/>
            </ScrollView>
        )
    }
}


class MenuBtn extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCheck: false
        }
    }

    onPress = () => {
        this.props.onPress && this.props.onPress()
    };

    onPressIn = () => {
        this.setState({ isCheck: true})
    };

    onPressOut = () => {
        this.setState({ isCheck: false });
    };

    render(){
        return(
            <TouchableWithoutFeedback
                style={styles.menuBtn}
                activeOpacity={1}
                onPress={this.onPress}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
            >
                <View style={[styles.btnView, this.state.isCheck ? styles.btnBgColorRed : styles.btnBgColorWhite]}>
                    <Image
                        style={[styles.btnImage, this.state.isCheck ? styles.btnImageShow : styles.btnImageHide]}
                        source={this.props.sourceChecked}
                    />
                    <Image
                        style={[styles.btnImage, this.state.isCheck ? styles.btnImageHide : styles.btnImageShow]}
                        source={this.props.source}
                    />
                    <Text style={[styles.btnText, this.state.isCheck ? styles.textColorWhite : styles.textColorBlack]}>
                        {this.props.text ? this.props.text: ''}
                    </Text>
                </View>

            </TouchableWithoutFeedback>
        )

    }
}

const style = StyleSheet.create({
    headerTitleView:{
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerTitleImage: {
        width: 30,
        height: 30,
        marginRight: 5
    },
    headerTitleText: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold'
    },
    headerLeft: {
        width: 80
    },
    headerRight: {
        width: 80,
        height: 50
    },
    menuBg: {
        backgroundColor: '#fff'
    },
    btnMenuRow: {
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    btnView: {
        flex: 1,
        margin: 5,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 5
    },
    btnBgColorWhite:{
        backgroundColor: '#fff'
    },
    btnBgColorRed: {
        backgroundColor:'#dd0101'
    },
    btnImage:{
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    menuBtn: {},
    btnImageShow: {
        width: 70,
        height: 70
    },
    btnImageHide: {
        width: 0,
        height: 0
    },
    btnText:{
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 18
    },
    textColorBlack: {
        color: '#333'
    },
    textColorWhite: {
        color: '#fff'
    }
});