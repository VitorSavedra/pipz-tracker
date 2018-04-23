export default class Pipz {

    static track(name, properties, remoteId = null) {

        const COOKIE_NAME = 'pipz_user_id';

        function getCookie(COOKIE_NAME) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + COOKIE_NAME + "=");
            return parts.pop().split(";").shift();
        }
        let cookieUserId = decodeURIComponent(getCookie(COOKIE_NAME)).replace(/"/g, '');

        return fetch('https://app.pipz.io/v1/event/', {
            method: 'POST',
            body: JSON.stringify({
                'properties': properties,
                'event': name,
                'type': 'track',
                'writeKey': process.env.REACT_APP_PIPZ_API_KEY || process.env.PIPZ_API_KEY,
                'userId': cookieUserId ? cookieUserId : remoteId
            })
        });
    }

    static identify(remoteId, data) {

        const COOKIE_NAME = 'pipz_user_id';

        return fetch('https://app.pipz.io/v1/event/', {
                method: 'POST',
                body: JSON.stringify({
                    'traits': data,
                    'type': 'identify',
                    'writeKey': process.env.REACT_APP_PIPZ_API_KEY || process.env.PIPZ_API_KEY,
                    'userId': remoteId
                })
            })
            .then(this._checkStatus)
            .then(res => {
                document.cookie = COOKIE_NAME + '=' + remoteId;
            })
    }

    _checkStatus(res) {
        if (res.status >= 200 && res.status < 300) {
            return res;
        } else {
            let error = new Error(res.statusText);
            error.res = res;
            throw error;
        }
    }
}