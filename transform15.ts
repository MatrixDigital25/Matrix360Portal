import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// The user wants a very clean, professional look.
// Let's replace the blue dots in lists with a more subtle grey dash or dot.
content = content.replace(/<div className="w-1\.5 h-1\.5 bg-blue-600 rounded-none mt-2\.5" \/>/g, '<div className="w-1.5 h-1.5 bg-gray-400 rounded-none mt-2.5" />');
content = content.replace(/<div className="w-1\.5 h-1\.5 bg-blue-600 rounded-none mt-2\.5 flex-shrink-0" \/>/g, '<div className="w-1.5 h-1.5 bg-gray-400 rounded-none mt-2.5 flex-shrink-0" />');
content = content.replace(/<div className="w-2 h-2 bg-blue-600 rounded-none" \/>/g, '<div className="w-2 h-2 bg-gray-400 rounded-none" />');
content = content.replace(/<span className="w-2 h-2 bg-blue-600 rounded-none" \/>/g, '<span className="w-2 h-2 bg-gray-400 rounded-none" />');

// Except for the system status dot which should remain blue
content = content.replace(/<span className="flex items-center gap-2 text-xs text-blue-600"><span className="w-1\.5 h-1\.5 bg-gray-400 rounded-none" \/> Active<\/span>/g, '<span className="flex items-center gap-2 text-xs text-blue-600"><span className="w-1.5 h-1.5 bg-blue-600 rounded-none" /> Active</span>');

// And the footer logo dot which should be white
content = content.replace(/<div className="w-6 h-6 bg-gray-400 rounded-none flex items-center justify-center">\n            <div className="w-2 h-2 bg-white rounded-none" \/>\n          <\/div>/g, '<div className="w-6 h-6 bg-blue-600 rounded-none flex items-center justify-center">\n            <div className="w-2 h-2 bg-white rounded-none" />\n          </div>');

fs.writeFileSync('src/App.tsx', content);
