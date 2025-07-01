"use client";

import { useState } from 'react';
import VocabularyCard from '@/components/custom/VocabularyCard';
import { VocabularyItem } from '@/types/vocabulary';

interface VocabularyListProps {
  items: VocabularyItem[];
}

export default function VocabularyList({ items }: VocabularyListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVocabulary = items.filter(
    (item) =>
      item.translation.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.word.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search vocabulary..."
          className="w-full p-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVocabulary.map((item) => (
          <VocabularyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}