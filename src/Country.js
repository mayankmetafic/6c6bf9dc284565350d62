import React from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  List,
  ListItem,
  Item,
  Text,
} from 'native-base';
import {SvgCssUri} from 'react-native-svg';
import {Dimensions} from 'react-native';

const Country = ({navigation, route}) => {
  const {data} = route.params;

  if (!data) {
    return (
      <Container>
        <Content><Text>Oops! couldn't find that country. Please try again.</Text></Content>
      </Container>
    );
  }
  return (
    <Container>
      <Header />
      <Content>
        <Text>About {data.name}</Text>
        <List>
          <ListItem>
            <Text>Capital: {data.capital}</Text>
          </ListItem>
          <ListItem>
            <Text>Population: {data.population}</Text>
          </ListItem>
          <ListItem>
            <Text>LatLng: {data.latlng}</Text>
          </ListItem>
          <ListItem>
            <SvgCssUri
              uri={data.flag}
              height={400}
              width={Dimensions.get('window').width}
              scale={0.2}
            />
          </ListItem>
        </List>
        <Button
          onPress={() => {
            navigation.navigate('Weather', {capital: data.capital});
          }}>
          <Text>Capital Weather</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Country;
