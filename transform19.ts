import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// The user wants a very clean, professional look.
// Let's replace the blue logos with black/dark grey to match the new buttons
content = content.replace(/bg-blue-600 text-white flex items-center justify-center rounded-none/g, 'bg-gray-900 text-white flex items-center justify-center rounded-none');
content = content.replace(/bg-blue-600 rounded-none flex items-center justify-center/g, 'bg-gray-900 rounded-none flex items-center justify-center');

// And the system status dot can be green to indicate "Active"
content = content.replace(/<span className="flex items-center gap-2 text-xs text-blue-600"><span className="w-1\.5 h-1\.5 bg-blue-600 rounded-none" \/> Active<\/span>/g, '<span className="flex items-center gap-2 text-xs text-gray-900"><span className="w-1.5 h-1.5 bg-green-500 rounded-none" /> Active</span>');

fs.writeFileSync('src/App.tsx', content);
