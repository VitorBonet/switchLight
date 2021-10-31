import React, { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import axios from 'axios';

import { Text, Switch } from 'react-native';

import { 
  Container,
  TitleDiv,
  Title, 
  SubTitle,
  OnLightDiv,
  Colors,
  ColorResultDiv,
  ColorResult,
} from './styles';

const Main = () => { 
  const [isEnabled, setIsEnabled] = useState(false);
  const [colorR, setColorR] = useState(255);
  const [colorG, setColorG] = useState(255);
  const [colorB, setColorB] = useState(255);

  const api = axios.create({
    baseURL: 'https://localhost:3333/',
  });

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    handleStartLight();
  }, [isEnabled]);

  function handleStartLight() {
    api.post('/lights', {
      action: isEnabled,
    });
  }
  
  useEffect(() => {
    changeColor();
  }, [colorR, colorG, colorB]);

  function changeColor() {
    api.post('/colors', {
      red: colorR,
      green: colorG,
      blue: colorB,
    })
  }
  
  return (
    <Container>
      <TitleDiv>
        <Title>Switch Light</Title>
      </TitleDiv>
      <OnLightDiv>
        <SubTitle>Status</SubTitle>
        <Switch 
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </OnLightDiv>

      <SubTitle>Edição de cor</SubTitle>
      <Colors>
        <Text>Vermelho</Text>
        <Slider
          value={colorR}
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#f00"
          thumbTintColor="#f00"
          maximumTrackTintColor="#000000"
          onValueChange={(e) => setColorR(e)}
        />

        <Text>Verde</Text>
        <Slider
          value={colorG}
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#00ff00"
          thumbTintColor="#00ff00"
          maximumTrackTintColor="#000000"
          onValueChange={(e) => setColorG(e)}
        />

        <Text>Azul</Text>
        <Slider
          value={colorB}
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor="#00F"
          thumbTintColor="#00F"
          maximumTrackTintColor="#000000"
          onValueChange={(e) => setColorB(e)}
        />
      </Colors>
      
      <SubTitle>Cor Resultante</SubTitle>
      <ColorResultDiv>
        {isEnabled ? (
          <ColorResult colorR={colorR} colorG={colorG} colorB={colorB}></ColorResult>
        ) : (
          <ColorResult colorR={189} colorG={193} colorB={198}></ColorResult>
        )}
        
      </ColorResultDiv>
    </Container>
  );
}

export default Main;