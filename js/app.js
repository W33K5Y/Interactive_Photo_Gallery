$('.lightbox-wrap').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options


});

// $('.lightbox-wrap').each(function() { // the containers for all your galleries
//     $(this).magnificPopup({
//         delegate: 'a', // the selector for gallery item
//         type: 'image',

    
//         gallery: {
//           enabled:true,
//           preload: [0,2],
//           closeBtnInside: false
//       }

//   });
// });

$('.lightbox-wrap').click( function () {
  $(this). magnificPopup({
    items: [
      {
        src: 'photo_gallery_v4/photos/01.jpg',
        title: 'Hay Bales in a golden field'
      },
       {
        src: 'photo_gallery_v4/photos/02.jpg',
        title: 'Mountains and Sea'
      },
       {
        src: 'photo_gallery_v4/photos/03.jpg',
        title: 'Green Beauty'
      },
       {
        src: 'photo_gallery_v4/photos/04.jpg',
        title: 'Snowscape '
      },
       {
        src: 'photo_gallery_v4/photos/05.jpg',
        title: 'Utah desert'
      },
       {
        src: 'photo_gallery_v4/photos/06.jpg',
        title: 'Autumn colours'
      },
       {
        src: 'photo_gallery_v4/photos/07.jpg',
        title: 'Pure Green'
      },
       {
        src: 'photo_gallery_v4/photos/08.jpg',
        title: 'Desert'
      },
       {
        src: 'photo_gallery_v4/photos/09.jpg',
        title: 'country road'
      },
       {
        src: 'photo_gallery_v4/photos/10.jpg',
        title: 'rivers and sunsets'
      },
       {
        src: 'photo_gallery_v4/photos/11.jpg',
        title: 'we need to fix this hole'
      },
       {
        src: 'photo_gallery_v4/photos/12.jpg',
        title: 'Another Mountain'
      },

    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
});
