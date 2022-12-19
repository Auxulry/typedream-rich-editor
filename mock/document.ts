import { Descendant } from 'slate';

const example: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam beatae error ipsa sed enim iste maiores recusandae ea voluptas ad at nemo obcaecati tempora, repellat pariatur cupiditate aliquid et. '
      },
      {
        text: 'Bold Text, ', bold: true
      },
      {
        text: 'Italic Text, ', italic: true
      },
      {
        text: 'Underline Text.', underline: true
      }
    ]
  },
  {
    type: 'code',
    children: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur accusamus eos modi magni illum accusantium asperiores odio cumque doloribus iure eligendi molestias enim, ipsam aliquam sapiente porro culpa vel molestiae.'
      }
    ]
  },
  {
    type: 'quote',
    children: [
      {
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, saepe ut. Reprehenderit, repellendus? Aut dolorum possimus architecto? Possimus nostrum facilis necessitatibus tempore. Officiis eligendi sit omnis quidem! Exercitationem, perferendis doloremque.', quote: true
      }
    ]
  }
];

export default example;