import styled from 'styled-components';

type IntroInfoSCProps = {
  $align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'initial'
    | 'inherit'
    | 'unset'
    | undefined;
};
export const IntroInfoSC = styled.section<IntroInfoSCProps>`
  width: 50%;
  height: 100%;
  display: flex;

  flex-direction: column;
  align-items: ${({ $align }) => $align ?? 'start'};
  justify-content: flex-end;
  gap: 1rem;
  padding: 2rem;
`;

export const IntroInfoContentSC = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
