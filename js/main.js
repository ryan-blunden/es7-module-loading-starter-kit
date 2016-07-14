'use strict';

System.register(['babel-polyfill', 'jquery', 'views/hello'], function (_export, _context) {
  "use strict";

  var $, Hello, hello;
  return {
    setters: [function (_babelPolyfill) {}, function (_jquery) {
      $ = _jquery.default;
    }, function (_viewsHello) {
      Hello = _viewsHello.default;
    }],
    execute: function () {
      hello = new Hello();

      hello.greetWorld('Future ES2015 Ninja');

      // Test importing jQuery
      console.log('You are running jQuery version: ' + $.fn.jquery);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDTyxPOztBQUVBLFc7OztBQUdILFcsR0FBUSxJQUFJLEtBQUosRTs7QUFDWixZQUFNLFVBQU4sQ0FBaUIscUJBQWpCOztBQUVBO0FBQ0EsY0FBUSxHQUFSLHNDQUErQyxFQUFFLEVBQUYsQ0FBSyxNQUFwRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7IC8vIEZvciBsZXNzIHNwZWMgY29tcGxpYW50IGJyb3dzZXJzXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgSGVsbG8gZnJvbSAndmlld3MvaGVsbG8nO1xuXG4vLyBUZXN0IG1vZHVsZSBsb2FkaW5nXG5sZXQgaGVsbG8gPSBuZXcgSGVsbG8oKTtcbmhlbGxvLmdyZWV0V29ybGQoJ0Z1dHVyZSBFUzIwMTUgTmluamEnKTtcblxuLy8gVGVzdCBpbXBvcnRpbmcgalF1ZXJ5XG5jb25zb2xlLmxvZyhgWW91IGFyZSBydW5uaW5nIGpRdWVyeSB2ZXJzaW9uOiAkeyQuZm4uanF1ZXJ5fWApO1xuIl19