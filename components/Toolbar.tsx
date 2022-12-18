import { Code, FormatBold, FormatItalic, FormatQuote, FormatUnderlined } from '@mui/icons-material';
import React from 'react';
import { useSlate } from 'slate-react';
import { Block, isBlockActive, isMarkActive, Mark, toggleBlock, toggleMark } from '../utils/richEditor';
import { ToolbarIconStyled, ToolbarStyled } from './richEditorStyled';

type TMarkOptions = {
  mark: Mark,
  icon: JSX.Element
}

type TBlockOptions = {
  block: Block,
  icon: JSX.Element
}

export default function Toolbar() {
  const editor = useSlate();
  const marks: TMarkOptions[] = [
    { mark: 'bold', icon: <FormatBold /> },
    { mark: 'italic', icon: <FormatItalic /> },
    { mark: 'underline', icon: <FormatUnderlined /> }
  ];
  const blocks: TBlockOptions[] = [
    { block: 'code', icon: <Code /> },
    { block: 'quote', icon: <FormatQuote /> }
  ];
  return (
    <ToolbarStyled elevation={0}>
      {
        marks.map((item, key) => (
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
      {
        blocks.map((item, key) => (
          <ToolbarIconStyled
            className={isBlockActive(editor, item.block) ? 'active' : 'disactive'}
            onMouseDown={event => {
              event.preventDefault();
              toggleBlock(editor, item.block);
            }}
            key={key}
          >
            {item.icon}
          </ToolbarIconStyled>
        ))
      }
    </ToolbarStyled>
  );
}
