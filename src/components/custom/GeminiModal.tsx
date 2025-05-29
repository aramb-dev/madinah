import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface GeminiModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  loading: boolean;
  content: string;
}

const GeminiModal = ({ isOpen, onClose, title, loading, content }: GeminiModalProps) => {
  const modalId = `gemini-modal-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="bg-amber-50 border-none max-w-[90vw] sm:max-w-2xl max-h-[80vh] overflow-y-auto" 
        aria-labelledby={`${modalId}-title`}
        aria-describedby={`${modalId}-description`}
      >
        <DialogHeader>
          <DialogTitle 
            id={`${modalId}-title`} 
            className="text-lg sm:text-xl font-bold text-emerald-700 arabic-text mb-2 sm:mb-4 font-arabic"
          >
            {title}
          </DialogTitle>
          <DialogDescription id={`${modalId}-description`} className="sr-only">
            شرح تفاعلي للقواعد من كتاب المدينة
          </DialogDescription>
          <DialogClose className="absolute top-2 left-2 text-emerald-700 hover:text-emerald-800" />
        </DialogHeader>

        {loading ? (
          <div className="flex justify-center items-center py-6 sm:py-8">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div
            className="text-neutral-700 space-y-2 sm:space-y-3 prose prose-sm sm:prose-base max-w-none px-1"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GeminiModal;
