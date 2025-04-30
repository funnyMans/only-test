'use client';
import { ButtonSC } from '@/shared/ui/buttons/styled/ButtonSC';
import styled from 'styled-components';

export const TaskCheckBtnSC = styled(ButtonSC)`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizes[20]};
  font-weight: 900;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
`;
