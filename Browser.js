import React from 'react';
import { View, WebView, StyleSheet, Text, TextInput } from 'react-native';

export default class Browser extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      address: 'https://google.com/'
    }
  }

  handleAddress = (address) => {
    this.setState({ address: 'http://'+address })
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput placeholder='http://' autoCapitalize='none' onChangeText={this.handleAddress}/>
        <WebView source={{ uri: this.state.address }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
