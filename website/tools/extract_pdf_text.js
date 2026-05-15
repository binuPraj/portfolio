const fs = require('fs');
const path = require('path');
const buf = fs.readFileSync(path.join(__dirname, '..', '..', 'cv_pdf', 'resume.pdf'));
const s = buf.toString('latin1');
const matches = s.match(/[A-Za-z0-9@._+-]{4,}/g) || [];
const freq = {};
for (const m of matches) freq[m] = (freq[m] || 0) + 1;
const arr = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,200);
console.log(arr.map(x=>x.join(': ')).join('\n'));
