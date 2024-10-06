import React, { useState } from "react";
import styled from "styled-components/native";

const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const handleRegister = () => {
    // Add your registration logic here
  };

  return (
    <Container>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Input
        placeholder="Repeat Password"
        secureTextEntry
        value={repeatedPassword}
        onChangeText={setRepeatedPassword}
      />
      <Button onPress={handleRegister}>
        <ButtonText>Register</ButtonText>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: #007bff;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export default RegisterScreen;
