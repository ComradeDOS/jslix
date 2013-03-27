#!/usr/bin/env bash
if [ ! -d "libs" ]; then
    mkdir libs
fi
curl -L http://code.jquery.com/jquery-1.9.1.js > libs/jquery.js
curl -L https://github.com/millermedeiros/js-signals/raw/master/dist/signals.js > libs/signals.js
curl -L https://crypto-js.googlecode.com/files/CryptoJS%20v3.1.2.zip > tmp.zip && unzip tmp.zip -d libs/cryptojs && rm tmp.zip
