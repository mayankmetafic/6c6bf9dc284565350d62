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
import styles from './styles';

const Country = ({navigation, route}) => {
  const {data} = route.params;

  if (!data) {
    return (
      <Container>
        <Content>
          <Text>Oops! couldn't find that country. Please try again.</Text>
        </Content>
      </Container>
    );
  }
  return (
    <Container>
      <Header />
      <Content>
        <Text style={styles.center}>About {data.name}</Text>
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
              height={300}
              width={Dimensions.get('window').width - 60}
              preserveAspectRatio="xMidyMid meet"
              scale={0.5}
            />
          </ListItem>
        </List>
        <Button
          style={styles.center}
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
