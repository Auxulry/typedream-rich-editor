import { KeyboardEvent } from 'react';
import { Editor, Element, Node, Text, Transforms } from 'slate';

export type Mark = 'bold' | 'italic' | 'underline' | 'quote'
export type Block = 'paragraph' | 'code' | 'quote'

// Custom Text Types
export type CustomText = { text: string; bold?: true, italic?: true, underline?: true, quote?: true }

type TParagraph = {
  type: 'paragraph',
  children: CustomText[]
}

type TCodeElement = {
  type: 'code',
  children: CustomText[]
}

type TQuoteElement = {
  type: 'quote',
  children: CustomText[]
}

// Custom Element Types
export type CustomElement = TParagraph | TCodeElement | TQuoteElement

/**
 *
 * Function Check if node has mark
 *
 * @param n
 * @param mark
 * @returns
 */
function checkMark(n: Node, mark: Mark): boolean {
  let isActive = false;
  switch (mark) {
    case 'bold':
      isActive = Text.isText(n) && n.bold === true;
      break;
    case 'italic':
      isActive = Text.isText(n) && n.italic === true;
      break;
    case 'underline':
      isActive = Text.isText(n) && n.underline === true;
      break;
    case 'quote':
      isActive = Text.isText(n) && n.quote === true;
      break;
    default:
      break;
  }

  return isActive;
}

/**
 *
 * Function check if node has mark active
 *
 * @param editor
 * @param mark
 * @returns
 */
export function isMarkActive(editor: Editor, mark: Mark): boolean {
  const [match] = Editor.nodes(editor, {
    match: n => checkMark(n, mark),
    universal: true
  });

  return !!match;
}

/**
 *
 * Function Add Mark
 *
 * @param editor
 * @param mark
 */
export function toggleMark(editor: Editor, mark: Mark): void {
  const isActive = isMarkActive(editor, mark);
  if (isActive) {
    Editor.removeMark(editor, mark);
  } else {
    Editor.addMark(editor, mark, true);
  }
}

/**
 *
 * Function check if node has type
 *
 * @param n
 * @param block
 * @returns
 */
export function checkBlock(n: Node, block: Block): boolean {
  let isActive = false;
  switch (block) {
    case 'paragraph':
      isActive = Element.isElement(n) && n.type === 'paragraph';
      break;
    case 'code':
      isActive = Element.isElement(n) && n.type === 'code';
      break;
    case 'quote':
      isActive = Element.isElement(n) && n.type === 'quote';
      break;
    default:
      break;
  }

  return isActive;
}

/**
 *
 * Function check if node has type active
 *
 * @param editor
 * @param block
 * @returns
 */
export function isBlockActive(editor: Editor, block: Block): boolean {
  const [match] = Editor.nodes(editor, {
    match: n => checkBlock(n, block)
  });

  return !!match;
}


/**
 *
 * Function Add Block
 *
 * @param editor
 * @param block
 */
export function toggleBlock(editor: Editor, block: Block): void {
  const isActive = isBlockActive(editor, block);
  Transforms.setNodes(
    editor,
    { type: isActive ? undefined : block },
    { match: n => Editor.isBlock(editor, n) }
  );

  if (isActive && block === 'quote') {
    Editor.removeMark(editor, 'quote');
  } else if (!isActive && block === 'quote') {
    Editor.addMark(editor, 'quote', true);
  }
}

/**
 *
 * Function On Keyboard Press
 *
 * @param event
 * @param editor
 * @returns
 */
export function eventOnKeyDown(event: KeyboardEvent<HTMLDivElement>, editor: Editor) {
  if (!event.ctrlKey) {
    return;
  }
  event.preventDefault();
  switch (event.key) {
    case '`':
      break;
    case 'b':
      toggleMark(editor, 'bold');
      break;
    case 'i':
      toggleMark(editor, 'italic');
      break;
    case 'u':
      toggleMark(editor, 'underline');
      break;
    default:
      break;
  }
}