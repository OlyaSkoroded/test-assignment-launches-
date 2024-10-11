import { ButtonBase, styled } from '@mui/material';

import { ButtonProps } from './Button';

export const Button = styled(ButtonBase)<ButtonProps>(({ fullWidth, theme, size, variant }) => ({
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  fontFamily: theme.typography.body1.fontFamily,
  transition: 'all 0.125s',
  width: fullWidth ? '100%' : 'max-content',

  ...(size === 'big' && {
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    padding: '14px 20px',
    maxHeight: '48px',
  }),

  ...(size === 'medium' && {
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    padding: '8px 16px',
    maxHeight: '36px',
  }),

  ...(size === 'small' && {
    fontSize: '12x',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    padding: '4px 12px',
    maxHeight: '28px',
  }),

  ...(variant === 'primary' && {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: `1px solid ${theme.palette.primary.dark}`,

    '&:hover, &:active': {
      background: theme.palette.primary.dark,
    },

    '&:disabled': {
      opacity: '0.3',
    },

    '&:focus-visible': {
      borderColor: theme.palette.grey[700],
    },
  }),

  ...(variant === 'secondary' && {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    border: `1px solid transparent`,

    '&:hover, &:active': {
      background: theme.palette.secondary.dark,
    },

    '&:disabled': {
      opacity: '0.3',
    },

    '&:focus-visible': {
      borderColor: theme.palette.grey[700],
    },
  }),
}));
