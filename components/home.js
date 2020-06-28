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
  ImageBackground,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

export default class home extends Component {

  constructor(props){
    super(props);

    this.state={
      itemCode:"",
      quantity:0,
  };
    this.business =	[{
    value:	'boost',
    },	{
    value:	'Nandos',
  },{
    value:	'Burger Omega',
  },{
    value:	'Hungry Jacks',
    },{
    value:	'Steak KINGS',
    }];
    this.menu =	[{
    value:	'	Smoothy toothie-$10',
    },	{
    value:	'Fry Dry	chicken-$12',
  },{
    value:	'Morning slap	coffee-$10',
    },
    {
    value:	'Veggie King	Salad-$14',
  },
    {
    value:	'PastaBasta	beef-$14',
    }];
    this.numbers =	[{
      value:	1,
  },	{
      value:	2,
  },	{
      value:	3,
  },  {
          value:	4,
  },  {
          value:	5,
  },  {
          value:	6,
  }];

  }

  render() {

    return (
      <View style={styles.container}>
      <ImageBackground source={require('./background2.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.viewRow1}>
                <Dropdown
                    containerStyle={styles.dropdown1}
                    label='Choose the place of business'
                    data={this.business}
                    onChangeText={(chosenBus)	=>	this.setState({
                		businessCode:chosenBus
                		}
                    )}
                      />
        </View>

        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Choose a menu item'
                      data={this.menu}
                      onChangeText={(chosenMI)	=>	this.setState({
        							 itemCode:chosenMI
        							 }
        							 )}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Choose quantity'
                      data={this.numbers}
                      onChangeText={(chosenNumber)	=>	this.setState({
        							 quantity:chosenNumber
        							}
        							)}
                        />
        </View>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown3}
                      label='Choose a menu item'
                      data={this.menu}
                      onChangeText={(chosenMI)	=>	this.setState({
        							 itemCode:chosenMI
        							 }
        							 )}
                        />
                <Dropdown
                      containerStyle={styles.dropdown3}
                      label='Choose quantity'
                      data={this.numbers}
                      onChangeText={(chosenNumber)	=>	this.setState({
        							 quantity:chosenNumber
        							}
        							)}
                        />
        </View>

        <View style={styles.viewRow2}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressEvent.bind(this)}>
                    <Text style={styles.buttonText}>
                      Proceed
                    </Text>
                </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  }
  onPressEvent(){
    let	temp	=	this.state.itemCode;
    let	bill=parseInt(temp.substring(temp.length-1,temp.length));

    let	total=bill*this.state.quantity;
  Actions.summary({
    summaryValue:total
  });
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewRow1:{
    flex:1,
  },
  viewRow2:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  dropdown1: {
    marginTop: 80,
    backgroundColor:'#F0E68C'
  },
  dropdown2:{
    flex: 1,
    marginTop: 30,
    backgroundColor: '#FFFAFA'
  },
  dropdown3:{
    flex: 1,
    marginTop: 30,
    backgroundColor: '#AFEEEE',
  },
  button:{
      backgroundColor:'#FFFAF0',
      height: 45,
      width: 140,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      borderRadius:10,
      borderWidth: 1,
      shadowColor: 'transparent'
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
  },
  image: {
  height:100,
  width:300,
  marginTop:10
},
});
