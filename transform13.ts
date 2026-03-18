import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Ensure all buttons have the same clean styling
content = content.replace(/bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 shadow-sm/g, 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 shadow-sm transition-all duration-300');
content = content.replace(/bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 shadow-sm/g, 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 shadow-sm transition-all duration-300');

// Fix the "System Active" dots to be just a solid color, no pulse
content = content.replace(/animate-pulse/g, '');

fs.writeFileSync('src/App.tsx', content);
