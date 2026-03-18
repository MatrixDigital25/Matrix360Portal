import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix the remaining blue dots to be grey
content = content.replace(/<div className="w-1\.5 h-1\.5 bg-blue-600 rounded-none" \/>/g, '<div className="w-1.5 h-1.5 bg-gray-400 rounded-none" />');
content = content.replace(/<div className="w-2 h-2 bg-blue-600 rounded-none mr-4" \/>/g, '<div className="w-2 h-2 bg-gray-400 rounded-none mr-4" />');

fs.writeFileSync('src/App.tsx', content);
