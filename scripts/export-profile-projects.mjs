import fs from 'node:fs';
const projects=JSON.parse(fs.readFileSync('src/data/projects.json','utf8'));
for(const p of projects)console.log(`**[${p.title}](${p.github})** — ${p.summary}\n\n${p.status}. ${p.tags.join(' · ')}. ${p.demo?`[Live demo](${p.demo}) · `:''}[Design and evidence](${p.documentation})\n`);
