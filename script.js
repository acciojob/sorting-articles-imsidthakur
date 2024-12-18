const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

const stripArticles = (name) => name.replace(/^(a |an |the )/i, '').trim();

const sortedBands = bands.sort((a, b) => stripArticles(a).localeCompare(stripArticles(b)));

const ul = document.getElementById('bands');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
