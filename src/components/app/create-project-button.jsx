'use client';

import { useState } from 'react';
import CreateProjectModal from './create-project-modal';

export default function CreateProjectButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-green-900 transition-all shadow-lg shadow-green-800/20 active:scale-95"
      >
        <span className="text-xl">+</span>
        New Project
      </button>

      {/* The Modal we built earlier */}
      <CreateProjectModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}