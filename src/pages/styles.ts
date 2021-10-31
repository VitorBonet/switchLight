import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  padding: 10px;
`;

export const TitleDiv = styled.View`
  flex: 1;
	align-items: center;
`;

export const Title = styled.Text`
  color: #093366; 
  fontSize: 50px;
`;

export const SubTitle = styled.Text`
  flex: 1;
	align-items: center;
  text-align: center;
  fontSize: 30px;
`;

export const OnLightDiv = styled.View`
  flex: 1;
	align-items: center;
`;

export const Colors = styled.View`
  margin-top: 40px;
`;

export const ColorResultDiv = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
`;

interface IColorResultProps {
  colorR: number;
  colorG: number;
  colorB: number;
}

export const ColorResult = styled.View<IColorResultProps>`
  background-color: rgb(${props => props.colorR || 0}, ${props => props.colorG || 0}, ${props => props.colorB || 0});
  height: 50px;
  width: 80%;
  border-radius: 20px;
`;