import React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      {...rest}
    >
      {label}
    </StyledButton>
  );
};
