require.config({
    baseUrl: '/public/scripts/',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'bower_components/jquery/jquery.min',
        bootsrtap: 'app/bootstrap.min'
    }
});

require(['jquery'], function( $ ) {
    console.log( $ ); // OK
    require(['bootsrtap'], function() {
      $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
          $carousel.carousel($carousel.data());
        });
    });
});

// require.config({
//     // Add this map config in addition to any baseUrl or
//     // paths config you may already have in the project.
//     map: {
//       // '*' means all modules will get 'jquery-private'
//       // for their 'jquery' dependency.
//       '*': { 'jquery': 'jquery-private' },

//       // 'jquery-private' wants the real jQuery module
//       // though. If this line was not here, there would
//       // be an unresolvable cyclic dependency.
//       'jquery-private': { 'jquery': 'jquery' }
//     }
// });

// // and the 'jquery-private' module, in the
// // jquery-private.js file:
// define(['jquery'], function (jq) {
//     return jq.noConflict( true );
// });

// require(['jquery'], function( $ ) {
//     console.log( $ ); // OK
// });