var _ = (function() {
  var createElement = function(t, opt, html, cb) {
    var tag = document.createElement(t);
    tag.innerHTML = html;
    for(var i in opt) {
      tag[i] = opt[i];
    }
    return tag;
  };


  return {
    createElement: createElement
  };
})();

function test() {
  console.log('ok');
};

var el = _.createElement('a', { href: 'javascript:void(0);', onclick: test, className: 'teste hehe' }, 'Teste de link');

var render = document.querySelector('.render');
render.appendChild(el);
