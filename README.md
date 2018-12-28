
GROUP MEMBER<br>
NURUL ASYIQIN BINTI ZULKIFLI  1525192<br>
NURUL IZZATI BINTI MUSLIM  1521836<br>
NUR ARIFFAH BINTI RAMLI  1528604<br>
SITI NUR AMIRAH AMINAH BINTI ZULKEFLEY  1525638

# CalorieTracker

### 1.1 INTRODUCTION
The application that we are going to develop is mobile application and the name is given as Calorie Tracker. The target users of this system is public people and for those who concern about their health especially daily calorie intake. We plan to do several functions such as scan the food calories, calculate the user’s calorie intake and calculate the calorie burns by pedometer. More details will be explain in this proposal below.

### 1.2 PROBLEM DESCRIPTION
#### 1.2.1  Background of the problem
 
The system intended to be developed is a mobile application while the target users will be men and women who are concern with their calories intake and burned. Normally, when people take their meal, they are unaware of the calorie amount. This can be detrimental because ones might take too much calories while ones might consume too little calories for their body. Moreover, the calories intake for each individual is different according to some factors for instance age, gender, weight and exercise level.

#### 1.2.2 Problem Statement 
Sometimes it is hard to locate the calories of food products due to too many information on the products’ cover/ packaging/ plastic and the font used can be too small to read. The information provided on the foods’ packaging does not include how many calories intake is suitable for each individual. It takes time to calculate manually the number of calories needed and burned for each person.

### 1.3 PROJECT OBJECTIVE
The objective of this project is to develop a mobile application that help users to have a healthy lifestyle by providing some functions such as counting the amount of calories intake and burned. Apart from that, the application is intended to ease the users to know the number of calories of a particular food in a more convenient way, which is by scanning the barcode. Generally, the apps to be developed will be a simple apps with minimalist design, easy to use and small in storage. The report that will be produced is the Final Project Report.

### 1.4 PROJECT SCOPE
#### 1.4.1 Scope
Calorie Tracker is a system that will help its user to use a mobile application in order to track the calorie intake and calorie burned in a day.

#### 1.4.2 Targeted User
The application is developed to assist men and women who are concerned about eating healthy, loves exercising and also those who want to lose weight as this application will help to monitor the calorie intake as well as calorie burned in a day. 

#### 1.4.3 Specific Platform
In developing Calorie Tracker, Android platform will be used in order to develop this project and Visual Studio Code from Microsoft for the tools as it is a free tools for developers, ES6 react-native, expo app and node.js

### 1.5 CONSTRAINTS
The constraints in developing this application will be limited machine because some of the team members use native code with emulator while the others are using expo app. Besides, other constraints will be skills in creating every function and combining them into one app.

### 1.6 PROJECT STAGES
Task 1: Prepare the proposal
Task date: 24/11/18 – 30/11/18
Milestone 1: 30/11/2018

Task 2: Analysis and Design
Task date: 1/12/18 – 7/12/18
Milestone 2: 7/11/18

Task 3: Development
Task Date: 8/12/18-28/12/18
Milestone 3: 14/12/18
Mielstone 4: 21/12/18

Task 4: Presentation
Task date: expected date (31/12/18)

Task 5: Submission
Task date: expected date (31/12/18)
Milestone 5: 28/12/18

### 1.7 SIGNIFICANCE OF THE PROJECT

The significance of Calorie Tracker will benefit:
- Males or females who want to keep track of their calories with this portable mobile application.
- People who want to know the total number of calories for a specific food or the food they will consume.
- Making life easier for the people who wants to know how many calories burned in each day.
- Give concern and awareness to the people about their healthy lifestyle.

### 1.8 SUMMARY
In conclusion, the Calorie Tracker is an app to help the user maintain a healthy lifestyle by monitoring their calorie intake and calorie burned. The current process of calorie tracking is confusing and hard to understand for them. Based on the problem, we are aiming to develop a proper platform for the user to calculate and observe their daily calorie intake. Not only that, the targeted users and platform to develop this app is also stated with the project stages to plan and keep track on our progress. We hope this project will become successful and useful for the targeted user.

