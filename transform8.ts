import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix text-gray-400 to text-gray-500 for better readability
content = content.replace(/text-gray-400/g, 'text-gray-500');

// Fix text-gray-300 to text-gray-500
content = content.replace(/text-gray-300/g, 'text-gray-500');

// Fix text-slate-300 to text-gray-500
content = content.replace(/text-slate-300/g, 'text-gray-500');

// Fix the "System Online" badge
content = content.replace(/text-gray-500 uppercase tracking-widest hidden sm:block/g, 'text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold hidden sm:block');

// Fix the "System Pathways" text
content = content.replace(/text-gray-500 uppercase tracking-widest mb-4/g, 'text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4');

// Fix the "Active Agents" text
content = content.replace(/text-gray-500 uppercase tracking-widest mb-6/g, 'text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold mb-6');

// Fix the "System Status" text
content = content.replace(/text-gray-500 uppercase tracking-widest/g, 'text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold');

// Fix the "Intent" text
content = content.replace(/text-blue-600 uppercase tracking-widest/g, 'text-blue-600 uppercase tracking-[0.2em] text-xs font-semibold');

// Fix the "Matrix360" logo text in Nav
content = content.replace(/text-gray-900 uppercase tracking-widest hidden sm:block/g, 'text-gray-900 uppercase tracking-[0.2em] text-sm font-semibold hidden sm:block');

// Fix the "Volume I" quote footer
content = content.replace(/text-gray-500 uppercase tracking-widest">— Hybrid Intelligence, Volume I/g, 'text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold">— Hybrid Intelligence, Volume I');

fs.writeFileSync('src/App.tsx', content);
