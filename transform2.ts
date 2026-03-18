import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Typography and Spacing Polish
content = content.replace(/text-4xl md:text-5xl/g, 'text-5xl md:text-6xl');
content = content.replace(/text-3xl md:text-4xl/g, 'text-4xl md:text-5xl');
content = content.replace(/text-2xl md:text-3xl/g, 'text-3xl md:text-4xl');

// Increase whitespace
content = content.replace(/py-24/g, 'py-32');
content = content.replace(/pt-32 pb-24/g, 'pt-40 pb-32');
content = content.replace(/pt-32 pb-32/g, 'pt-40 pb-40');
content = content.replace(/space-y-24/g, 'space-y-32');
content = content.replace(/space-y-16/g, 'space-y-24');
content = content.replace(/gap-16/g, 'gap-24');
content = content.replace(/mb-16/g, 'mb-24');

// Grid alignment and modular blocks
// Make sure panels have a distinct but subtle border
content = content.replace(/border-gray-200 bg-gray-50 rounded-sm/g, 'border-gray-200 bg-white shadow-sm rounded-none');
content = content.replace(/bg-gray-50 border border-gray-200 p-8 rounded-sm/g, 'bg-white border border-gray-200 p-10 shadow-sm rounded-none');
content = content.replace(/bg-white border border-gray-100 p-8 rounded-sm/g, 'bg-white border border-gray-200 p-10 shadow-sm rounded-none');

// Remove rounded corners for a more structural/institutional feel
content = content.replace(/rounded-sm/g, 'rounded-none');
content = content.replace(/rounded-lg/g, 'rounded-none');
content = content.replace(/rounded-xl/g, 'rounded-none');
content = content.replace(/rounded-2xl/g, 'rounded-none');
content = content.replace(/rounded-full/g, 'rounded-none'); // Keep this for buttons if needed, but let's try sharp corners

// Fix specific rounded-full that might be needed for icons/indicators
content = content.replace(/w-2 h-2 rounded-none bg-yellow-500/g, 'w-2 h-2 bg-yellow-500');
content = content.replace(/w-2 h-2 rounded-none bg-blue-500/g, 'w-2 h-2 bg-blue-500');
content = content.replace(/w-2 h-2 rounded-none bg-purple-500/g, 'w-2 h-2 bg-purple-500');
content = content.replace(/w-2 h-2 rounded-none bg-green-500/g, 'w-2 h-2 bg-green-500');

// Interaction design: subtle motion and hover reveals
content = content.replace(/hover:border-blue-300/g, 'hover:border-gray-400 hover:shadow-md transition-all duration-300');
content = content.replace(/hover:border-gray-300/g, 'hover:border-gray-400 hover:shadow-md transition-all duration-300');
content = content.replace(/transition-colors/g, 'transition-all duration-300');

// Credibility signals: Typography tweaks
content = content.replace(/font-sans/g, 'font-sans tracking-tight');
content = content.replace(/tracking-widest uppercase/g, 'tracking-[0.2em] uppercase text-xs font-semibold');

fs.writeFileSync('src/App.tsx', content);
