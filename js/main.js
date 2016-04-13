'use strict';

System.register(['babel-polyfill', 'views/hello', 'jquery'], function (_export, _context) {
  var Hello, $, hello;
  return {
    setters: [function (_babelPolyfill) {}, function (_viewsHello) {
      Hello = _viewsHello.default;
    }, function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      hello = new Hello();

      hello.greetWorld('Future ES2015 Ninja');

      // Test importing jQuery
      console.log('You are running jQuery version: ' + $.fn.jquery);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRU87O0FBQ0E7OztBQUdILGNBQVEsSUFBSSxLQUFKOztBQUNaLFlBQU0sVUFBTixDQUFpQixxQkFBakI7OztBQUdBLGNBQVEsR0FBUixzQ0FBK0MsRUFBRSxFQUFGLENBQUssTUFBTCxDQUEvQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjsgLy8gRm9yIGxlc3Mgc3BlYyBjb21wbGlhbnQgYnJvd3NlcnNcblxuaW1wb3J0IEhlbGxvIGZyb20gJ3ZpZXdzL2hlbGxvJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIFRlc3QgbW9kdWxlIGxvYWRpbmdcbmxldCBoZWxsbyA9IG5ldyBIZWxsbygpO1xuaGVsbG8uZ3JlZXRXb3JsZCgnRnV0dXJlIEVTMjAxNSBOaW5qYScpO1xuXG4vLyBUZXN0IGltcG9ydGluZyBqUXVlcnlcbmNvbnNvbGUubG9nKGBZb3UgYXJlIHJ1bm5pbmcgalF1ZXJ5IHZlcnNpb246ICR7JC5mbi5qcXVlcnl9YCk7XG4iXX0=