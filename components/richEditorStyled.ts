import styled from '@emotion/styled';
import { IconButton, Paper } from '@mui/material';

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