module.exports = profileConstants = {
    Profiles: {
        'anonymous': {
            'streamer': {
                'post': {
                    'all': true,
                }
            },
            'sponsor': {
                'post': {
                    'all': true,
                }
            },
            'login': {
                'get': {
                    'all': true
                }
            },
        },
        'administrator': {
            'streamer':
            {
                'get':
                {
                    'all': true,
                    'id': true,
                },
                'put':
                {
                    'id': true
                },
                'delete': {
                    'id': true
                }
            },
            'sponsor': {
                'get':
                {
                    'all': true,
                    'id': true,
                },
                'put':
                {
                    'id': true
                },
                'delete': {
                    'id': true
                }
            },
            'advertisement': {
                'post': { 'all': true },
                'get': { 'all': true, 'id': true },
                'delete': { 'id': true },
                'put': { 'id': true }
            }
        },
        'streamer': {
            'streamer':
            {
                'get':
                {
                    'id': true,
                },
                'put':
                {
                    'id': true
                }
            },
            'advertisement': {
                'get': { 'id': true },
            }
        },
        'sponsor': {
            'sponsor': {
                'get':
                {
                    'id': true,
                },
                'put':
                {
                    'id': true
                }
            },
            'advertisement': {
                'post':{'id':true},
                'get':{'id':true},
                'delete':{'id':true},
                'put':{'id':true}
            }
        }
    }
}