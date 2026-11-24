import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const projects=JSON.parse(fs.readFileSync('src/data/projects.json','utf8'));
assert.equal(projects.length,5);
assert.equal(new Set(projects.map(p=>p.id)).size,projects.length);
for(const p of projects){
  for(const field of ['id','title','category','problem','summary','status','github','documentation','lastVerified','scope']) assert.ok(p[field],`${p.id}: ${field}`);
  assert.ok(fs.existsSync(path.join('public',p.image)),p.image);
  for(const url of [p.github,p.documentation,p.demo].filter(Boolean))assert.equal(new URL(url).protocol,'https:');
  assert.ok(!JSON.stringify(p).includes('ai-prep-coach'),'private project must remain absent');
}
assert.ok(projects.find(p=>p.id==='careflow-ai').scope.includes('Not clinically validated'));
assert.ok(projects.find(p=>p.id==='knowdoc-ai').scope.includes('does not offer hybrid'));
assert.ok(projects.find(p=>p.id==='collabdocs').scope.includes('No secure authentication'));
const publicSource=fs.readFileSync('src/data/portfolio.ts','utf8');
assert.ok(publicSource.includes('saisakethnagavalli@gmail.com'));
assert.ok(publicSource.includes('Delray Beach, Florida'));
assert.ok(!publicSource.includes('phoneHref'));
console.log('Content verification passed: 5 projects, source links, assets and scope boundaries.');
