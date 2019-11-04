import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Adopte Un Doc</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
  }
});
