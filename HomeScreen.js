//HomeScreen.js
import React, { Component } from "react";
import { Container, Content, Button, Text} from 'native-base';
import { StyleSheet, Image, View} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
        <Container>
      
        <Content>
    
        <View style={{flex: 1, paddingTop: 80, paddingBottom: 30, flexDirection: 'column', justifyContent: 'space-between',        alignItems: 'center'}}>
    
        <Image source={{uri: 'https://i.ibb.co/r2Fv8Hs/Untitled-Diagram.png'}} style={{width:  100,  height: 100}} />
       
        </View>
        <Button full 
            style={{ backgroundColor: '#F1CA35', marginBottom:10, marginLeft:10, marginRight:10}}
            onPress={() => this.props.navigation.navigate("Calculate")}>
            <Text style={Styles.f1}> Calorie Calculator</Text>
          </Button> 

          <Button full 
            style={{ backgroundColor: '#4ACD7C', marginBottom:10, marginLeft:10, marginRight:10}}
            onPress={() => this.props.navigation.navigate("FoodList")}>
            <Text style={Styles.f1}>Food Calorie Lists</Text>
          </Button> 

          <Button full 
            style={{ backgroundColor: '#E65D47', marginBottom:10, marginLeft:10, marginRight:10}}
            onPress={() => this.props.navigation.navigate("DietTips")}>
       <Text style={Styles.f1}>Diet Tips</Text>
          </Button> 

          <Button full 
            style={{ backgroundColor: '#A1AEBB', marginBottom:10, marginLeft:10, marginRight:10}}
            onPress={() => this.props.navigation.navigate("")}>
            <Text style={Styles.f1}>Food Scanner</Text>
          </Button> 

          <Button full 
            style={{ backgroundColor: '#1295DB', marginBottom:10, marginLeft:10, marginRight:10}}
            onPress={() => this.props.navigation.navigate("")}>
            <Text style={Styles.f1}>Pedometer</Text>
          </Button> 

       

          
        </Content>
      </Container>



    );
  }
}

const Styles = StyleSheet.create({
    container: {
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF',
       borderColor: 'black',
     },
 
      f1: {
          fontFamily:'Arial Rounded MT Bold',
      color: '#ffffff',

    fontSize: 16,
     },
 
   });

