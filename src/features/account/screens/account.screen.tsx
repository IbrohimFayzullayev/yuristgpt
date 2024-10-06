import React from "react";
import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const AccountScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // navigation.navigate('Login');
  };

  const handleRegister = () => {
    // navigation.navigate('Register');
  };

  return (
    <Container>
      <BackgroundImage source={require("path/to/your/background/image.jpg")}>
        <ButtonContainer>
          <Button onPress={handleLogin}>
            <ButtonText>Login</ButtonText>
          </Button>
          <Button onPress={handleRegister}>
            <ButtonText>Register</ButtonText>
          </Button>
        </ButtonContainer>
      </BackgroundImage>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  justify-content: center;
`;

const ButtonContainer = styled.View`
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  background-color: blue;
  border-radius: 10px;
  padding: 10px;
  margin-vertical: 10px;
  width: 200px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export default AccountScreen;
