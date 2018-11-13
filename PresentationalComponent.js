import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PresentationalComponent = (props) => {
  return (
    <View style = {styles.container}>
      {/* <Text style = {styles.myState} onPress = {props.updateState}>
        {props.myState}
      </Text> */}
      <View style = {styles.redbox}/>
      <View style = {styles.bluebox}/>
      <View style = {styles.greenbox}/>
    </View>
  );
}

export default PresentationalComponent;

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 600
  },
  
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },

  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },

  greenbox: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  }
});
