import './AdModel'

var SponsorModel = {
    sponsors_id: streamer_id,
    sponsor_name: streamer_name,
    sponsor_cpf: streamer_url,
    sponsor_cnpj: streamer_cpf,
    sponsor_email: streamer_cnpj,
    sponsor_password: streamer_email,
    ad = new AdModel(),


    get_id: function () {
        return this.sponsors_id;
    },
    get_name: function () {
        return this.sponsor_name;
    },
    get_cpf: function () {
        return this.sponsor_cpf;
    },
    get_cnpj: function () {
        return this.sponsor_cnpj;
    },
    get_email: function () {
        return this.sponsor_email;
    },
    get_password: function () {
        return this.sponsor_password;
    },
    get_ad: function () {
        return this.ad;
    },
    set_id: function (_sponsors_id) {
        this.sponsors_id = _sponsors_id;
    },
    set_name: function (_sponsor_name) {
         this.sponsor_name =_sponsor_name;
    },
    set_url: function (_sponsor_cpf) {
         this.sponsor_cpf = _sponsor_cpf;
    },
    set_cpf: function (_sponsor_cnpj) {
         this.sponsor_cnpj = _sponsor_cnpj;
    },
    set_cnpj: function (_sponsor_email) {
         this.sponsor_email = _sponsor_email;
    },
    set_email: function (_sponsor_password) {
         this.sponsor_password = _sponsor_password;
    },
    set_ad: function (_ad) {
         this.ad = _ad;
    }
}

