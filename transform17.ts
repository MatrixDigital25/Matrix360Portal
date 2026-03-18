import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// The user wants a very clean, professional look.
// Let's replace the blue buttons with black/dark grey buttons to make it more "intellectual" and less "startup"
content = content.replace(/bg-blue-600 text-white hover:bg-blue-700/g, 'bg-gray-900 text-white hover:bg-gray-800');

// Also update the Launch Event section to be dark instead of bright blue
content = content.replace(/bg-blue-600 text-white relative overflow-hidden/g, 'bg-gray-900 text-white relative overflow-hidden');
content = content.replace(/text-blue-100 mb-12 font-light/g, 'text-gray-300 mb-12 font-light');
content = content.replace(/bg-white text-blue-600 hover:bg-gray-50/g, 'bg-white text-gray-900 hover:bg-gray-50');

fs.writeFileSync('src/App.tsx', content);
