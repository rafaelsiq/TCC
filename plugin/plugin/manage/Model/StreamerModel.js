import './AdModel'
var StreamerModel = {
    streamer_id,
    streamer_name,
    streamer_url,
    streamer_cpf,
    streamer_cnpj,
    streamer_email,
    ad = new AdModel(),

    get_id: function () {
        return this.streamer_id;
    },
    get_name: function () {
        return this.streamer_name;
    },
    get_url: function () {
        return this.streamer_url;
    },
    get_cpf: function () {
        return this.streamer_cpf;
    },
    get_cnpj: function () {
        return this.streamer_cnpj;
    },
    get_email: function () {
        return this.streamer_email;
    },
    get_ad: function () {
        return this.ad;
    },
    set_id: function (_streamer_id) {
        this.streamer_id = _streamer_id;
    },
    set_name: function (_streamer_name) {
         this.streamer_name =streamer_name;
    },
    set_url: function (_streamer_url) {
         this.streamer_url = _streamer_url;
    },
    set_cpf: function (_streamer_cpf) {
         this.streamer_cpf = _streamer_cpf;
    },
    set_cnpj: function (_streamer_cnpj) {
         this.streamer_cnpj = _streamer_cnpj;
    },
    set_email: function (_streamer_email) {
         this.streamer_email = _streamer_email;
    },
    set_ad_id: function (_ad) {
         this.ad = _ad;
    }
}

