(function() {

  function test(event) {
    event.target.style.backgroundColor = "#ccc";
  }

  var div = _.createElement('div', {}, function(){
    return _.createElement('a', { href: 'javascript:void(0);', onclick: test, className: 'teste hehe' }
      , (function() {
        return _.createElement('strong', {}, 'oi');
      })()
    );
  }());

  _.render(document.querySelector('.render'), div);
})();
