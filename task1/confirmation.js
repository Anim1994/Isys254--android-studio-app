
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container,Header,Title,Body,Button, Icon,Content,Text,Input,Item} from 'native-base';
import	{	Dropdown	}	from	'react-native-material-dropdown';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Header>
        <Body>
          <Title>                          Finalise your order </Title>
          </Body>
          </Header>
      <Button iconLeft light>
        <Icon name='arrow-back' />
        <Text>Back</Text>
      <Button iconLeft  light style={styles.logoutbutton}>
        <Icon name='log-out' />
          <Text>log-out</Text>
          </Button>
          </Button>
          <Item regular>
          <Input placeholder='Order ID' />
          </Item>
          <Item regular>
          <Input placeholder='Total Cost' />
          </Item>
          <Item regular>
          <Input placeholder='Estimated pickup time' />
          </Item>
        <Image source={require('./online-food-ordering-system.png')} style={styles.image}/>
        <Image source={require('./square-order-2014-05-12-01.jpg')} style={styles.image2}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },

image: {
  height:250,
  width:410,
  marginBottom: 10
},
image2: {
  height:250,
  width:410,
  marginBottom: 10
},
button:{
    marginLeft: 140,
    backgroundColor: 'white'

  },
  logoutbutton:{
      marginLeft: 180,
  }
});
