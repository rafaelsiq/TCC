var http = require('http')

describe('#AdvertisementsController', function(){
    it('#Acessa a URL', function(waitfunction){
        var configuracoes = {
            hostname:'localhost',
            port:8080,
            path:'/ad',
            header:
            {'Accept': 'application/json'}
        };
        http.get(configuracoes, function(res){
            if(res.statusCode == 200)
                console.log('status OK')
            if(res.headers['content-type'] == 'application/json; charset=utf-8')
                console.log('content-type OK')
        waitfunction();
        });
    });
});