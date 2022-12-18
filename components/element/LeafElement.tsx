import React from 'react';
import { RenderLeafProps } from 'slate-react';

export default function LeafElement({ attributes, children, leaf }: RenderLeafProps) {
  // if (leaf.bold) {
  //   return <b {...attributes}>{children}</b>;
  // } else if (leaf.italic) {
  //   return <i {...attributes}>{children}</i>;
  // } else if (leaf.underline) {
  //   return <u {...attributes}>{children}</u>;
  // } else {
  //   return <span {...attributes}>{children}</span>;
  // }
  return <span
    {...attributes}
    style={{
      fontWeight: leaf.bold ? 'bold' : 'normal',
      fontStyle: leaf.italic ? 'italic' : 'normal',
      textDecoration: leaf.underline ? 'underline' : 'normal'
    }}
  >
    {children}
  </span>;
}
