/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container, List,ListItem,Header, Title, Button, Left, Body, Icon,Content,Text,StyleProvider  } from 'native-base';
export default class App extends Component<Props> {
  render() {
    return(
      <Container>
      <Header>
        <Body>
          <Title>                                Home Screen</Title>

        </Body>
      </Header>
      <Button iconLeft light style={styles.logoutbutton}>
        <Icon name='log-out' />
          <Text>log-out</Text>
          </Button>
        <Text style={styles.welcome}>
          Welcome to Campus Common
        </Text>
        <Text style={styles.heading}>
          Your food order just got easier.
        </Text>
        <Image source={require('./welcome.jpg')} style={styles.image}/>
        <Button iconLeft	style={styles.button}>
          <Title> Order	</Title>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
    color: '#2F4F4F',
    marginTop: 30,
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    marginTop: 30,
    fontFamily: 'Comic Sans MS',
  },
  image: {
    height:300,
    width:500,
    marginTop:10
  },
  button:{
				height:	45,
				width:	100,
				alignItems:	'center',
				justifyContent:	'center',
				marginTop:	10,
				borderRadius:18,
				borderWidth:	1,
        marginLeft: 150
		},
    logoutbutton:{
  				width:	100,
  				alignItems:	'center',
  				justifyContent:	'center',
  				borderWidth:	1,
          marginLeft:312,
  		}

});
