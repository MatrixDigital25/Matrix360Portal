import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix bg-white/5 to bg-gray-50 for hover states and badges
content = content.replace(/bg-white\/5/g, 'bg-gray-50');
content = content.replace(/hover:bg-white\/10/g, 'hover:bg-gray-100');

// Fix the "Locked" badge
content = content.replace(/bg-gray-50 text-gray-400 rounded-none tracking-\[0\.2em\] uppercase text-xs font-semibold">Locked/g, 'bg-gray-100 text-gray-500 rounded-none tracking-[0.2em] uppercase text-xs font-semibold">Locked');

// Fix the "System Pathways" hover
content = content.replace(/hover:bg-gray-50/g, 'hover:bg-gray-50');

// Ensure the "Global Research Initiative" badge looks right
content = content.replace(/bg-gray-50 border border-gray-200 text-sm text-gray-600 mb-8/g, 'bg-white border border-gray-200 text-sm text-gray-600 mb-8 shadow-sm');

// Fix the "Read the Manifesto" button
content = content.replace(/bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900/g, 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 shadow-sm');

// Fix the "Read our Governance Principles" button
content = content.replace(/bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-900/g, 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 shadow-sm');

fs.writeFileSync('src/App.tsx', content);
