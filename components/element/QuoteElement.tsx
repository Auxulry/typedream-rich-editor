import React from 'react';
import { RenderElementProps } from 'slate-react';

export default function QuoteElement({ attributes, children }: RenderElementProps) {
  return <blockquote {...attributes}>{children}</blockquote>;
}
