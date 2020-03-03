document.head.innerHTML += "<style id='theme'></style>"
let themeElem = document.getElementById('theme')

let theming = {//[dark,light]
  bg: ['#333', '#ccc'],
  bga: ['#222', '#eee'],
  c: ['#eee', '#111'],
  ca: ['#ccc', '#333'],
  'accent-1': ['hsl(140, 20%, 40%)', 'hsl(140, 20%, 60%)'],
  accent0: ['hsl(140, 20%, 50%)', 'hsl(140, 20%, 50%)'],
  navhover: ['hsl(140, 50%, 80%)', 'hsl(140, 50%, 20%)'],
  link: ['hsl(180,100%,45%)', 'hsl(240,100%,50%)'],
  'scroll-bg': ['#000', '#fff'],
  'scroll-thumb': ['hsl(240, 5%, 26%)', '#babac0'],
}

function theme(dark) {
  themeElem.innerHTML = `body{`
  let index = dark == true ? 0 : 1;
  for (key in theming) {
    themeElem.innerHTML += `--${key}:${theming[key][index]};\n`
  }
  themeElem.innerHTML += `}`
}


let darkTheme = true
theme(darkTheme)
