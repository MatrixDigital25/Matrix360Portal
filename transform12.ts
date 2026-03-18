import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Remove the hover gradients from the philosophy/system clarity boxes
content = content.replace(/<div className="absolute inset-0 bg-gradient-to-r from-\[\#2563EB\]\/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" \/>/g, '');

// Fix the timeline gradient to be a solid line
content = content.replace(/bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent/g, 'bg-gray-200');

// Fix the operating framework gradient
content = content.replace(/<div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-transparent z-10" \/>/g, '');

fs.writeFileSync('src/App.tsx', content);
