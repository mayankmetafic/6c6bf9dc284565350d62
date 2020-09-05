import React, { useState } from 'react';
import {Container, Header, Content, Button, Input, Item, Text} from 'native-base';

const Home = ({navigation}) => {
    const [country, setCountry] = useState('');

    const fetchData = () => {
        const url = `https://restcountries.eu/rest/v2/name/${country}`;
        fetch(url)
            .then(respone => respone.json())
            .then(data => {
                navigation.navigate('Country', {data: data[0]});
            });
    };
    return (
        <Container>
            <Header />
            <Content>
                <Item rounded>
                    <Input 
                        placeholder="Enter country"
                        value={country}
                        onChangeText={setCountry}
                    />
                </Item>
                <Button
                  disabled={!country}
                  onPress={fetchData}
                >
                    <Text>Submit</Text>
                </Button>
            </Content>
        </Container>
    );
};

export default Home;