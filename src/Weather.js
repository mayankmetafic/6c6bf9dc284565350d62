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
import styles from './styles';

const Weather = ({navigation, route}) => {
  const [weather, setWeather] = useState(null);
  const fetchWeather = () => {
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${'delhi'}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data.current);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <Container>
        <Content>
          <Spinner />
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <List>
          <ListItem>
            <Text>{weather?.temperature}</Text>
            <Content>
              {weather.weather_icons.map((icon, index) => (
                <Thumbnail
                  style={styles.icon}
                  source={{uri: icon}}
                  height={100}
                  width={100}
                />
              ))}
            </Content>
          </ListItem>
          <ListItem>
            <Text>Wind Speed: {weather.wind_speed}</Text>
          </ListItem>
          <ListItem>
            <Text>Precipitation: {weather.precip}</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default Weather;
