import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}

export const StyledButton = styled.button<ButtonProps>`

`;
