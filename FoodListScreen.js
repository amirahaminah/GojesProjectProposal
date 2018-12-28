// FoodListScreen.js

import React, { Component } from "react";
import { Container,  Content, Accordion , Header} from "native-base";
import { AppRegistry, ScrollView, Image, Text } from 'react-native';



const dataArray = [
 
  { title: "Beef Rendang ", content: "Food Calorie: 468 kcal/ serving"  },
  { title: "Cendol", content: "Food Calorie: 335 kcal/ serving" },
  { title: "Creamer Milk", content: "Food Calorie: 63 kcal/ 1 table spoon" },
  { title: "Char Kue Tiau", content: "Food Calorie: 740 kcal/ serving" },
  { title: "Fried Chicken", content: "Food Calorie: 290 kcal/ piece" },
  { title: "Half Boiled Egg with Plain Bread", content: "Food Calorie: 227 kcal/ piece" },
  { title: "Mee Goreng Mamak", content: "Food Calorie: 660 kcal/ serving" },
  { title: "Mee Soup", content: "Food Calorie: 381 kcal/ serving" },
  { title: "Nasi Ayam ", content: "Food Calorie: 660 kcal/ serving" },
  { title: "Nasi Kerabu ", content: "Food Calorie: 360 kcal/ serving" },
  { title: "Nasi Lemak", content: "Food Calorie: 587 kcal/ serving" },
  { title: "Laksa ", content: "Food Calorie: 400 kcal/ serving" },
  { title: "Rice", content: "Food Calorie: 130 kcal/ 100 grams" },
  { title: "Roti Canai & Dal ", content: "Food Calorie: 360 kcal/" },
  { title: "Teh Tarik", content: "Food Calorie: 249 kcal/ 1 table spoon" }
  
];


export default class FoodListScreen extends Component {

  render() {
    return (
        <ScrollView>
      <Container>
  
        
        <Content padder>
        <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 20}}>Food Calorie Lists</Text>
          <Accordion dataArray={dataArray}
           headerStyle={{ backgroundColor: "#D4BFE0" , marginTop: 10}}
           contentStyle={{ backgroundColor: "#f3f6f7" }}
           
          />
         
         
        </Content>
  
      </Container>
      </ScrollView>
    );
  }
}




