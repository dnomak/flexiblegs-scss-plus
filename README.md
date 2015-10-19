# [flexiblegs-scss](http://flexible.gs)

Flexible Grid System Scss

## Install

### [Download](https://raw.githubusercontent.com/flexiblegs/flexiblegs-scss/master/flexiblegs-scss.scss)
```scss
$syntax: (
  css, bem
);
$breakpoint: (
  xl : "",
  lg : "(max-width: 1024px)",
  md : "(max-width: 768px)",
  sm : "(max-width: 667px)"
);
$wrap-col:     (auto, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
$wrap-prop:    (table, flexbox, normal, left, center, right, top, middle, bottom, between, around, baseline, reverse, not-reverse);
$col-row:      (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
$col-width:    ();
$col-prop:     (hidden, not-hidden, first, not-first, last, not-last);
$wrap-gutter:  (0, 8, 16, 24, 40);
$wrap-outside: (0, 8, 16, 24, 40);
$wrap-masonry: (2, 3, 4, 5, 6);

@import "flexiblegs-scss-plus";
@import "flexiblegs-scss";
```

### [npm](https://www.npmjs.com/package/flexiblegs-scss)
```
$ npm install --save flexiblegs-scss
```

### [bower](http://bower.io/search/?q=flexiblegs-scss)
```
$ bower install --save flexiblegs-scss
```

## License
- Flexible Grid System is licensed under the MIT license.
  - [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
- Flexible Grid System documentation is licensed under a Creative Commons Attribution 4.0 International License.
  - [http://creativecommons.org/licenses/by/4.0](http://creativecommons.org/licenses/by/4.0)
