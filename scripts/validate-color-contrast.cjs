// Static color-palette and high-confidence class checks for Moorish Tour.
// This does not replace axe/Lighthouse inspection of fully rendered pages,
// especially photographs, overlays, opacity, conditional classes, and font sizes.
const fs=require('fs');const path=require('path');
function luminance(hex){const rgb=hex.replace('#','').match(/.{2}/g).map(c=>parseInt(c,16)/255).map(c=>c<=0.04045?c/12.92:((c+0.055)/1.055)**2.4);return rgb[0]*0.2126+rgb[1]*0.7152+rgb[2]*0.0722}
function contrast(a,b){const [x,y]=[luminance(a),luminance(b)].sort((a,b)=>b-a);return (x+0.05)/(y+0.05)}
const pairs=[
 ['Amber text / white','#b45309','#ffffff',4.5],
 ['Amber text / cream','#b45309','#fffaf4',4.5],
 ['White / amber button','#ffffff','#b45309',4.5],
 ['Gray text / white','#4b5563','#ffffff',4.5],
 ['Gray text / cream','#4b5563','#fffaf4',4.5],
 ['Slate text / white','#475569','#ffffff',4.5],
 ['Slate text / cream','#475569','#fffaf4',4.5],
 ['Orange text / white','#c2410c','#ffffff',4.5],
 ['Warm activity labels / cream','#855728','#f2ede4',4.5],
 ['Teal activity labels / white','#236f62','#ffffff',4.5],
 ['Light amber accent / navy hero','#f59e0b','#102043',4.5],
 ['White / booking hover','#ffffff','#9c4700',4.5],
];
let failed=false;for(const [label,fg,bg,target] of pairs){const r=contrast(fg,bg);console.log(`${r.toFixed(2)}:1 ${label}`);if(r+1e-8<target){failed=true;console.error(`FAIL ${label}`)}}
const projectRoot=path.resolve(__dirname,'..');const dirs=['app','Compentents','content'];let checked=0,issues=[];
function scan(folder){for(const e of fs.readdirSync(folder,{withFileTypes:true})){const f=path.join(folder,e.name);if(e.isDirectory())scan(f);else if(/\.(tsx|css)$/.test(f)&& !e.name.startsWith('opengraph-image')){
 checked++;const content=fs.readFileSync(f,'utf8');
 // Known dangerous combinations, without flagging gold text on dark photo overlays.
 for(const [label,re] of [
  ['Light gray placeholder',/placeholder:text-gray-400/g],
  ['White text on low-contrast amber button',/bg-amber-(?:500|600)\s+(?:[^"`]{0,90}\s)?text-white/g],
  ['Uncorrected light brand text',/text-\[#ea7600\]/ig],
 ])if(re.test(content))issues.push(path.relative(projectRoot,f)+': '+label)
}}}
for(const d of dirs)scan(path.join(projectRoot,d));
if(issues.length){failed=true;console.error('Potential contrast risks:\n'+issues.join('\n'))}
console.log(`Static accessibility checks: ${checked} page/component/style files scanned.`);
if(failed)process.exit(1);console.log('Contrast palette and high-confidence checks PASS (runtime Lighthouse still required).');
