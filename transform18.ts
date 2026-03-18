import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix the download button on the Knowledge page
content = content.replace(/bg-blue-600 text-white rounded-none font-medium hover:bg-blue-700/g, 'bg-gray-900 text-white rounded-none font-medium hover:bg-gray-800');

fs.writeFileSync('src/App.tsx', content);
