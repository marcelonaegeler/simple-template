var _ = (function() {
  var render = function(el, ct) {
    el.appendChild(ct);
  };

  var createElement = function(t, opt, html, cb) {
    var tag = document.createElement(t);
    for(var i in opt) {
      tag[i] = opt[i];
    }

    if(typeof html == 'string')
      tag.innerHTML = html;
    else if(typeof html == 'object')
      tag.appendChild(html);

    return tag;
  };

  return {
    render: render
    , createElement: createElement
  };
})();
