

$('.lightbox-wrap').magnificPopup({
  delegate: 'a', 
  type: 'image',

  image: {
     titleSrc: 'title',
   },
  gallery: {
    enabled: true,
    navigateByImgClick: true,
  },
});


let $search = $('.searchBox');
let $imgs = $('img')

$search.keyup(function(event) {
  let value = $search.val().toLowerCase();
  $imgs.show();
  if (value !== '') {
    $imgs.not('[title*="' + value + '"]').hide();
  }
});

$('.animsition').animsition({
inClass: 'fade-in-down-sm',
outClass: 'fade-out-down-sm',
linkElement: 'header a',
  inDuration: 2000,
  outDuration: 500
});


