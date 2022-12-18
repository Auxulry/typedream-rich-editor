import React from 'react';
import { RenderElementProps } from 'slate-react';

export default function QuoteElement({ attributes, children }: RenderElementProps) {
  return <blockquote
    {...attributes}
    style={{
      borderLeft: '2px solid #DDD',
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: '10px',
      color: '#AAA',
    }}
  >
    {children}
  </blockquote>;
}
