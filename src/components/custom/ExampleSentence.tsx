import React from 'react';

interface ExampleSentenceProps {
  sentence_arabic: string;
  sentence_english: string;
}

const ExampleSentence: React.FC<ExampleSentenceProps> = ({ sentence_arabic, sentence_english }) => {
  return (
    <div>
      <p>{sentence_arabic}</p>
      <p>{sentence_english}</p>
    </div>
  );
};

export default ExampleSentence;