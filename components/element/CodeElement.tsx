import React from 'react';
import { RenderElementProps } from 'slate-react';

export default function CodeElement({ attributes, children }: RenderElementProps) {
  return (
    <pre {...attributes}>
      <code style={{ background: '#EEE', padding: '0 .2rem', whiteSpace: 'pre-wrap' }}>{children}</code>
    </pre>
  );
}
