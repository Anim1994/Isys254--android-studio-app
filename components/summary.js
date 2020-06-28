import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class summary extends Component {

  constructor(props) {
    super(props);

    let params = this.props.navigation.state.params;
    this.state = {

    };
  }
  render() {

    return(
      <View style={styles.container}>

      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33D4FF',
  },
});
