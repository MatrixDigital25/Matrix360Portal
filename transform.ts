import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Colors
content = content.replace(/bg-\[\#0B132B\]/g, 'bg-white');
content = content.replace(/bg-\[\#111827\]/g, 'bg-gray-50');
content = content.replace(/border-white\/10/g, 'border-gray-200');
content = content.replace(/border-white\/5/g, 'border-gray-100');
content = content.replace(/border-white\/20/g, 'border-gray-300');

// Text colors (need to be careful not to replace text-white inside buttons that are now blue)
// Actually, let's just replace text-white with text-gray-900 globally, then fix buttons.
content = content.replace(/text-white/g, 'text-gray-900');

// Let's use a temporary token for text-gray-400
content = content.replace(/text-gray-400/g, 'TEMP_GRAY_500');
content = content.replace(/text-gray-300/g, 'TEMP_GRAY_600');
content = content.replace(/text-gray-500/g, 'TEMP_GRAY_400');
content = content.replace(/TEMP_GRAY_500/g, 'text-gray-500');
content = content.replace(/TEMP_GRAY_600/g, 'text-gray-600');
content = content.replace(/TEMP_GRAY_400/g, 'text-gray-400');

// Accent color
content = content.replace(/text-\[\#2563EB\]/g, 'text-blue-600');
content = content.replace(/bg-\[\#2563EB\]/g, 'bg-blue-600 text-white'); // Add text-white back to buttons
content = content.replace(/bg-\[\#2563EB\]\/10/g, 'bg-blue-50');
content = content.replace(/bg-\[\#2563EB\]\/20/g, 'bg-blue-100');
content = content.replace(/hover:bg-blue-600/g, 'hover:bg-blue-700');
content = content.replace(/hover:border-\[\#2563EB\]\/50/g, 'hover:border-blue-300');
content = content.replace(/selection:bg-\[\#2563EB\]\/30/g, 'selection:bg-blue-100');

// Gradients
content = content.replace(/from-\[\#0B132B\]/g, 'from-white');
content = content.replace(/to-\[\#111827\]/g, 'to-gray-50');
content = content.replace(/from-\[\#111827\]/g, 'from-gray-50');
content = content.replace(/to-\[\#0B132B\]/g, 'to-white');
content = content.replace(/from-\[\#2563EB\]\/20/g, 'from-blue-50');

// Fix text-gray-900 inside bg-blue-600 text-white
content = content.replace(/bg-blue-600 text-white text-gray-900/g, 'bg-blue-600 text-white');
content = content.replace(/text-gray-900 transition-colors font-medium mt-8 rounded-sm/g, 'text-white transition-colors font-medium mt-8 rounded-sm');

// Fix specific button text colors
content = content.replace(/bg-blue-600 text-white hover:bg-blue-700 text-gray-900/g, 'bg-blue-600 text-white hover:bg-blue-700');

// Fix text-gray-900 in other buttons
content = content.replace(/bg-blue-600 text-white hover:bg-blue-700 transition-colors group rounded-sm font-medium/g, 'bg-blue-600 text-white hover:bg-blue-700 transition-colors group rounded-sm font-medium');

// Fix group-hover:text-white to group-hover:text-gray-900
content = content.replace(/group-hover:text-white/g, 'group-hover:text-gray-900');

fs.writeFileSync('src/App.tsx', content);
