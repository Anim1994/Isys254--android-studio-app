/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Container, Button,Header,Title,Body, Icon,Content,Form,Textarea} from 'native-base';

export default class App extends Component<Props> {

  render() {

  let listItems = [{
     value: 'Chicken Steak',
   }, {
     value: 'Chicken Burger ',
   }, {
     value: 'Chicken Nuggets',
   },
   {
     value: 'Chicken Omega Spicy fire crackers',
   },
   {
   value: 'Beef bbq mix Steak',
 }, {
   value: 'Beef Burger ',
 }, {
   value: 'Beef Strips ',
 },
 {
   value: 'Omega Spicy fire Steak  '
 },
 ];

   let listItemsRanking = [{
      value: '1',
    }, {
      value: '2',
    }, {
      value: '3',
    },
    {
      value: '4',
    },
    {
      value: '5',
    },
    {
      value: '6',
    },];

return (
      <Container>
      <Header>
        <Body>
          <Title>                                Order Screen</Title>

        </Body>
      </Header>
      <View style={styles.container}>
      <Button iconLeft light>
        <Icon name='arrow-back' />
        <Text>Back</Text>
      <Button iconLeft light style={styles.logoutbutton}>
        <Icon name='log-out' />
          <Text>log-out</Text>
          </Button>
          </Button>
        <Dropdown
              containerStyle={styles.dropdown1}
              label='Item'
              data={listItems}
                />
        <Dropdown
              containerStyle={styles.dropdown2}
              label='Amount'
              data={listItemsRanking}
                />
        <Button iconLeft  style={styles.button1}>
              <Icon name='cart'style={{fontSize: 30, color: 'red'}} />
              <Text style={{color: 'blue'}}>Add to cart</Text>
                </Button>


              <Text style={{marginBottom:30}}>                                             List of Items </Text>


        <Button iconLeft  style={styles.button}>
              <Icon name='pizza' style={{fontSize: 30, color: 'yellow'}}/>
              <Text style={{color: 'blue'}}>Confirm Order</Text>
              <Icon name='beer' style={{fontSize: 30, color: 'brown'}}/>
        </Button>
      </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  dropdown1: {
    flex: 1,
    marginTop: 10,
  },
  dropdown2:{
    marginBottom: 100,
  },
  button:{
      marginLeft: 140,
      backgroundColor: 'white',
      marginBottom: 50

    },
    button1:{
        marginLeft: 140,
        backgroundColor: 'white',
        marginBottom: 50

      },
    logoutbutton:{
        marginLeft: 270,

    },
    image: {
      height:200,
      width:390,
      marginBottom: 10
    },

});
