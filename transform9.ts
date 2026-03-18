import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix the footer background and logo
content = content.replace(/bg-white py-12 border-t border-gray-100/g, 'bg-[#FAFAFA] py-12 border-t border-gray-200');
content = content.replace(/w-6 h-6 bg-gray-800 rounded-none flex items-center justify-center/g, 'w-6 h-6 bg-blue-600 rounded-none flex items-center justify-center');
content = content.replace(/w-2 h-2 bg-gray-500 rounded-none/g, 'w-2 h-2 bg-white rounded-none');
content = content.replace(/text-lg font-semibold tracking-tight text-gray-600">Matrix360/g, 'text-gray-900 uppercase tracking-[0.2em] text-sm font-semibold">Matrix360');

// Fix the "Matrix360" logo text in Nav again, it might have been duplicated
content = content.replace(/text-lg font-semibold tracking-tight text-gray-900 uppercase tracking-\[0\.2em\] text-sm font-semibold hidden sm:block/g, 'text-gray-900 uppercase tracking-[0.2em] text-sm font-semibold hidden sm:block');

fs.writeFileSync('src/App.tsx', content);
