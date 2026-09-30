async function getWikiImage(title) {
  const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=1000`);
  const data = await res.json();
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  console.log(pages[pageId].thumbnail?.source || 'No image');
}

async function run() {
  await getWikiImage('Al-Aqsa_Mosque');
  await getWikiImage('Kaaba');
}

run();
