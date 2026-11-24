#!/bin/sh
cat head.html lib.js data.js data2.js data3.js app.js > index.html && echo '</script></body></html>' >> index.html
