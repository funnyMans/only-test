import styled from 'styled-components';

type MainCircleProps = {
  $radius: number;
  $rotate: number;
};
export const GsapMainCircleSC = styled.div<MainCircleProps>`
  width: ${({ $radius }) => $radius * 2 + 'px'};
  height: ${({ $radius }) => $radius * 2 + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.independence}20`};
  box-shadow: ${({ theme }) =>
    theme.mode === 'light'
      ? `0px 4px 4px ${theme.text.independence}20, 0px 10px 30px ${theme.text.independence}20, 0px 0px 4px ${theme.text.independence}20`
      : `${theme.colors.independence} 10px 10px 20px inset`};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  & > a,
  & .circle {
    transform: rotate(${({ $rotate }) => -$rotate}deg);
  }
`;
