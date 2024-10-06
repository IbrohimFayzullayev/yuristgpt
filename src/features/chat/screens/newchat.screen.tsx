import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

const InputContainer = styled.View`
  margin-bottom: 16px;
`;

const Input = styled.TextInput`
  height: 40px;
  border: 1px solid #ccc;
  padding: 8px;
`;

const ButtonContainer = styled.View`
  margin-bottom: 16px;
`;

const ChatContainer = styled.View`
  flex: 1;
`;

const ChatBubble = styled.View`
  background-color: #f0f0f0;
  padding: 8px;
  margin-bottom: 8px;
`;

const ChatText = styled.Text`
  color: #333;
`;

const NewChatScreen: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (text: string) => {
    setQuestion(text);
  };

  const handleAskQuestion = () => {
    // Send the question to the backend via API and receive the answer
    // Replace the following code with your actual API call
    const fakeApiCall = async () => {
      // Simulating API call delay
      //   await new Promise((resolve) => setTimeout(resolve, 1000));
      setAnswer("This is the answer from the AI.");
    };

    fakeApiCall();
  };

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Write your question"
          value={question}
          onChangeText={handleQuestionChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button title="Ask" onPress={handleAskQuestion} />
      </ButtonContainer>
      <ChatContainer>
        {answer ? (
          <ChatBubble>
            <ChatText>{answer}</ChatText>
          </ChatBubble>
        ) : null}
      </ChatContainer>
    </Container>
  );
};

export default NewChatScreen;
