var mount = require('choo/mount')
var html = require('choo/html')
var css = require('sheetify')
var log = require('choo-log')
var choo = require('choo')

;css('tachyons') // I wish dependency-check would detect these :(
;css`
  body {
    color: #293648;
    font-family: 'Source Sans Pro', 'Helvetica Neue', 'Lucida Grande', Arial, sans-serif;
  }
`

var app = choo()
app.use(log())

app.router(['/', mainView])

mount('body', app.start())

function mainView () {
  return html`
    <body class="bg-black white b pb4">
      <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet" type="text/css">
      ${Content()}
      ${Download()}
      ${Footer()}
    </body>
  `
}

function Content () {
  return html`
    <section class="flex justify-center f3 f2-ns">
      <div class="cf mt4 mt5-ns mh4 mh0-l mw7 w-100">
        <p class="fl">
          Dat Desktop
        </p>
        <p class="fr mw6 pl4-ns">
          Share files from your computer to anywhere on the planet, securely and
          fast.
        </p>
      </div>
    </section>
  `
}

function Download () {
  return html`
    <section class="flex flex-column flex-row-ns justify-between f5 f3-ns mt4 mt6-ns ph4 ph5-l mw8">
      <a class="white no-underline link lh-copy mt1" href="#">Download for MacOS</a>
      <a class="white no-underline link lh-copy mt1" href="#">Download for Windows (soon)</a>
      <a class="white no-underline link lh-copy mt1" href="#">Download for Linux (soon)</a>
    </section>
  `
}

function Footer () {
  return html`
    <section class="flex justify-center f3 f2-ns">
      <div class="cf mt5 mt6-ns mh4 mh0-l mw7 w-100">
        <p class="fl">
          Built by
          <a href="https://datproject.org" class="white no-underline">
            The Dat Project
          </a>
        </p>
      </div>
    </section>
  `
}
