/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RootNavigator from "./src/common/RootNavigator";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootNavigator />
    );
  }
}