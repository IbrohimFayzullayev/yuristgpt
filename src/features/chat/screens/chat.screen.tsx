import React, { useState } from "react";
import { FlatList, Animated, Easing } from "react-native";
import styled from "styled-components/native";
// import axios from "axios";

type Message = {
  id: string;
  text: string;
  type: "question" | "answer";
};

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 10px;
`;

const MessageContainer = styled(Animated.View)<{ type: "question" | "answer" }>`
  align-self: ${({ type }) =>
    type === "question" ? "flex-end" : "flex-start"};
  background-color: ${({ type }) =>
    type === "question" ? "#4caf50" : "#e0e0e0"};
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 80%;
`;

const MessageText = styled.Text<{ type: "question" | "answer" }>`
  color: ${({ type }) => (type === "question" ? "#fff" : "#333")};
  font-size: 16px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #ddd;
`;

const Input = styled.TextInput`
  flex: 1;
  background-color: #f1f1f1;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 16px;
  margin-right: 10px;
`;

const SendButton = styled.TouchableOpacity`
  background-color: #4caf50;
  padding: 10px 15px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const SendButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can I help you?",
      type: "answer",
    },
  ]);
  const [question, setQuestion] = useState<string>("");
  const [animation] = useState(new Animated.Value(0));

  const animateMessage = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 600,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const handleSendQuestion = async () => {
    if (!question.trim()) return;

    const newQuestion: Message = {
      id: Date.now().toString(),
      text: question,
      type: "question",
    };

    setMessages((prevMessages) => [...prevMessages, newQuestion]);
    setQuestion("");
    animateMessage();

    try {
      //   const response = await axios.post("https://api.your-backend.com/ask", {
      //     question,
      //   });
      const newAnswer: Message = {
        id: Date.now().toString(),
        text: "This is the answer from the AI.",
        type: "answer",
      };
      setMessages((prevMessages) => [...prevMessages, newAnswer]);
    } catch (error) {
      const errorAnswer: Message = {
        id: Date.now().toString(),
        text: "Sorry, I couldn't get an answer. Please try again.",
        type: "answer",
      };
      setMessages((prevMessages) => [...prevMessages, errorAnswer]);
    }
  };

  const animatedStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.9, 1],
        }),
      },
    ],
    opacity: animation,
  };

  return (
    <Container>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageContainer type={item.type} style={animatedStyle}>
            <MessageText type={item.type}>{item.text}</MessageText>
          </MessageContainer>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <InputContainer>
        <Input
          value={question}
          onChangeText={setQuestion}
          placeholder="Ask anything..."
          placeholderTextColor="#999"
          onSubmitEditing={handleSendQuestion}
        />
        <SendButton onPress={handleSendQuestion}>
          <SendButtonText>Send</SendButtonText>
        </SendButton>
      </InputContainer>
    </Container>
  );
};

export default ChatScreen;
