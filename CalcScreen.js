


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

   <View style={{flex: 1, paddingTop: 20, paddingBottom: 20, flexDirection: 'column', justifyContent: 'space-around',     alignItems: 'center'}}>
   
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
        style={{ backgroundColor: '#FFA07A',height:200, width: 320, textAlign: 'center' }}
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
      


        
  <Button color="#278ae8"  onPress={this.calculateRemainder} title=' Calculate Calorie Remaining        '/>
  <Text></Text>
  <Text></Text>
  <Text style={Styles.instructions}> Calorie Remaining = {this.state.calRemainder} kcal'
  </Text>
  
  <Button onPress={() =>this.updateReset()} title="Reset"></Button>
</View>
 );
 }
}

const Styles = StyleSheet.create({
   container: {
      //flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFDAB9',
      borderColor: 'black',
      marginBottom: 20
     //paddingTop:20,
    //paddingBottom:20,
    //marginTop:0
      
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
     color: '#ffffff',
    marginBottom: 30,
     backgroundColor: '#FF69B4',
     width: 400,
     fontSize: 18,
     marginTop:20,
     paddingTop:5,
     paddingBottom:5
    },

  });