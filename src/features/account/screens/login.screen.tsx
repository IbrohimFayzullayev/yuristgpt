import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

const Input = styled(TextInput)`
  height: 40px;
  border-radius: 5px;
  border-width: 1px;
  padding: 10px;
`;

const Button = styled(TouchableOpacity)`
  width: 80%;
  height: 40px;
  background-color: #007bff;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
`;

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      // Perform login logic here
      Alert.alert("Success", "Login successful");
    } else {
      Alert.alert("Error", "Invalid username or password");
    }
  };

  return (
    <Container>
      <BackgroundImage source={require("../assets/background.jpg")}>
        <InputContainer>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </InputContainer>
        <Button onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </Button>
      </BackgroundImage>
    </Container>
  );
};

export default LoginScreen;
