import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// The user requested: "Avoid neon gradients, sci-fi robot graphics, or generic AI visuals."
// The current hero section has a blur and pulse that might feel a bit "sci-fi".
// Let's make the hero section even cleaner.
content = content.replace(/<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-\[310px\] w-\[310px\] rounded-none bg-blue-600 opacity-10 blur-\[120px\]" \/>/g, '');
content = content.replace(/<span className="w-2 h-2 bg-blue-600 rounded-none animate-pulse" \/>/g, '<span className="w-2 h-2 bg-blue-600 rounded-none" />');
content = content.replace(/<div className="w-2 h-2 bg-green-500 animate-pulse" \/>/g, '<div className="w-2 h-2 bg-green-500 rounded-none" />');
content = content.replace(/<div className="w-2 h-2 bg-blue-500 animate-pulse" \/>/g, '<div className="w-2 h-2 bg-blue-500 rounded-none" />');
content = content.replace(/<span className="w-1\.5 h-1\.5 bg-blue-600 rounded-none animate-pulse" \/>/g, '<span className="w-1.5 h-1.5 bg-blue-600 rounded-none" />');

// Make sure the main background is truly clean
content = content.replace(/bg-\[linear-gradient\(to_right,\#f0f0f0_1px,transparent_1px\),linear-gradient\(to_bottom,\#f0f0f0_1px,transparent_1px\)\] bg-\[size:24px_24px\]/g, 'bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:48px_48px]');

// Fix the "System Status" dot
content = content.replace(/<span className="w-1\.5 h-1\.5 bg-blue-600 rounded-none animate-pulse" \/>/g, '<span className="w-1.5 h-1.5 bg-blue-600 rounded-none" />');

// Remove the stardust texture from LaunchEvent to make it cleaner
content = content.replace(/<div className="absolute inset-0 bg-\[url\('https:\/\/www\.transparenttextures\.com\/patterns\/stardust\.png'\)\] opacity-20" \/>/g, '');

fs.writeFileSync('src/App.tsx', content);
