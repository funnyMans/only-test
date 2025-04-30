import styled from 'styled-components';

type DateRangeViewProps = {
  $width?: string;
  $height?: string;
};
export type RangeValueProps = {
  $textColor?: string;
};

export const DateRangeViewSC = styled.div<DateRangeViewProps>`
  position: absolute;
  top: ${({ $height }) => `calc(50% - ${$height}/2)`};
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '5%'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  font-size: ${({ theme }) => theme.fontSizes[56]};
  color: ${({ theme }) => theme.colors.blue};
`;

export const DateRangeViewValueSC = styled.span<RangeValueProps>`
  color: ${({ theme, $textColor }) =>
    theme.colors[$textColor as keyof typeof theme.colors] ||
    theme.text.primary};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes[200]};

  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
  &:active {
    color: ${({ theme, $textColor }) =>
      theme.colors[$textColor as keyof typeof theme.colors] + '90' ||
      theme.text.primary};
    transform: scale(0.98);
    transition: transform 0.1s ease-in-out;
  }
  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
    border-radius: 4px;
  }

  @media (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fontSizes[160]};
  }
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSizes[88]};
  }
`;
