module.exports = (html = '', data = '') => {

  return (
    '<html>' +
      '<head>' +
        '<meta charset="utf-8">' +
        '<link rel="stylesheet" type="text/css" href="/index.css">' +
        '<title>Vqua - virtual dom library</title>' +
      '</head>' +
      '<body>' +

        '<!-- Yandex.Metrika counter -->' +
        '<script type="text/javascript" >' +
            '(function (d, w, c) {' +
                '(w[c] = w[c] || []).push(function() {' +
                    'try {' +
                        'w.yaCounter46169877 = new Ya.Metrika({' +
                            'id:46169877,' +
                            'clickmap:true,' +
                            'trackLinks:true,' +
                            'accurateTrackBounce:true' +
                        '});' +
                    '} catch(e) { }' +
                '});' +
                'var n = d.getElementsByTagName("script")[0],' +
                    's = d.createElement("script"),' +
                    'f = function () { n.parentNode.insertBefore(s, n); };' +
                's.type = "text/javascript";' +
                's.async = true;' +
                's.src = "https://mc.yandex.ru/metrika/watch.js";' +
                'if (w.opera == "[object Opera]") {' +
                    'd.addEventListener("DOMContentLoaded", f, false);' +
                '} else { f(); }' +
            '})(document, window, "yandex_metrika_callbacks");' +
        '</script>' +
        '<noscript><div><img src="https://mc.yandex.ru/watch/46169877" style="position:absolute; left:-9999px;" alt="" /></div></noscript>' +
        '<!-- /Yandex.Metrika counter -->' +

        '<div id="app">' +
          html +
        '</div>' +
        '<script id="app-cache" type="application/json">' +
          JSON.stringify(data) +
        '</script>' +
        '<script src="/index.js" type="text/javascript"></script>' +
      '</body>' +
    '</html>'
  )
}
