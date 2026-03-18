import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix text-white/5 inside bg-blue-600
content = content.replace(/bg-blue-600 text-white\/5/g, 'bg-blue-50');

// Fix text-white/10 inside bg-blue-600
content = content.replace(/bg-blue-600 text-white\/10/g, 'bg-blue-50');

// Fix text-white/20 inside bg-blue-600
content = content.replace(/bg-blue-600 text-white\/20/g, 'bg-blue-100');

// Fix bg-blue-600 text-white where it's used as a small dot or icon background but has text-white unnecessarily
content = content.replace(/w-1\.5 h-1\.5 bg-blue-600 text-white rounded-none/g, 'w-1.5 h-1.5 bg-blue-600 rounded-none');
content = content.replace(/w-2 h-2 rounded-none bg-blue-600 text-white/g, 'w-2 h-2 bg-blue-600 rounded-none');
content = content.replace(/w-2 h-2 bg-blue-600 text-white rounded-none/g, 'w-2 h-2 bg-blue-600 rounded-none');

// Fix the "System Status" dot
content = content.replace(/w-1\.5 h-1\.5 rounded-none bg-blue-600 text-white animate-pulse/g, 'w-1.5 h-1.5 bg-blue-600 rounded-none animate-pulse');

// Fix the "Admissions Open" dot
content = content.replace(/w-2 h-2 rounded-none bg-blue-600 text-white animate-pulse/g, 'w-2 h-2 bg-blue-600 rounded-none animate-pulse');

// Fix the "Global Research Initiative" dot
content = content.replace(/w-2 h-2 rounded-none bg-blue-600 text-white animate-pulse/g, 'w-2 h-2 bg-blue-600 rounded-none animate-pulse');

// Fix the "System Active" dots
content = content.replace(/w-1\.5 h-1\.5 rounded-none bg-blue-600 text-white mt-2\.5 flex-shrink-0/g, 'w-1.5 h-1.5 bg-blue-600 rounded-none mt-2.5 flex-shrink-0');

// Fix the "Active Agents" dots
content = content.replace(/w-2 h-2 rounded-none bg-blue-600 text-white/g, 'w-2 h-2 bg-blue-600 rounded-none');

// Ensure buttons with bg-blue-600 have text-white
content = content.replace(/bg-blue-600 text-white hover:bg-blue-700/g, 'bg-blue-600 text-white hover:bg-blue-700');

fs.writeFileSync('src/App.tsx', content);
