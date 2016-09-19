define('api',[], function () {});
define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Aurelia Site';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('nav',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Nav = exports.Nav = function Nav() {
		_classCallCheck(this, Nav);

		this.nav1 = "Nav 1";
		this.nav2 = "Nav 2";
	};
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('navigation',['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Navigation = exports.Navigation = function Navigation() {
		_classCallCheck(this, Navigation);

		this.nav1 = 'Nav 1';
		this.nav2 = 'Nav 2';
	};
});
define('footer',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Footer = exports.Footer = function Footer() {
    _classCallCheck(this, Footer);
  };
});
define('foot',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Foot = exports.Foot = function Foot() {
    _classCallCheck(this, Foot);
  };
});
define('text!reset.css', ['module'], function(module) { module.exports = "/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\t<require from=\"./reset.css\"></require>\n\t<require from=\"./styles.css\"></require>\n\t<require from=\"./navigation\"></require>\n\t<require from=\"./foot\"></require>\n\t<h1>${message}</h1>\n\t<navigation></navigation>\n\t<foot></foot>\n</template>\n"; });
define('text!styles.css', ['module'], function(module) { module.exports = "body {\r\n\tfont: 1rem arial, Helvetica, sans-serif;\r\n}\r\n"; });
define('text!nav.html', ['module'], function(module) { module.exports = "<template>\r\n\t<nav>\r\n\t\t<ul>\r\n\t\t\t<li>${nav1}</li>\r\n\t\t\t<li>${nav2}</li>\r\n\t\t</ul>\r\n\t</nav>\r\n</template>"; });
define('text!navigation.html', ['module'], function(module) { module.exports = "<template>\r\n\t<nav>\r\n\t\t<ul>\r\n\t\t\t<li>${nav1}</li>\r\n\t\t\t<li>${nav2}</li>\r\n\t\t</ul>\r\n\t</nav>\r\n</template>"; });
define('text!footer.html', ['module'], function(module) { module.exports = "<template>\r\n\t<footer>\r\n\t\t<div>Social Media bar</div>\r\n\t\t<div>copywrite</div>\r\n\t</footer>\r\n</template>"; });
define('text!foot.html', ['module'], function(module) { module.exports = "<template>\r\n\t<footer>\r\n\t\t<div>Social Media bar</div>\r\n\t\t<div>copywrite</div>\r\n\t</footer>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map