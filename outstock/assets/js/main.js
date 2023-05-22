$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})

function successAlert(message){
    Command: toastr["success"]("message")   //burda mesaj yerine istenilen sey yazila biler

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2500",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
}

function errorAlert(message){
    Command: toastr["error"]("message")

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
}


    function getDatas() {
        fetch('https://646ba5487d3c1cae4ce41904.mockapi.io/outstock',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                data.forEach(el => {
                    trending.innerHTML += `
                    <div class="container">
                    <div class="row">
                        <div class="col-3 mt-5">
                            <img style="width: 40%;" src="${el.image}" alt="">
                            <p style="color: black;" class="text-center">${el.text}</p>
                            <p style="color: black;" class="text-center">${el.price}</del></p>
                        </div>
                    </div>`
          
                });
            })
            .catch(err => console.log(err))
    }
    getDatas();

    //YUSIF MUELLIIM  TASKİ HEM BASA DÜŞMEMİŞDİM HƏM DƏ HƏFTƏ SONU TƏKRAR ETDİK DEYE YAZMAMİŞDİM QALMIŞDI
    // BU GÜN BUNA OXŞAR DERSDƏ YİGDİQ EVE GƏLƏN KİMİ BUNU YİGMAGA CALIŞDIM 5 SAATA ANCAQ BU QƏDƏR OLDU  :((((
      //  şəkillərdəə nəsə problem olur alt alta dusur container row col vermisem ama yene alt altadir vaxt az qaldi cox baxa bilmedim