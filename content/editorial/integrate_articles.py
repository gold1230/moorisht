import json, pathlib
root=pathlib.Path(__file__).resolve().parents[2]
posts=json.loads((root/'data/editorial/posts.json').read_text())
blogpath=root/'data/blogs.json'
blogs=json.loads(blogpath.read_text())
for p in posts:
 if any(x['slug']==p['slug'] for x in blogs):
  raise ValueError('duplicate blog '+p['slug'])
 existing_ids=[b['id'] for b in blogs]
 record={
    'id':max(existing_ids)+1,
    'type':'Blog',
    'title':p['title'],
    'slug':p['slug'],
    'image':p['image'],
    'alt':p['imageAlt'],
    'category':p['category'],
    'date':'Oct 20, 2026',
    'dateISO':'2026-10-20',
    'description':p['excerpt'],
    'readTime':p['readTime'],
    'places':p['places'],
    'keywords':p['keywords'],
    'tags':p['places'],
    'featured':False,
    'showOnHome':True,
    'metaTitle':p['metaTitle'],
    'metaDescription':p['metaDescription'],
    'canonical':f"https://moorishtour.com/{p['slug']}/",
    'lastModified':'2026-10-20'
 }
 blogs.append(record)
 routefolder=root/'app'/p['slug']
 routefolder.mkdir(parents=True,exist_ok=False)
 (routefolder/'page.tsx').write_text(f'''import MoroccoEditorialArticle, {{ editorialMetadata }} from "@/content/editorial/MoroccoEditorialArticle";

const slug = "{p['slug']}";
export const metadata = editorialMetadata(slug);
export default function Page() {{
  return <MoroccoEditorialArticle slug={{slug}} />;
}}
''')
blogpath.write_text(json.dumps(blogs,ensure_ascii=False,indent=2)+'\n')
routepath=root/'data/routes.json'
routes=json.loads(routepath.read_text())
for p in posts:
 route={'path':'/'+p['slug'],'kind':'blog'}
 if any(r['path']==route['path'] for r in routes): raise ValueError('duplicate route')
 routes.append(route)
routes.sort(key=lambda r:r['path'])
routepath.write_text(json.dumps(routes,ensure_ascii=False,indent=2)+'\n')
print('updated blogs.json and routes.json; new total:',len(blogs),len(routes))
