import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix the blue blur in KnowledgePage
content = content.replace(/bg-blue-50 rounded-none blur-3xl -mr-32 -mt-32/g, 'bg-blue-100 rounded-none blur-3xl -mr-32 -mt-32 opacity-50');

// Fix the "Why This Matters" box to be slightly more prominent but not overwhelming
content = content.replace(/p-8 border border-\[\#2563EB\]\/20 bg-blue-50 rounded-none/g, 'p-8 border border-blue-200 bg-blue-50/50 rounded-none');

// Make the text in "Why This Matters" darker for readability
content = content.replace(/text-xl text-gray-600 leading-relaxed mb-4/g, 'text-xl text-gray-700 leading-relaxed mb-4');

// Fix the "Admissions Open" badge
content = content.replace(/bg-blue-50 border border-\[\#2563EB\]\/20/g, 'bg-blue-50 border border-blue-200');

// Remove the text-white/10 that was replaced with bg-blue-50 but might still have text-white
// It seems we already replaced it, but let's make sure the icons inside have good contrast
// The icons are text-blue-600, which is good.

// Let's check the LaunchEvent section, it was bg-blue-600 text-white
// It should probably stay that way for impact, but let's make sure the text is readable
// We need to be careful not to replace all text-gray-900 mb-6, only the one in LaunchEvent
// Let's use a more specific regex or just leave it if it's already white or blue-100.
// Wait, LaunchEvent has: <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">Global Launch Event</h2>
// It should be text-white since the background is bg-blue-600
content = content.replace(/<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">Global Launch Event<\/h2>/g, '<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-white mb-6">Global Launch Event</h2>');

fs.writeFileSync('src/App.tsx', content);
