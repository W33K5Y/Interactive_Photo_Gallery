$('.lightbox-wrap').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options


});

$('.lightbox-wrap').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true,
          preload: [0,2],
          closeBtnInside: false
      }

  });
});

$('div a img caption').hide();


