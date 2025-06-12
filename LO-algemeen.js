function showContent(id) {
  // Verberg alle content-divs
  const contents = document.querySelectorAll('.content > div');
  contents.forEach(div => div.classList.add('hidden'));

  // Toon de geselecteerde
  document.getElementById(id).classList.remove('hidden');

  // Verwijder 'selected' van alle navigatielinks
  const links = document.querySelectorAll('.Leernav a');
  links.forEach(link => link.classList.remove('selected'));

  // Voeg 'selected' toe aan de geklikte link
  const clickedLink = Array.from(links).find(link => link.getAttribute('onclick')?.includes(id));
  if (clickedLink) {
    clickedLink.classList.add('selected');
  }
}