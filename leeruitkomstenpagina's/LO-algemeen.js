function showContent(id) {
    const contents = document.querySelectorAll('.content > div');
    contents.forEach(div => div.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }