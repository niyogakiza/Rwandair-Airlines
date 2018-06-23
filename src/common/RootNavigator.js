import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screen/Home';
import SearchFlightScreen from '../screen/SearchFlight';
import AnnualPassList from '../screen/AnnualPassList';
import AnnualPassIntroduce from '../screen/AnnualPassIntroduce';
import AnnualPassTerms from '../screen/AnnualPassTerms';

const navigationOptions = {
    headerTitleStyle: { alignSelf: 'center'}
};

const RootNavigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        searchFlight: {
            screen: SearchFlightScreen
        },
        AnnualPassList: {
            screen: AnnualPassList
        },
        AnnualPassIntroduce: {
            screen: AnnualPassIntroduce
        },
        AnnualPassTerms: {
            screen: AnnualPassTerms
        }
    },
    {
        navigationOptions: navigationOptions
    }
);
export default RootNavigator;