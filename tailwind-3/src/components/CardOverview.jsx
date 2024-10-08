import React from 'react';

export const CardOverview = () => {
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="/cart">Open cart &rarr </a>
    </div>
  );
};
