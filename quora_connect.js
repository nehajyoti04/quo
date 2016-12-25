(function($) {
  $(document).ready(function() {

    // $.ajax({
    //   dataType: 'json',
    //   url: "https://api.quora.com/api/logged_in_user",

    //   success: function(data) {
    //     console.log("data");
    //     console.log(data);
    //   }
    // });
    //





    $.ajax({
      url: "https://api.quora.com/api/logged_in_user?callback=parseResponse",

      jsonp: "callback",
      dataType: 'jsonp',
      // jsonpCallback: 'jsonCallback',
      data: {
        format: 'json'
      },
      success: function(response) {
        var data = jQuery.parseJSON(response);

        $.each(data, function(index, value) {
          $('[name=' + index + ']').val(value);
        });

        // console.log(data); // server response
      }
    });









    // var method = 'GET';
    // var url = 'https://api.quora.com/api/logged_in_user';
    // var x = createCORSRequest(method, url);
    // console.log('x');
    // console.log(x);




    // $.ajax({
    //   url: 'https://api.quora.com/api/logged_in_user',

    //   dataType: 'jsonp',
    //   success: function(response) {
    //     $('#page-title').append(response);
    //     // console.log("response");
    //     // console.log(response);
    //   }

    // });





    // $.ajax({

    //   // The 'type' property sets the HTTP method.
    //   // A value of 'PUT' or 'DELETE' will trigger a preflight request.
    //   type: 'GET',

    //   // The URL to make the request to.
    //   url: 'https://api.quora.com/api/logged_in_user',

    //   // The 'contentType' property sets the 'Content-Type' header.
    //   // The JQuery default for this property is
    //   // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
    //   // a preflight. If you set this value to anything other than
    //   // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
    //   // you will trigger a preflight request.
    //   contentType: 'text/plain',

    //   xhrFields: {
    //     // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    //     // This can be used to set the 'withCredentials' property.
    //     // Set the value to 'true' if you'd like to pass cookies to the server.
    //     // If this is enabled, your server must respond with the header
    //     // 'Access-Control-Allow-Credentials: true'.
    //     withCredentials: false
    //   },

    //   headers: {
    //     // Set any custom headers here.
    //     // If you set any non-simple headers, your server must include these
    //     // headers in the 'Access-Control-Allow-Headers' response header.
    //   },

    //   success: function() {
    //     console.log("data");
    //     console.log(data);
    //     // Here's where you handle a successful response.
    //   },

    //   error: function() {
    //     // Here's where you handle an error response.
    //     // Note that if the error was due to a CORS issue,
    //     // this function will still fire, but there won't be any additional
    //     // information about the error.
    //   }
    // });









    // $.ajax({
    //   dataType: 'json',
    //   url: "/default-search-location/" +
    //     position.coords.latitude + "/" +
    //     position.coords.longitude,
    //   // url : "/default-search-location/" + 33.7529 + "/" +
    //   // 84.3901,//30303 atlanta, GA

    //   success: function(data) {



    //   }
    // });
    // $.getJSON("https://api.quora.com/api/logged_in_user", {
    //     // tags: "awesome",
    //     // tagmode: "any",
    //     format: "jsonp"
    //   },
    //   function(data) {
    //     console.log("data");
    //     console.log(data);
    //     // $.each(data.items, function(i, item) {
    //     //   $("<img/>").attr("src", item.media.m).appendTo("#flickr-images");
    //     //   if (i == 3) return false;
    //     // });
    //   });
    //



  });


  function myfunc({
    /* json formatted data goes here */
  })


  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR has 'withCredentials' property only if it supports CORS
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") { // if IE use XDR
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }
    return xhr;
  }
})(jQuery);
