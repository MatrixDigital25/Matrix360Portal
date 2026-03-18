import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Ensure all text-gray-500 is readable, maybe darken slightly to text-gray-600 for better contrast on white
content = content.replace(/text-gray-500/g, 'text-gray-600');

// Fix the hero section gradient to be more subtle and professional
content = content.replace(/bg-\[linear-gradient\(to_right,\#80808012_1px,transparent_1px\),linear-gradient\(to_bottom,\#80808012_1px,transparent_1px\)\]/g, 'bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]');

// Make the blue blur more subtle
content = content.replace(/opacity-20 blur-\[100px\]/g, 'opacity-10 blur-[120px]');

// Fix the footer background
content = content.replace(/bg-white border-t border-gray-100/g, 'bg-[#FAFAFA] border-t border-gray-200');

// Fix the Nav bar background
content = content.replace(/bg-white\/90 backdrop-blur-md border-b border-gray-200/g, 'bg-white/80 backdrop-blur-xl border-b border-gray-200');

// Update the main App container
content = content.replace(/bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900/g, 'bg-white text-gray-900 font-sans tracking-tight selection:bg-blue-100 selection:text-blue-900');

fs.writeFileSync('src/App.tsx', content);
