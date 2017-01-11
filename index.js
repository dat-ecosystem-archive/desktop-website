var mount = require('choo/mount')
var html = require('choo/html')
var css = require('sheetify')
var log = require('choo-log')
var choo = require('choo')
var path = require('path')
var fs = require('fs')

;css('tachyons') // I wish dependency-check would detect these :(
;css`
  .dat-green { color: #24943A }
  .dat-navy { color: #293648 }
  .bg-dat-green { background-color: #24943A }
  .bg-dat-navy { background-color: #293648 }
`

var app = choo()
app.use(log())

app.router(['/', mainView])

mount('body', app.start())

function mainView () {
  return html`
    <body>
      ${Header()}
      ${Headline()}
    </body>
  `
}

function Header () {
  return html`
    <header class="flex flex-column flex-row-ns justify-between pa4 pa5-l mb3 mb5-l">
      <h1 class="f-1 black-70 ma0 lh-body">
        <a class="black-90 link" href="https://datproject.org">dat</a>
        <span class="">
          / desktop
        </span>
      </h1>
      <nav class="flex-ns dn mw5 lh-body mt4 mt0-ns">
        ${Link('blog', 'https://blog.datarchive.com')}
        ${Link('registry', 'https://registry.datarchive.com')}
      </nav>
    </header>
  `

  function Link (name, href) {
    return html`
      <a class="ml2 ml3-ns black link b f5 f4-ns" href=${href}>
        ${name}
      </a>
    `
  }
}

function Headline () {
  return html`
    <section class="flex flex-column flex-row-l justify-between pt0 pb4-m pb5-l mb3 mb5-l">
      <img class="mw6 ph5-l" src="data:image/png;base64,${fs.readFileSync(path.join(__dirname, 'assets/screenshot.png'), 'base64')}">
      <div class="w-100 w-50-l ph4 ph5-l">
        <h2 class="db lh-title f3 b mt0 dat-navy">
          Stream files from your computer to anywhere on the planet, securely and
          fast.
        </h2>
        <div class="db pt3">
          <a class="dn dib-ns ba no-underline br1 black-80 bg-gray-light b inline-flex items-center mr3 mv3 pv2 ph3">
            Windows (Soon)
          </a>
          <a href="/"
            class="ba no-underline br1 black-80 bg-washed-blue grow b inline-flex items-center mr3 mv3 pv2 ph3">
            Download Now (MacOS)
          </a>
          <a class="dn dib-ns ba no-underline br1 black-80 bg-gray-light b inline-flex items-center mr3 mv3 pv2 ph3">
            Linux (Soon)
          </a>
        </div>
      </div>
    </section>
  `
}
