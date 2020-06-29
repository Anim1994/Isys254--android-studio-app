import React, { Component } from 'react';
import { Container, List,ListItem,Header, Title, Button, Left, Body, Icon,Content,Text,StyleProvider  } from 'native-base';
import {
  StyleSheet, Image
} from 'react-native';
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>                                  Steak forever</Title>
          </Body>
        </Header>
        <Button iconLeft light>
          <Icon name='arrow-back' />
          <Text>Back</Text>
        <Button iconLeft  style={styles.button}>
          <Icon name='home' />
            <Text>Home</Text>
        </Button>
        </Button>
    <Content>
      <List>
        <ListItem itemDivider>
          <Text>Chicken.</Text>
      </ListItem>
      <ListItem >
        <Text>Chicken Steak                                                 $12</Text>
      </ListItem>
      <ListItem>
        <Text>Chicken Burger                                                $10</Text>
      </ListItem>
      <ListItem>
        <Text>Chicken Nuggets                                            $05</Text>
      </ListItem>
      <ListItem>
        <Text>Chicken Omega Spicy fire crackers           $15</Text>
      </ListItem>
      <ListItem itemDivider>
        <Text>Beef</Text>
      </ListItem>
      <ListItem >
        <Text>Beef bbq mix Steak                                          $12</Text>
      </ListItem>
      <ListItem>
        <Text>Beef Burger                                                         $10</Text>
      </ListItem>
      <ListItem>
        <Text>Beef Strips                                                          $05</Text>
      </ListItem>
      <ListItem>
        <Text> Omega Spicy fire Steak                                   $20</Text>
      </ListItem>
      </List>
  </Content>
        <Button iconLeft  style={styles.order}>
            <Text>Order</Text>
        </Button>

      </Container>

    );
  }
}
const styles = StyleSheet.create({
  button:{
        backgroundColor:'blue',
        height:	30,
        width:	100,
        alignItems:	'center',
        justifyContent:	'center',
        borderRadius:10,
        borderWidth:	1,
        marginLeft: 200
    },
    order:{
      width: 100,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      borderWidth:	1,
      height: 30,
      marginLeft: 150
    },
    image1:{
      height : 150,
      width: 400,
      marginTop:10,
    },
    image2:{
          height : 200,
          width: 400,
    },
    });