### 1.9 PROJECT DEVELOPMENT

Project Name: CalorieTracker

//App.js (IZZATI)

import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import CalcScreen from "./CalcScreen";
import FoodListScreen from "./FoodListScreen";
import DietTipsScreen from "./DietTipsScreen";
import PedometerScreen from "./PedometerScreen";
import FoodScannerScreen from "./FoodScannerScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Calculate: CalcScreen,
    FoodList: FoodListScreen,
    DietTips: DietTipsScreen,
    Pedometer: PedometerScreen,
    FoodScanner: FoodScannerScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends Component {
  render() {
    return (
       <AppContainer />
    
    );
  }
}

import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import CalcScreen from "./CalcScreen";
import FoodListScreen from "./FoodListScreen";
import DietTipsScreen from "./DietTipsScreen";
import PedometerScreen from "./PedometerScreen";
import FoodScannerScreen from "./FoodScannerScreen";


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Calculate: CalcScreen,
    FoodList: FoodListScreen,
    DietTips: DietTipsScreen,
    Pedometer: PedometerScreen,
    FoodScanner: FoodScannerScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends Component {
  render() {
    return (
       <AppContainer />
    
    );
  }
}


// FoodListScreen.js (IZZATI)

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





//Diet Tips (AMINAH)
import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'First Tips!',
    name: 'Fat Loss',
    image: require('./food1.jpeg'),
  },
  {
    text: 'Second Tips!',
    name: 'Vege',
    image: require('./food2.jpeg'),
  },
  {
    text: 'Third Tips!',
    name: 'Craving',
    image: require('./food3.jpeg'),
  },
];
export default class DietTipsScreen extends Component {
  render() {
    return (
      <Container>
       
        <View>
        <Text style={{ fontSize: 20, marginLeft: 10,marginTop: 10, marginBottom: 10}}>Diet Tips</Text>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>DietTips</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 440, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}




//Calculate Calorie Goal(ARIFFAH) , Calorie Burned (AMINAH), Calorie Remaining(ASYIQIN) 
import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Picker, Alert } from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      exerciseMins: 0,
      exerciseType: '',
      calBurn: 0,

      goal: 0,
      height: 0,
      weight: 0,
      age:0,
      gender: '',

      calRemainder:0, 
      calFood:0,

