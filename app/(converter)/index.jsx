import { router } from "expo-router";
import styled from "styled-components/native";

export default function Index() {
  return (
    <Container>
      <Icon source="https://i.ibb.co/pBpVr09D/cinta-metrica.png" />
      <Title>Conversor</Title>
      <SubTitle>(CM) a (M)</SubTitle>
      <StartButton onPress={() => router.push("/converter")}>
        <ButtonText>Comenzar</ButtonText>
      </StartButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f7e7ce;
`;

const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const SubTitle = styled.Text`
  font-size: 35px;
  color: gray;
  margin-bottom: 20px;
  font-weight: bold;
`;

const StartButton = styled.TouchableOpacity`
  padding: 10px 30px;
  background-color: #decf93;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;

const Icon = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;
