import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import HeaderToBack from '../components/HeaderToBack';

const width = Dimensions.get('window').width;

class AnnualPassIntroduceScreen extends Component{
    static navigationOptions = (navigation) => ({
        headerTitle: 'Annual Ticket introduction',
        headerLeft: (
            <View>
                <HeaderToBack {...navigation}/>
            </View>
        ),
        headerRight:(
            <TouchableOpacity
            style={styles.headerIntroduceBtn}
            activeOpacity={0.6}
            >
                <Text
                    style={[styles.fontColorRed, styles.fontSize18]}>
                </Text>
            </TouchableOpacity>
        )
    });
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Image
                        resideMode='contain'
                        style={style.image}
                        source={require('')}
                    />
                    <Text style={styles.text}>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        If you need to travel frequently to major cities in Europe, Airpass is your best choice. Simply become a member of Rwandair Club and you can purchase 3 or 5 round-trip annual tickets for Paris, London, Roma, Madrid, Vancouver and Milan. The more the number of coupons, the more favorable the price, and the economic and business class options for you. select! Change your flight dates for free to provide you with more comfortable and flexible travel options.
                    </Text>
                    <Text style={styles.text}>★ SkyTrax 4 Star Service </Text>
                    <Text style={styles.text}>★ Flexible change of flight dates</Text>
                    <Text style={styles.text}>★ Annual ticket price is more favorable</Text>
                    <Text style={styles.text}> Buy it now!</Text>
                    <Text style={styles.text}>Annual ticket manual</Text>
                </View>
                <View style={styles.options}>
                    <Text style={styles.itemTitle}>1. Enter the annual ticket reservation to generate an order</Text>
                    <Image
                        resizeMode='contain'
                        style={styles.itemImage}
                        source={require('')}
                    />
                    <Text style={styles.itemTitle}>2. Log in to the member and check the annual ticket order</Text>
                    <Image
                        resizeMode='contain'
                        style={styles.itemImage}
                        source={require('')}
                    />
                    <Text style={styles.itemTitle}>3. Enter the annual ticket order details and open the annual ticket tour</Text>
                    <Image
                        resizeMode='contain'
                        style={styles.itemImage}
                        source={require('')}
                    />
                </View>
            </ScrollView>
        )
    }
}

let height = 96 * width / 64;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc'
    },
    header:{
        flexDirection: 'row-reverse',
        height: 50,
        textAlign: 'center',
        width: width,
        borderBottomWidth: 1,
        borderColor: '#b7b6ba',
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 20,
        lineHeight: 50,
        fontWeight: '600'
    },
    content: {
        width: width
    },
    image: {
        width: width,
        height: 130
    },
    itemImage: {
        width: '100%',
        height: height
    },
    text:{
        color: '#666',
        padding: 10,
        fontWeight: '600'
    },
    item: {
        padding: 15,
        color: '#666'
    },
    listTitle:{
        fontSize: 22,
        fontWeight: '600',
        width: width,
        textAlign: 'center',
        height: 70
    },
    itemTitle: {
        fontWeight:'600',
        marginBottom: 10,
        fontSize: 18
    },
    options: {
        width: width,
        padding: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 80
    },
    option: {
        width:'90%',
        marginBottom: 180
    }
});
export default AnnualPassIntroduceScreen;