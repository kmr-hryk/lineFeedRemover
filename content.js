const bodyText = document.getElementsByTagName('pre')[0]

bodyText.innerHTML = bodyText.innerHTML
  .replace(/\n\n/g, '\r')
  .replace(/\n/g, ' ')
  .replace(/\r/g, '\n\n')
