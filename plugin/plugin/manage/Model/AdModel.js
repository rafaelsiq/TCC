var AdModel = {
    advertisements_id,
    sponsor_id,
    ad_title,
    ad_total_time,
    ad_content_image,
    ad_content_video,
    ad_content_gif,


    get_id: function () {
        return this.advertisements_id;
    },
    get_sponsor_id: function () {
        return this.sponsor_id;
    },
    get_title: function () {
        return this.ad_title;
    },
    get_total_time: function () {
        return this.ad_total_time;
    },
    get_content_image: function () {
        return this.ad_content_image;
    },
    get_content_video: function () {
        return this.  ad_content_video;
    },
    get_content_gif: function () {
        return this.ad_content_gif;
    },
    set_id: function (_advertisements_id) {
        this.advertisements_id = _advertisements_id;
    },
    set_name: function (_sponsor_id) {
         this.sponsor_id =_sponsor_id;
    },
    set_url: function (_ad_title) {
         this.ad_title = _ad_title;
    },
    set_cpf: function (_ad_total_time) {
         this.ad_total_time = _ad_total_time;
    },
    set_cnpj: function (_ad_content_image) {
         this.ad_content_image = _ad_content_image;
    },
    set_email: function (_ad_content_video) {
         this.ad_content_video = _ad_content_video;
    },
    set_ad_id: function (_ad_content_gif) {
         this.ad_content_gif = _ad_content_gif;
    }
}

//to use
//import '../Model/AdModel'
//var Ad = new AdModel();
