import * as fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix duplicate transition classes
content = content.replace(/transition-all duration-300 transition-all duration-300/g, 'transition-all duration-300');

fs.writeFileSync('src/App.tsx', content);