      reset:'Reset'
    }
  }

  updateReset() {
    this.setState({exerciseMins:this.exerciseMins=0})
    this.setState({exerciseType:this.exerciseType=''})
    this.setState({calBurn:this.calBurn=0})

    this.setState({goal:this.goal=0})
    this.setState({height:this.height=0})
    this.setState({weight:this.weight=0})
    this.setState({age:this.age=0})
    this.setState({gender:this.gender=''})

    this.setState({calRemainder:this.calRemainder=0})
    this.setState({calFood:this.calFood=0})
  }

 calculateBurn = () => {    
    if(this.state.exerciseType == 'Running')
      { this.setState({calBurn: this.state.exerciseMins*11.5*3.5*this.state.weight/200}); }
    else if(this.state.exerciseType == 'Walking')
      { this.setState({calBurn: this.state.exerciseMins*4.5*3.5*this.state.weight/200}); }
    else if(this.state.exerciseType == 'Cycling')
      { this.setState({calBurn: this.state.exerciseMins*10.5*3.5*this.state.weight/200}); }
   else if(this.state.exerciseType == 'Swimming')
      { this.setState({calBurn: this.state.exerciseMins*10.0*3.5*this.state.weight/200}); }
   else if(this.state.exerciseType == 'Sitting')
      { this.setState({calBurn: this.state.exerciseMins*1.0*3.5*this.state.weight/200}); }
   else if(this.state.exerciseType == 'Dancing')
      { this.setState({calBurn: this.state.exerciseMins*7.0*3.5*this.state.weight/200}); }

  }


   calculateGoal = () => {    
    if(this.state.gender == 'female' || this.state.gender == 'Female' && this.state.age <= 9)
      { this.setState({goal: 22.5 * this.state.weight + 499}); }
    else if(this.state.gender == 'female' || this.state.gender == 'Female' && (this.state.age >=10 && this.state.age <=17))
      { this.setState({goal: 12.2 * this.state.weight + 746}); }
    else if(this.state.gender == 'female' || this.state.gender == 'Female' && (this.state.age >=18 && this.state.age <=29))
      { this.setState({goal: 14.7 * this.state.weight + 496}); }
    else if(this.state.gender == 'female' || this.state.gender == 'Female' && (this.state.age >=30 && this.state.age <=60))
      { this.setState({goal: 8.7 * this.state.weight + 829}); }
    else if(this.state.gender == 'female' || this.state.gender == 'Female' && (this.state.age >=60))
      { this.setState({goal: 10.5 * this.state.weight + 596}); }

    else if(this.state.gender == 'male' || this.state.gender == 'Male' && (this.state.age <=9))
      { this.setState({goal: 22.7 * this.state.weight + 495}); }
    else if(this.state.gender == 'male' || this.state.gender == 'Male' && (this.state.age >=10 && this.state.age <=17))
      { this.setState({goal: 17.5 * this.state.weight + 651}); }
    else if(this.state.gender == 'male' || this.state.gender == 'Male' && (this.state.age >=18 && this.state.age <=29))
      { this.setState({goal: 15.3 * this.state.weight + 679}); }
    else if(this.state.gender == 'male' || this.state.gender == 'Male' && (this.state.age >=30 && this.state.age <=60))
      { this.setState({goal: 13.5 * this.state.weight + 487}); }

  }

  calculateRemainder = () =>{
    this.setState({calRemainder: (this.state.goal - this.state.calFood + this.state.calBurn).toFixed(2)} )
    if(this.state.calRemainder >1 && this.state.calRemainder < this.state.goal)
          Alert.alert('Your calorie remaining is ' + this.state.calRemainder + 'kcal')
    else if(this.state.calRemainder==1)
          Alert.alert("You have achieved your calorie goal today!")
    else if(this.state.calRemainder < -1)
          Alert.alert("You have exceeded your calorie goal. Please reduce calorie intake or do more exercise!")
    
  }

 render(){
  return(

   <View style={{flex: 1, paddingTop: 50, paddingBottom: 20, flexDirection: 'column', justifyContent: 'space-around',     alignItems: 'center'}}>
   
    <View style={Styles.container}>
      <Text> USER DETAILS </Text>
        <TextInput style ={{backgroundColor: '#FFA07A', width: 320,  textAlign: "center"}} onChangeText={(height)                   =>this.setState({height})} placeholder="Height (m)" placeholderTextColor="white"/>

      <TextInput style ={{backgroundColor: '#FFA07A', width: 320,  textAlign: "center"}} onChangeText={(weight)                   =>this.setState({weight})} placeholder=" Weight (kg)" placeholderTextColor="white"/>

      <TextInput style ={{backgroundColor: '#FFA07A', width: 320,  textAlign: "center"}} onChangeText={(gender)                   =>this.setState({gender})} placeholder="Gender(female/male)" placeholderTextColor="white"/>

      <TextInput style ={{backgroundColor: '#FFA07A', width: 320,  textAlign: "center"}} onChangeText={(age)                      =>this.setState({age})} placeholder=" Age" placeholderTextColor="white"/>

    </View>
      <Button 
      color="#175bd1" 
      onPress={this.calculateGoal} 
      title='Calculate Calorie Goal'/>

      <Text></Text>
      <Text style={Styles.instructions}> Calorie Goal Intake = {this.state.goal} kcal </Text>

    <View style={Styles.container}>
      <Text> CALCULATE CALORIES BURN </Text>

       <TextInput style ={{backgroundColor: '#FFA07A', width: 320,  textAlign: "center"}} onChangeText={(exerciseMins)                   =>this.setState({exerciseMins})} placeholder="Exercise Duration (minutes)" placeholderTextColor="white"/>
     
     <Picker
        selectedValue={this.state.exerciseType}
        style={{ backgroundColor: '#FFDAB9',height:200, width: 200, textAlign: 'center' }}
        onValueChange={(itemValue, itemIndex) => this.setState({exerciseType: itemValue})}>
        <Picker.Item label="Choose your exercise type" value="exercisetype" />
        <Picker.Item label="Cycling" value="Cyling" />
        <Picker.Item label="Dancing" value="Dancing" />
        <Picker.Item label="Running" value="Running" />
        <Picker.Item label="Swimming" value="Swimming" />
        <Picker.Item label="Walking" value="Walking" />
        <Picker.Item label="Inactivity" value="Inactivity" />
               
        
    </Picker>
 <TextInput style ={{backgroundColor: '#FFA07A', width: 320,  textAlign: "center"}} onChangeText={(weight)                   =>this.setState({weight})} placeholder=" Weight (kg)" placeholderTextColor="white"/>

    </View>

    <Button 
      color="#175bd1"
      onPress={this.calculateBurn} 
      title='Calculate Calorie Burn'/>

      <Text></Text>
      <Text style={Styles.instructions}> Calorie Burn = {this.state.calBurn} kcal </Text>

  <View style={Styles.container}>
      <Text> USER CALORIE INTAKE </Text>

       <TextInput style ={{backgroundColor: '#FFA07A', width: 320,  textAlign: "center"}} onChangeText={(calFood)                   =>this.setState({calFood})} placeholder="Key In Your Calorie Intake for Today (kcal)" placeholderTextColor="white"/>
  </View>
      


        
  <Button color="#175bd1"  onPress={this.calculateRemainder} title='Calorie Remaining        '/>
  <Text></Text>
  <Text></Text>
  <Text style={Styles.instructions}> Calculate Calorie Remaining = {this.state.calRemainder} kcal
  </Text>
  
  <Button onPress={() =>this.updateReset()} title="Reset"></Button>
</View>
 );
 }
}

