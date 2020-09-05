import React, {useEffect, useState} from 'react';
import {
  Container,
  Content,
  Button,
  List,
  ListItem,
  Item,
  Text,
  Spinner,
  Thumbnail,
} from 'native-base';
import {API_KEY} from '@env';

const Weather = ({navigation, route}) => {
  const [weather, setWeather] = useState(null);
  const fetchWeather = () => {
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${'delhi'}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    <Container>
      <Content>
        <Spinner />
      </Content>
    </Container>;
  }

  return (
    <Container>
      <Content>
        <List>
          <ListItem>
            <Text>{weather.temperature}</Text>
            {weather.weather_icons.map((icon, index) => (
              <Thumbnail source={{uri: icon}} height={100} width={100} />
            ))}
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default Weather;
