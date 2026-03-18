import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// The user requested: "Avoid neon gradients, sci-fi robot graphics, or generic AI visuals."
// Let's remove the remaining gradient text if any
content = content.replace(/bg-gradient-to-r from-\[\#2563EB\] to-blue-400 bg-clip-text text-transparent/g, 'text-blue-600');
content = content.replace(/bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent/g, 'text-blue-600');

// Let's make sure the text is truly readable and not too light
content = content.replace(/text-gray-400/g, 'text-gray-500');

// Fix the "System Active" dots to be just a solid color, no pulse
content = content.replace(/animate-pulse/g, '');

fs.writeFileSync('src/App.tsx', content);
