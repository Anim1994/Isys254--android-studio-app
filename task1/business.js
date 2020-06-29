
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Image,
} from 'react-native';
import { Container,Header,Body,Title, Button, Icon,Content,Text,} from 'native-base';
import	{	Dropdown	}	from	'react-native-material-dropdown';

type Props = {};
export default class App extends Component<Props> {
  render() {
    let	listItems	=	[{
      value:	'KFC',
  },	{
      value:	'Hawai zone',
  },	{
      value:	'Chicken freak',
  },
      {
      value: 'Kebabs',
  },
      {
      value: 'Steak forever',
  }];
    return (
      <Container>
      <Header>
        <Body>
          <Title>                            Restaurants Screen</Title>
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
              label='Choose a place to eat from'
              data={listItems}
                  />
        <Button iconLeft  style={styles.button}>
            <Icon name='pizza' style={{fontSize: 30, color: 'yellow'}}/>
            <Title style={{color: 'black'}}>Check Menu</Title>
            <Icon name='pizza' style={{fontSize: 30, color: 'green'}}/>
            </Button>
        <Image source={require('./businesses.jpg')} style={styles.image}/>
        <Button iconLeft  style={styles.button2}>
                <Icon name='beer' style={{fontSize: 30, color: 'grey'}}/>
                <Title style={{color: 'black'}}>Order Food</Title>
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
    justifyContent: 'flex-start',
  },
  dropdown1:	{
    backgroundColor: 'white'
},
image: {
  height:300,
  width:390,
  marginBottom: 10
},

button:{
    backgroundColor: 'white',
    marginLeft:140,
    marginTop:10

  },
  button2:{
      backgroundColor: 'white',
      marginLeft:140,

    },
  logoutbutton:{
      marginLeft: 180,
  }
});
