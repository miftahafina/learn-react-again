import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent';

export default class App extends React.Component {
  state = {
    myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    myState2: 'Haiiahh'
  }

  updateState = () => {
    return this.setState({
      myState: 'The state is updated'
    });
  }

  updateState2 = () => this.setState({
    myState2: 'This state is also updated'
  });

  render() {
    return (
      <View>
        <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState} />
        <PresentationalComponent myState = {this.state.myState2} updateState = {this.updateState2} />
      </View>
    );
  }
}
