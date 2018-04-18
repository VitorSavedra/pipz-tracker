function pipzTracker() {
    var a = window.pipz = window.pipz || [];
    if (!a.initialize)
        if (a.invoked) window.console && console.error && console.error('Snippet included twice.');
        else {
            a.invoked = !0;
            a.methods = 'formIdentify pageview reset identify track ready page once off on'.split(' ');
            a.factory = function (c) {
                return function () {
                    var b = Array.prototype.slice.call(arguments);
                    b.unshift(c);
                    a.push(b);
                    return a
                }
            };
            for (var c = 0; c < a.methods.length; c++) {
                var d = a.methods[c];
                a[d] = a.factory(d)
            }
            a.load = function (c) {
                var b = document.createElement('script');
                b.type = 'text/javascript';
                b.async = !0;
                var d = document.getElementsByTagName('script')[0];
                d.parentNode.insertBefore(b, d);
                b.onload = function () {
                    a = window.pipz;
                    a.initialize({
                        'eCentrack.io': {
                            apiKey: c
                        }
                    }, {
                        plan: {
                            track: {}
                        }
                    });
                };
                b.src = 'https://loader.pipz.io/v1/290.01ca8a0f/pipz.min.js'
            };
            a.SNIPPET_VERSION = '4.0.0';
            a.load(process.env.REACT_APP_PIPZ_API_KEY || process.env.PIPZ_API_KEY);
        };
};

pipzTracker();