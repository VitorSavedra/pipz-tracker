export default class Pipz {

    static track(name, properties, remoteId = null) {
        console.log('entrou no evento');

        // let userId;

        // if (localStorage.getItem('pipz_user_traits') !== null) {
        //     json = JSON.parse(localStorage.getItem('pipz_user_traits'));
        //     if (json.userId) {
        //         userId = json.userId;
        //     }
        // }

        return fetch('https://app.pipz.io/v1/event/', {
            method: 'POST',
            body: JSON.stringify({
                'properties': properties,
                'event': name,
                'type': 'track',
                'writeKey': process.env.REACT_APP_PIPZ_API_KEY || process.env.PIPZ_API_KEY,
                'userId': remoteId
                // 'userId': userId ? userId : remoteId
            })
        });
    }

    static identify(remoteId, data) {
        console.log('entrou no identify');
        
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
                localStorage.setItem('pipz_user_traits', obj) 
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