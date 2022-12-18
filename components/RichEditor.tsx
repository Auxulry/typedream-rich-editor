import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import React, { useState, useCallback } from 'react';
import { BaseEditor, createEditor, Descendant } from 'slate';
import { Editable, ReactEditor, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import { CustomElement, CustomText, eventOnKeyDown } from '../utils/richEditor';
import CodeElement from './element/CodeElement';
import LeafElement from './element/LeafElement';
import QuoteElement from './element/QuoteElement';
import Toolbar from './Toolbar';

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const DefaultElement = ({ attributes, children }: RenderElementProps) => {
  return <p {...attributes}>{children}</p>;
};

export default function RichEditor() {
  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      case 'quote':
        return <QuoteElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <LeafElement {...props} />;
  }, []);

  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Slate
      editor={editor}
      value={initialValue}
    >
      <Toolbar />
      <Wrapper>
        <ContentEditable
          onKeyDown={(e) => eventOnKeyDown(e, editor)}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </Wrapper>
    </Slate>
  );
}

const Wrapper = styled(Paper)`
  padding: 1rem 2rem;
`;

const ContentEditable = styled(Editable)`
  min-height: 400px;
`;
