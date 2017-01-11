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
    <section class="flex justify-center f2">
      <div class="cf mt5 mw7 w-100">
        <p class="fl">
          Dat Desktop
        </p>
        <p class="fr mw6 pl4">
          Share files from your computer to anywhere on the planet, securely and
          fast.
        </p>
      </div>
    </section>
  `
}

function Download () {
  return html`
    <section class="flex justify-between f2 f3-ns mt6 ph4 ph5-l mw8">
      <a class="white no-underline link" href="#">Download for MacOS</a>
      <a class="white no-underline link" href="#">Download for Windows (soon)</a>
      <a class="white no-underline link" href="#">Download for Linux (soon)</a>
    </section>
  `
}

function Footer () {
  return html`
    <section class="flex justify-center f2">
      <div class="cf mt6 mw7 w-100">
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
