function downloadLetter() {
  const content = document.querySelector('.message').innerText;
  const title = document.querySelector('.title').innerText;
  const blob = new Blob([title + "\n\n" + content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = "apology_letter.txt";
  link.click();
}
