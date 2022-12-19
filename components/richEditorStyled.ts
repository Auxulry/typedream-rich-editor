import styled from '@emotion/styled';
import { IconButton, Paper } from '@mui/material';
import { Editable } from 'slate-react';

export const Wrapper = styled(Paper)`
  padding: 1rem 2rem;
`;

export const ContentEditable = styled(Editable)`
  min-height: 400px;
`;

export const ToolbarStyled = styled(Paper)`
  margin-bottom: .3rem;
  padding: .5rem 2rem;
`;



export const ToolbarIconStyled = styled(IconButton)`
  &.active {
    filter: invert(0%);
  }
  filter: invert(50%);
`;