# [flexiblegs-scss-plus](https://dnomak.com/flexiblegs/)

Flexible Grid System Scss Plus

## Install

### [Settings download](https://raw.githubusercontent.com/flexiblegs/flexiblegs-scss-plus/master/flexiblegs-settings.scss)
```scss
$flexiblegs-method: (
  "css"
  // "bem"
);
$flexiblegs-breakpoint: (
  "xl" : "",
  "lg" : "(max-width: 1024px)",
  "md" : "(max-width: 768px)",
  "sm" : "(max-width: 667px)"
);
$wrap-col: (
  "auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
);
$wrap-prop: (
  "table",
  "flexbox",
  "normal",
  "left",
  "center",
  "right",
  "top",
  "middle",
  "bottom",
  "stretch",
  "between",
  "around",
  "baseline",
  "reverse",
  "not-reverse"
);
$col-row: (
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
);
$col-width: ();
$col-prop: (
  "hidden",
  "not-hidden",
  "first",
  "not-first",
  "last",
  "not-last"
);
$wrap-gutter: (
  0, 8, 16, 24, 40
);
$wrap-outside: (
  0, 8, 16, 24, 40
);

@import "node_modules/flexiblegs-scss/flexiblegs-scss";
@import "node_modules/flexiblegs-scss-plus/flexiblegs-scss-plus";
```

### [npm](https://www.npmjs.com/package/flexiblegs-scss-plus)
```bash
$ npm install --save flexiblegs-scss flexiblegs-scss-plus
```

## Build
```bash
$ git clone git@github.com:flexiblegs/flexiblegs-scss-plus.git
$ cd flexiblegs-scss-plus
$ npm install
$ npm run build
```

## License
Flexible Grid System is licensed under the [MIT](LICENSE) license.
