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


