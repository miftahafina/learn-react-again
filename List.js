import React from 'react';
import { FlatList, ActivityIndicator, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";

export default class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
  }
  
  updateState = () => {
    return this.setState({
      isLoading: !this.state.isLoading
    })
  }

  componentDidMount = () => {
    fetch('http://miftahafina.klik.press/api/person/', {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        data: responseJson,
        isLoading: false
      })
    })
    .catch((error) => {
      console.error(error)
    });
  }

  alertCellNumber = (item) => {
    alert(item.cell_number)
  }

  render () {
    if (this.state.isLoading) {
      return(
        <TouchableOpacity style={styles.default} onPress={this.updateState}>
          <ActivityIndicator />
        </TouchableOpacity>
      )
    }

    return (
      <ScrollView>
        {
          this.state.data.map((item, index) => (
            <TouchableOpacity style = {styles.default} onPress = {() => this.alertCellNumber(item)} key = {item.id_person}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    padding: 20
  }
});
