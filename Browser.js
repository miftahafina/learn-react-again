import React from 'react';
import { View, WebView, StyleSheet, Text, TextInput } from 'react-native';

export default class Browser extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      address: 'google.com'
    }
  }

  handleAddress = (address) => {
    this.setState({ address: address })
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput autoCapitalize='none' onChangeText={this.handleAddress} value={this.state.address}/>
        <WebView source={{ uri: 'http://google.com/search?q=' + this.state.address }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
