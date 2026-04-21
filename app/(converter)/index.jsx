import styled from "styled-components/native";

export default function Index() {
  return (
    <Container>
      <TextStyled>Conversor</TextStyled>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TextStyled = styled.Text`
  font-size: 20px;
`;
