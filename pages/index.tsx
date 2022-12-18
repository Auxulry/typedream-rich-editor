import React from 'react';
import RichEditor from '../components/RichEditor';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth='lg'>
      <h3>Basic Usage</h3>
      <RichEditor />
    </Container>
  );
}
