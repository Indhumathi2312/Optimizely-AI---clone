const fs = require('fs');
const html = fs.readFileSync('public/optimizely_page.html', 'utf-8');

const regex = /<img[^>]+>/g;
let m;
let i = 0;
while ((m = regex.exec(html)) !== null) {
  console.log(`[${i++}] ${m[0]}`);
}
