import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, ScrollView, TouchableOpacity } from 'react-native';


import HeaderToBack from '../components/HeaderToBack';

class AnnualPassTermsScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            checkState: false,
            buttonClass: 'button',
            textClass: 'buttonText'
        }
    }
    static navigationOptionsm= (navigation) => ({
        headerTitle: 'Terms and Conditions',
        headerLeft:(
            <View>
                <HeaderToBack {...navigation}/>
            </View>),
        headerRight: (
            <TouchableOpacity
                style={styles.headerIntroduceBtn}
                activeOpacity={0.6}
            >
                <Text
                    style={[styles.fontColorRed, styles.fontSize18]}
                >
                </Text>
            </TouchableOpacity>
        )
    });
    render(){
        let imgSource = this.state.checkState === true ? require('') : require('');
        return(
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>1. Validity: Within one year from the date of order</Text>
                    <Text style={styles.text}>2. The shortest/maximum stay of the ticket: Same day round trip/6 months</Text>
                    <Text style={styles.text}>3. Renewal: Free</Text>
                    <Text style={styles.text}>4. Refund: All unused annual tickets are refundable and charge $1500</Text>
                    <Text style={styles.text}>5. Misoperation: Passengers must reschedule, change or cancel flights at least 2 hours prior to flight departure, otherwise they will charge a missed opportunity HKD1200 each time.</Text>
                    <Text style={styles.text}>6. Class: Economy Class L; Business Class D</Text>
                    <Text style={styles.text}>7. 3 annual ticket products can be used for a maximum of 2 designated passengers, and 5 annual ticket products can be used for a maximum of 3 designated passengers; the name of the designated passenger and the number of assigned sheets must be determined at the time of purchase. Once the order is confirmed, The number of passengers cannot be increased/decreased. Names and their allocated tickets cannot be changed</Text>
                    <Text style={styles.text}>8. The fare may be changed at the exchange rate at the time of the transaction;</Text>
                    <Text style={styles.text}>9. Please visit http://www.rwandair-express.com/pdf/2018AirpassTermsAndConditionsSC.pdf Please refer to detailed terms and conditions</Text>
                </View>
                <View style={styles.check}>
                    <View style={styles.checkNav}>
                        <TouchableWithoutFeedback
                            style={styles.buttonTouch}
                            onPress={() => {
                                this.setState({
                                    buttonClass: 'buttonActive',
                                    textClass: 'buttonTextActive'
                                })
                            }}
                            onPressOut={() =>{
                                this.setState({
                                    buttonClass:'button',
                                    textClass: 'buttonText'
                                })
                            }}
                        >
                            <View
                                style={styles[this.state.buttonClass]}
                            >
                                <Text
                                    style={styles[this.state.textClass]}
                                >
                                    determine
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    content:{
        padding: 12
    },
    text: {
        marginBottom: 16,
        fontSize: 16,
        color: '#333',
        fontFamily: 'helvetica'
    },
    check: {
        borderTopColor: '#b3b3b3',
        borderTopWidth: 1
    },
    checkNav: {
        flexDirection:'row',
        alignItems:'center',
        paddingTop: 12,
        paddingLeft: 12
    },
    checkImg:{
        width: 22,
        height: 22
    },
    checkText:{
        fontSize: 14,
        color: '#333',
        paddingLeft: 5
    },
    buttonNav: {
        height: 120,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    },
    buttonTouch:{
        height: 50
    },
    button: {
        height: 50,
        width:'94%',
        borderWidth: 1,
        borderColor: '#f02828',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#f02828'
    },
    buttonText: {
        color: '#f02828',
        fontSize: 16
    },
    buttonTextActive: {
        color: '#fff',
        fontSize: 16
    }
});
export default AnnualPassTermsScreen;