import type { VocabularyItem } from '@/types/vocabulary';
import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ExampleSentence from '@/components/custom/ExampleSentence';
import { Badge } from '@/components/ui/badge';
// Note: The AudioPlayer component is not implemented as it does not exist in the codebase.

interface VocabularyCardProps {
  item: VocabularyItem & {
    // Temporarily include optional fields mentioned in instructions
    // to avoid breaking the component if the type is updated later.
    image_url?: string;
    pronunciation_audio_url?: string;
    definition_arabic?: string;
    term_arabic?: string;
    term_english?: string;
    definition_english?: string;
    example_sentence_arabic?: string;
    example_sentence_english?: string;
  };
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({ item }) => {
  const {
    word,
    translation,
    definition,
    examples,
    plural,
    type,
    tags,
    image_url,
    pronunciation_audio_url,
    definition_arabic,
  } = item;

  const term_arabic = item.term_arabic || word;
  const term_english = item.term_english || translation.en;
  const definition_english = item.definition_english || definition;

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      {image_url && (
        <div className="relative h-48 w-full">
          <Image
            src={image_url}
            alt={`Image for ${term_english}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex flex-col items-start gap-1">
          <CardTitle
            className="w-full text-start text-3xl font-bold font-arabic"
            dir="rtl"
          >
            {term_arabic}
          </CardTitle>
          <CardDescription className="w-full text-start text-lg">
            {term_english}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {/* Audio Player would be here if it existed */}
        {/* {pronunciation_audio_url && <AudioPlayer src={pronunciation_audio_url} />} */}

        {definition_english && (
          <div>
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              Definition
            </h3>
            <p className="text-start text-base">{definition_english}</p>
          </div>
        )}

        {definition_arabic && (
          <div>
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              Definition (Arabic)
            </h3>
            <p className="text-start text-base font-arabic" dir="rtl">
              {definition_arabic}
            </p>
          </div>
        )}

        {plural && (
          <div>
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              Plural
            </h3>
            <p className="text-start text-base font-arabic" dir="rtl">
              {plural}
            </p>
          </div>
        )}

        {examples && examples.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">
              Examples
            </h3>
            <div className="space-y-3">
              {examples.map((example, index) => (
                <ExampleSentence
                  key={index}
                  sentence_arabic={example.arabic}
                  sentence_english={example.english}
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
      {(type || tags?.length > 0) && (
        <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
          {type && <Badge variant="secondary">{type}</Badge>}
          {tags?.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export default VocabularyCard;