const Styles = StyleSheet.create({
   container: {
      //flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FFDAB9',
      borderColor: 'black',
     //paddingTop:20,
    //paddingBottom:20,
    marginTop:0
      
    },

    /* userDetails: {
     //flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FFDAB9',
      borderColor: 'black',
      //paddingTop:20,
      //paddingBottom:20
      
    }, */

     instructions: {
     textAlign: 'center',
     color: '#333333',
    marginBottom: 60,
     backgroundColor: '#FF69B4',
     width: 400,
     fontSize: 20,
     
    },

  });
  
  
  
  //barcode scanner (ARIFFAH)
  
  import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions, } from 'expo';

export default class App extends Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };


  _handleBarCodeRead = data => {
    //if (JSON.stringify(data) == "726165091065")    
      Alert.alert(
      JSON.stringify(data),
      'Food Name: Ice Mountain Mineral Water, Food Calorie: 0kcal'      
      );
 
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>FOOD BARCODE SCANNER</Text>
        <Text></Text>
        <Text></Text>

        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
        }

        <Text></Text>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});



//pedometer (ASYIQIN)
import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View, Button } from "react-native";

export default class PedometerSensor extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    reset:'Reset'
  };

  updateReset=() =>{
    this.setState({reset:this.currentStepCount=0})
  }
  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View style={styles.container}>
        
        <Text>
          Steps taken in the last 24 hours: {this.state.pastStepCount}
        </Text>
        <Text></Text>
        <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>

        <Button onPress={() =>this.updateReset()} title="Reset"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

Expo.registerRootComponent(PedometerSensor);












