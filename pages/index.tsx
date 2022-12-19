import React, { useState } from 'react';
import RichEditor, { IRichEditorChange } from '../components/RichEditor';
import { Container } from '@mui/material';
import { Descendant } from 'slate';
import example from '../mock/document';

export default function Home() {
  const [initialValue, setInitalValue] = useState<Descendant[]>(example);
  const handleInputChange = (e: IRichEditorChange) => {
    setInitalValue(e.target.value);
  };

  return (
    <Container maxWidth='lg'>
      <h3>Basic Usage</h3>
      <RichEditor
        name='richEditor'
        value={initialValue}
        onChange={handleInputChange}
      />
    </Container>
  );
}
