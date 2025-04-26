import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="w-24 h-24 relative mb-8">
        <div className="w-full h-full rounded-full border-4 border-neutral-200"></div>
        <div className="w-full h-full rounded-full border-4 border-t-[var(--primary)] absolute top-0 left-0 animate-spin"></div>
      </div>
      <h2 className="text-2xl font-bold text-neutral-800">
        <span className="text-[var(--primary)]">Pratik</span> Kadiya
      </h2>
      <p className="text-neutral-500 mt-2">Loading amazing content...</p>
    </div>
  );
};

export default Loader;