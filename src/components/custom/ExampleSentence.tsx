import type React from "react";

interface ExampleSentenceProps {
  sentence_arabic: string;
  sentence_english: string;
}

const ExampleSentence: React.FC<ExampleSentenceProps> = ({
  sentence_arabic,
  sentence_english,
}) => (
  <div>
    <p>{sentence_arabic}</p>
    <p>{sentence_english}</p>
  </div>
);

export default ExampleSentence;
