import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

export default function Converter() {
  const [centimeters, setCentimeters] = useState("");
  const [result, setResult] = useState(null);

  const handleConverter = () => {
    const centimetersValue = parseFloat(centimeters);
    if (!centimeters) {
      Alert.alert(
        "Error",
        "Por favor, ingresa un valor válido en centímetros.",
      );
      return;
    }
    const meters = centimetersValue / 100;
    setResult(meters);
  };

  return (
    <Container>
      <Title>Conversor</Title>
      <Input
        placeholder="Centímetros CM"
        value={centimeters}
        onChangeText={setCentimeters}
        keyboardType="numeric"
      />
      <CalculateButton onPress={handleConverter}>
        <ButtonText>Calcular</ButtonText>
      </CalculateButton>
      <ResultText>
        Resultado: {result !== null ? `${result} M` : "0.00"}
      </ResultText>
      <BackButton onPress={() => router.push("/")}>
        <BackButtonText>Volver</BackButtonText>
      </BackButton>
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

const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  text-align: center;
  border: none;
  font-size: 16px;
`;

const CalculateButton = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ButtonText = styled.Text`
  color: #614e3e;
  font-size: 16px;
  font-weight: bold;
`;

const ResultText = styled.Text`
  font-size: 30px;
  color: #614e3e;
  margin-bottom: 30px;
  font-weight: bold;
`;

const BackButton = styled.TouchableOpacity`
  padding: 10px 30px;
  background-color: #decf93;
  border-radius: 10px;
`;

const BackButtonText = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;
