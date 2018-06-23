import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';

import HeaderToBack from '../components/HeaderToBack';

class AnnualPassListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annualPassList: [
                {
                    from: 'Kigali',
                    to: 'Vancouver',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {
                                    type: 'LanguageSelect.js',
                                    classType: 'Business Class',
                                    currency: 'USD', price: '4905'
                                }
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Economy class',
                                    currency: 'USD' ,
                                    price: '3075'
                                }
                            ]
                        }
                    ]
                },
                {
                    from: 'Vancouver',
                    to: 'Kigali',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Business Class',
                                    currency: 'Euro',
                                    price: '5365'
                                }
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Economy class',
                                    currency: 'USD',
                                    price: '3007'
                                }
                            ]
                        }
                    ]
                },
                {
                    from: 'Kigali',
                    to: 'Paris',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Economy class',
                                    currency: 'USD',
                                    price: '4367'
                                },
                                {
                                    type: 'round trip',
                                    classType: 'Business Class',
                                    currency: 'USD',
                                    price: '4727'
                                }
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Economy class',
                                    currency: 'USD',
                                    price: '4695'
                                },
                                {
                                    type: 'round trip',
                                    classType: 'Business Class',
                                    currency: 'USD',
                                    price: '6545'
                                }
                            ]
                        }
                    ]
                },
                {
                    from: 'Kigali',
                    to: 'London',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Economy class',
                                    currency: 'USD',
                                    price: '4007'
                                },
                                {
                                    type: 'round trip',
                                    classType: 'Business Class',
                                    currency: 'USD',
                                    price: '6817'
                                }
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Economy class',
                                    currency: 'USD',
                                    price: '3467'
                                },
                                {
                                    type: 'round trip',
                                    classType: 'Business Class',
                                    currency: 'USD',
                                    price: '7685'
                                }
                            ]
                        }
                    ]
                },
                {
                    from: 'Kigali',
                    to: 'Roma',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Economy class',
                                    currency: 'USD',
                                    price: '4668'
                                },
                                {
                                    type: 'round trip',
                                    classType: 'Business Class',
                                    currency: 'USD',
                                    price: '7338'
                                }
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Economy Class',
                                    currency: 'USD',
                                    price: '6780'
                                },
                                {
                                    type: 'round trip',
                                    classType: 'Business Class',
                                    currency: 'USD',
                                    price: '8767'
                                }
                            ]
                        }
                    ]
                },
                {
                    from:'Kigali',
                    to: 'Madrid',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Economy Class',
                                    currency: 'USD',
                                    price: '4286'
                                },
                                {
                                    type: 'round trip',
                                    classType: 'Business Class',
                                    currency: 'USD',
                                    price: '6296'
                                }
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {
                                    type: 'round trip',
                                    classType: 'Economy Class',
                                    currency: 'USD',
                                    price: '6586'
                                },
                                {
                                    type: 'round trip',
                                    classType: 'Business Class',
                                    currency: 'USD',
                                    price: '7988'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }

    static navigationOptions = (navigation) => ({
        headerTitle: 'Annual ticket reservation',
        headerLeft: (
            <View>
                <HeaderToBack {...navigation}/>
            </View>
        ),
        headerRight: (
            <TouchableOpacity
                style={styles.headerIntroduceBtn}
                activeOpacity={0.6}
                onPress={() => {
                navigation.navigation.navigate('AnnualPassIntroduce');
            }}>
                <Text
                    style={[styles.fontColorRed, styles.fontSize18]}>
                    Annual ticket introduction
                </Text>
            </TouchableOpacity>)
    });

    render() {
        return (
            <View style={styles.bgColor}>
                <View
                    style={styles.describe}
                >
                    <Text>
                        The fare includes all taxes/charges/fees and airline surcharges.。
                    </Text>
                </View>
                <ScrollView>
                    <View style={styles.listContent}>
                        {
                            this.state.annualPassList.map((item, index) => {
                                return (
                                    <AnnualPassListItem {...this.props} key={index} item={item}/>
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

/* Year ticket list item component */
class AnnualPassListItem extends Component {
    constructor(props) {
        super(props);
    }

    bookOnPress =() => {
        this.props.navigation.navigate('AnnualPassTerms');
    };

    render() {
        let data = this.props.item;
        return (
            <View style={styles.listItem}>
                <View style={styles.listItemTitle}>
                    <Text
                        style={styles.fontSize18}
                    >
                        {data.from + ' - ' + data.to}
                        </Text>
                </View>
                {
                    data.items.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={[styles.listItemSub, index != 0 ? styles.lineBetween : null]}
                            >
                                <View style={styles.itemSubLeft}>
                                    <Text
                                        style={[styles.fontSize21, styles.fontWeight, styles.fontColorRed]}
                                    >
                                        {item.amount}
                                        </Text>
                                    <Text
                                        style={styles.marginLeft3}
                                    >
                                        James
                                    </Text>
                                </View>
                                <View style={styles.itemSubRight}>
                                    {
                                        item.list.map((list, index) => {
                                            return (
                                                <View key={index} style={styles.subRightList}>
                                                    <View style={styles.type}>
                                                        <Text style={styles.fontSize16}>
                                                            {list.type}
                                                            </Text>
                                                    </View>
                                                    <View style={styles.classType}>
                                                        <Text style={styles.fontSize16}>
                                                            {list.classType}
                                                            </Text>
                                                    </View>
                                                    <View style={styles.currency}>
                                                        <Text style={styles.fontSize16}>
                                                            {list.currency}
                                                            </Text>
                                                    </View>
                                                    <View style={styles.price}>
                                                        <Text style={[styles.fontSize16, styles.fontColorRed]}>
                                                            {list.price}
                                                            </Text>
                                                    </View>
                                                    <View style={styles.booking}>
                                                        <TouchableOpacity
                                                            style={styles.bookBtn}
                                                            activeOpacity={0.6}
                                                            onPress={this.bookOnPress}
                                                        >
                                                            <Text
                                                                style={[styles.fontColorWhite, styles.fontSize16]}>
                                                                Booking
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            </View>
                        );
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerIntroduceBtn: {
        marginRight: 10,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: '#f02828',
        borderRadius: 5
    },
    bgColor: {backgroundColor: '#ffffff'},
    describe: {paddingVertical: 5, paddingHorizontal: 8},
    listContent: {marginHorizontal: 20},
    listItem: {marginBottom: 12, borderWidth: 1, borderColor: '#b3b3b3', borderRadius: 5},
    listItemTitle: {alignSelf: 'center', paddingTop: 3},
    listItemSub: {flexDirection: 'row', paddingVertical: 10},
    itemSubLeft: {flex: 12, flexDirection: 'row', paddingLeft: 5, alignItems: 'center'},
    itemSubRight: {flex: 88, flexDirection: 'column'},
    subRightList: {flexDirection: 'row', paddingVertical: 5,},
    type: {flex: 15, justifyContent: 'center'},
    classType: {flex: 18, justifyContent: 'center'},
    currency: {flex: 10, justifyContent: 'center'},
    price: {flex: 32, justifyContent: 'center'},
    booking: {flex: 20, justifyContent: 'center'},
    bookBtn: {
        width: 45,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f02828',
        borderRadius: 5
    },
    lineBetween: {borderTopWidth: 1, borderTopColor: '#b3b3b3'},
    marginLeft3: {marginLeft: 3, marginTop: 3},
    fontSize14: {fontSize: 14},
    fontSize16: {fontSize: 16},
    fontSize18: {fontSize: 18},
    fontSize21: {fontSize: 21},
    fontColorRed: {color: '#f02828'},
    fontColorWhite: {color: '#ffffff'},
    fontWeight: {fontWeight: 'bold'}
});
export default AnnualPassListScreen;