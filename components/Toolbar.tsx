import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';
import React from 'react';
import { useSlate } from 'slate-react';
import { isMarkActive, Mark, toggleMark } from '../utils/richEditor';
import { ToolbarIconStyled, ToolbarStyled } from './richEditorStyled';

type TMarkOptions = {
  mark: Mark,
  icon: JSX.Element
}

export default function Toolbar() {
  const editor = useSlate();
  const mark: TMarkOptions[] = [
    { mark: 'bold', icon: <FormatBold />, },
    { mark: 'italic', icon: <FormatItalic /> },
    { mark: 'underline', icon: <FormatUnderlined /> }
  ];
  return (
    <ToolbarStyled elevation={0}>
      {
        mark.map((item, key) => (
          <ToolbarIconStyled
            className={isMarkActive(editor, item.mark) ? 'active' : 'disactive'}
            onMouseDown={event => {
              event.preventDefault();
              toggleMark(editor, item.mark);
            }}
            key={key}
          >
            {item.icon}
          </ToolbarIconStyled>
        ))
      }
      {/* <ToolbarIconStyled
        className={CustomEditor.isCodeBlockActive(editor) ? 'active' : 'disactive'}
        onMouseDown={event => {
          event.preventDefault();
          CustomEditor.toggleCodeBlock(editor);
        }}
      >
        <Code />
      </ToolbarIconStyled> */}
    </ToolbarStyled>
  );
}
