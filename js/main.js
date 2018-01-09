'use strict';

System.register(['babel-polyfill', 'jquery', 'views/hello.js'], function (_export, _context) {
  "use strict";

  var $, Hello, hello;
  return {
    setters: [function (_babelPolyfill) {}, function (_jquery) {
      $ = _jquery.default;
    }, function (_viewsHelloJs) {
      Hello = _viewsHelloJs.default;
    }],
    execute: function () {
      hello = new Hello();

      hello.greetWorld('Future ES2015 Ninja');

      // Test importing jQuery
      console.log('You are running jQuery version: ' + $.fn.jquery);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzL21haW4uanMiXSwibmFtZXMiOlsiJCIsIkhlbGxvIiwiaGVsbG8iLCJncmVldFdvcmxkIiwiY29uc29sZSIsImxvZyIsImZuIiwianF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNPQSxPOztBQUVBQyxXOzs7QUFHSEMsVyxHQUFRLElBQUlELEtBQUosRTs7QUFDWkMsWUFBTUMsVUFBTixDQUFpQixxQkFBakI7O0FBRUE7QUFDQUMsY0FBUUMsR0FBUixzQ0FBK0NMLEVBQUVNLEVBQUYsQ0FBS0MsTUFBcEQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnOyAvLyBGb3IgbGVzcyBzcGVjIGNvbXBsaWFudCBicm93c2Vyc1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IEhlbGxvIGZyb20gJ3ZpZXdzL2hlbGxvLmpzJztcblxuLy8gVGVzdCBtb2R1bGUgbG9hZGluZ1xubGV0IGhlbGxvID0gbmV3IEhlbGxvKCk7XG5oZWxsby5ncmVldFdvcmxkKCdGdXR1cmUgRVMyMDE1IE5pbmphJyk7XG5cbi8vIFRlc3QgaW1wb3J0aW5nIGpRdWVyeVxuY29uc29sZS5sb2coYFlvdSBhcmUgcnVubmluZyBqUXVlcnkgdmVyc2lvbjogJHskLmZuLmpxdWVyeX1gKTtcbiJdfQ==