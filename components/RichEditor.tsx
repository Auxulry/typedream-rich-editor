import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { BaseEditor, createEditor, Descendant } from 'slate';
import { ReactEditor, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import { CustomElement, CustomText, eventOnKeyDown } from '../utils/richEditor';
import CodeElement from './element/CodeElement';
import LeafElement from './element/LeafElement';
import QuoteElement from './element/QuoteElement';
import { ContentEditable, Wrapper } from './richEditorStyled';
import Toolbar from './Toolbar';

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const DefaultElement = ({ attributes, children }: RenderElementProps) => {
  return <p {...attributes}>{children}</p>;
};

export interface IRichEditorChange {
  target: {
    name: string,
    value: Descendant[]
  }
}

interface IRichEditor {
  name: string
  value: Descendant[]
  onChange: (_e: IRichEditorChange) => void
}

function RichEditor({
  name,
  value,
  onChange
}: IRichEditor) {
  const [editor] = useState(() => withReact(createEditor()));

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


  const convertParams = (value: Descendant[]): IRichEditorChange => {
    const isAstChange = editor.operations.some(
      op => 'set_selection' !== op.type
    );
    if (isAstChange) {
      return {
        target: {
          name,
          value
        }
      };
    }
    return {
      target: {
        name,
        value: []
      }
    };
  };

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(value) => onChange(convertParams(value))}
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

RichEditor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RichEditor;