import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix remaining bg-gray-50 to bg-white for a cleaner look, or keep it if it's a distinct panel
// Let's make panels bg-white with a very subtle border, and the main background bg-white
// Actually, let's keep bg-gray-50 for distinct sections, but make sure it's very subtle.
// Let's change bg-gray-50 to bg-[#FAFAFA] for an even subtler off-white.
content = content.replace(/bg-gray-50/g, 'bg-[#FAFAFA]');

// Fix text-white/10 inside bg-blue-600
content = content.replace(/bg-blue-600 text-white\/10/g, 'bg-blue-50');

// Fix shadow-[0_0_0_8px_#0B132B] to match white background
content = content.replace(/shadow-\[0_0_0_8px_\#0B132B\]/g, 'shadow-[0_0_0_8px_white]');

// Fix text-white/30 in selection
content = content.replace(/selection:bg-blue-600 text-white\/30/g, 'selection:bg-blue-100 selection:text-blue-900');

// Fix the prose-invert which makes text white
content = content.replace(/prose-invert/g, '');

// Fix the white/10 gradient in the timeline
content = content.replace(/via-white\/10/g, 'via-gray-200');

// Fix text-blue-300 to text-blue-600
content = content.replace(/text-blue-300/g, 'text-blue-600');

// Fix bg-white text-[#0B132B] hover:bg-gray-100
content = content.replace(/bg-white text-\[\#0B132B\] hover:bg-gray-100/g, 'bg-gray-900 text-white hover:bg-gray-800');

fs.writeFileSync('src/App.tsx', content);
