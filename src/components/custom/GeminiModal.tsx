import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface GeminiModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  loading: boolean;
  content: string;
}

const GeminiModal = ({ isOpen, onClose, title, loading, content }: GeminiModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-amber-50 border-none max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-emerald-700 arabic-text mb-4">
            {title}
          </DialogTitle>
          <DialogClose className="absolute top-2 left-2 text-emerald-700 hover:text-emerald-800" />
        </DialogHeader>

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div
            className="text-neutral-700 space-y-3 prose"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GeminiModal;
