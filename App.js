import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent';

export default class App extends React.Component {
  state = {
    myState1: 'State 1',
    myState2: 'State 2',
    myState3: 'State 3'
  }

  updateState1 = () => {
    return this.setState({
      myState1: 'State 1 updated'
    });
  }

  updateState2 = () => this.setState({
    myState2: 'State 2 updated'
  });

  updateState3 = () => this.setState({
    myState3: 'State 3 updated'
  });

  // update

  render() {
    return (
      <View>
        <PresentationalComponent myState = {this.state.myState1} updateState = {this.updateState1} />
        <PresentationalComponent myState = {this.state.myState2} updateState = {this.updateState2} />
        <PresentationalComponent myState = {this.state.myState3} updateState = {this.updateState3} />
      </View>
    );
  }
}
