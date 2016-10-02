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
define('forms',['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Forms = exports.Forms = function () {
		function Forms() {
			_classCallCheck(this, Forms);

			this.radios = [];
			this.selectedRadio = {};
			this.options = [];
			this.selectedOption = [];
			this.animal = '';

			this.isChecked = false;

			this.radios = [{ id: 1, text: 'first' }, { id: 2, text: 'second' }, { id: 3, text: 'third' }];
			this.selectedRadio;

			this.options = [{ id: 1, text: 'red' }, { id: 2, text: 'green' }, { id: 3, text: 'blue' }];
			this.selectedOption;
		}

		Forms.prototype.submitForm = function submitForm() {
			var animalInfo = { animal: this.animal };
			console.log(animalInfo.animal);
			console.log("isChecked: " + this.isChecked);
			console.log('checked: ' + this.selectedRadio.id);
			console.log('selected: ' + this.selectedOption.id);
		};

		return Forms;
	}();
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
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n\t<require from=\"./reset.css\"></require>\r\n\t<require from=\"./styles.css\"></require>\r\n\t<require from=\"./navigation\"></require>\r\n\t<require from=\"./forms\"></require>\r\n\t<require from=\"./foot\"></require>\r\n\t<header>\r\n\t\t<h1>${message}</h1>\r\n\t\t<navigation></navigation>\r\n\t</header>\r\n\t<forms></forms>\r\n\t<foot></foot>\r\n</template>\r\n"; });
define('text!reset.css', ['module'], function(module) { module.exports = "/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}"; });
define('text!foot.html', ['module'], function(module) { module.exports = "<template>\r\n\t<footer>\r\n\t\t<div>Social Media bar</div>\r\n\t\t<div>copywrite</div>\r\n\t</footer>\r\n</template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = "body {\r\n\tfont: 1rem arial, Helvetica, sans-serif;\r\n}\r\n\r\nheader {\r\n\tbackground-color: #999999;\r\n\tcolor: #ffffff;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n}\r\n\r\nh1{\r\n\tfont-size: 1.2rem;\r\n\tfont-weight: bold;\r\n\tposition: relative;\r\n\tfloat: left;\r\n}\r\n\r\nnav {\r\n\tposition: relative;\r\n\tfloat: right;\r\n}\r\n\r\nul {\r\n\r\n}\r\n\r\nli {\r\n\tfloat: left;\r\n}\r\n\r\nform {\r\n\tposition: relative;\r\n\ttop: 2rem;\r\n}\r\n\r\nfooter {\r\n\tfont-size: .75rem;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tbackground-color: #eeeeee;\r\n\twidth: 100%;\r\n}"; });
define('text!forms.html', ['module'], function(module) { module.exports = "<template>\r\n\t<form role=\"form\" submit.delegate=\"submitForm()\">\r\n\t\t<!--text field-->\r\n\t\t<label for=\"animal\">What is your favourite animal?</label>\r\n\t\t<input type=\"text\" id=\"animal\" value.bind=\"animal\">\r\n\r\n\t\t<br>\r\n\t\t<br>\r\n\r\n\t\t<!--checkbox-->\r\n\t\t<label for=\"checkbox\">Checkbox</label>\r\n\t\t<input type=\"checkbox\" id=\"checkbox\" checked.bind=\"isChecked\">\r\n\r\n\t\t<br>\r\n\t\t<br>\r\n\r\n\t\t<!--radio buttons-->\r\n\t\t<label for=\"radios\" repeat.for=\"radio of radios\">\r\n\t\t\t<input type=\"radio\" name=\"myRadios\" model.bind=\"radio\" checked.bind=\"$parent.selectedRadio\">\r\n\t\t\t${radio.text}\r\n\t\t</label>\r\n\r\n\t\t<br>\r\n\t\t<br>\r\n\r\n\t\t<!--select (options) list-->\r\n\t\t<label for=\"select\">select something</label>\r\n\t\t<select id=\"select\" value.bind=\"selectedOption\">\r\n\t\t\t<option repeat.for=\"option of options\" model.bind=\"option\">${option.text}</option>\r\n\t\t</select>\r\n\r\n\t\t<br>\r\n\t\t<br>\r\n\r\n\t\t<button type=\"submit\">Submit</button>\r\n\r\n\t</form>\r\n</template>"; });
define('text!navigation.html', ['module'], function(module) { module.exports = "<template>\r\n\t<nav>\r\n\t\t<ul>\r\n\t\t\t<li>${nav1}</li>\r\n\t\t\t<li>${nav2}</li>\r\n\t\t</ul>\r\n\t</nav>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map