import { ButtonBaseProps } from '@mui/material';

import * as S from './style';

export type ButtonProps = {
  size?: 'small' | 'medium' | 'big';
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
} & ButtonBaseProps;

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', children, ...props }) => (
  <S.Button {...props} variant={variant} size={size}>
    {children}
  </S.Button>
);
