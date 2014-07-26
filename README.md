#flexible.gs

Flexible Grid System · [flexible.gs](http://flexible.gs)

###Install

```
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/flexible.min.css">
  <link rel="stylesheet" href="css/main.css">
</head>
```

##Usage

Equalize the number of each grid line.
```
<div class="row">
  ...
</div>
```

All variations of class names.
```
i = xl          i = lg          i = md          i = sm          i = xs
i = xl-push     i = lg-push     i = md-push     i = sm-push     i = xs-push
i = xl-pull     i = lg-pull     i = md-pull     i = sm-pull     i = xs-pull
i = xl-space    i = lg-space    i = md-space    i = sm-space    i = xs-space

    xl-push-0       lg-push-0       md-push-0       sm-push-0       xs-push-0
    xl-push-1       lg-push-1       md-push-1       sm-push-1       xs-push-1

    xl-pull-0       lg-pull-0       md-pull-0       sm-pull-0       xs-pull-0
    xl-pull-1       lg-pull-1       md-pull-1       sm-pull-1       xs-pull-1

    xl-space-0      lg-space-0      md-space-0      sm-space-0      xs-space-0
    xl-space-1      lg-space-1      md-space-1      sm-space-1      xs-space-1

    xl-visible      lg-visible      md-visible      sm-visible      xs-visible
    xl-hidden       lg-hidden       md-hidden       sm-hidden       xs-hidden

i-1
i-2-1
i-3-1  i-3-2
i-4-1  i-4-2  i-4-3
i-5-1  i-5-2  i-5-3  i-5-4
i-6-1  i-6-2  i-6-3  i-6-4  i-6-5
i-7-1  i-7-2  i-7-3  i-7-4  i-7-5  i-7-6
i-8-1  i-8-2  i-8-3  i-8-4  i-8-5  i-8-6  i-8-7
i-9-1  i-9-2  i-9-3  i-9-4  i-9-5  i-9-6  i-9-7  i-9-8
i-10-1 i-10-2 i-10-3 i-10-4 i-10-5 i-10-6 i-10-7 i-10-8 i-10-9
i-11-1 i-11-2 i-11-3 i-11-4 i-11-5 i-11-6 i-11-7 i-11-8 i-11-9 i-11-10
i-12-1 i-12-2 i-12-3 i-12-4 i-12-5 i-12-6 i-12-7 i-12-8 i-12-9 i-12-10 i-12-11
i-13-1 i-13-2 i-13-3 i-13-4 i-13-5 i-13-6 i-13-7 i-13-8 i-13-9 i-13-10 i-13-11 i-13-12
i-14-1 i-14-2 i-14-3 i-14-4 i-14-5 i-14-6 i-14-7 i-14-8 i-14-9 i-14-10 i-14-11 i-14-12 i-14-13
i-14-1 i-14-2 i-14-3 i-14-4 i-14-5 i-14-6 i-14-7 i-14-8 i-14-9 i-14-10 i-14-11 i-14-12 i-14-13
i-15-1 i-15-2 i-15-3 i-15-4 i-15-5 i-15-6 i-15-7 i-15-8 i-15-9 i-15-10 i-15-11 i-15-12 i-15-13 i-15-14
i-16-1 i-16-2 i-16-3 i-16-4 i-16-5 i-16-6 i-16-7 i-16-8 i-16-9 i-16-10 i-16-11 i-16-12 i-16-13 i-16-14 i-16-15
i-17-1 i-17-2 i-17-3 i-17-4 i-17-5 i-17-6 i-17-7 i-17-8 i-17-9 i-17-10 i-17-11 i-17-12 i-17-13 i-17-14 i-17-15 i-17-16
i-18-1 i-18-2 i-18-3 i-18-4 i-18-5 i-18-6 i-18-7 i-18-8 i-18-9 i-18-10 i-18-11 i-18-12 i-18-13 i-18-14 i-18-15 i-18-16 i-18-17
i-19-1 i-19-2 i-19-3 i-19-4 i-19-5 i-19-6 i-19-7 i-19-8 i-19-9 i-19-10 i-19-11 i-19-12 i-19-13 i-19-14 i-19-15 i-19-16 i-19-17 i-19-18
i-20-1 i-20-2 i-20-3 i-20-4 i-20-5 i-20-6 i-20-7 i-20-8 i-20-9 i-20-10 i-20-11 i-20-12 i-20-13 i-20-14 i-20-15 i-20-16 i-20-17 i-20-18 i-20-19
i-21-1 i-21-2 i-21-3 i-21-4 i-21-5 i-21-6 i-21-7 i-21-8 i-21-9 i-21-10 i-21-11 i-21-12 i-21-13 i-21-14 i-21-15 i-21-16 i-21-17 i-21-18 i-21-19 i-21-20
i-22-1 i-22-2 i-22-3 i-22-4 i-22-5 i-22-6 i-22-7 i-22-8 i-22-9 i-22-10 i-22-11 i-22-12 i-22-13 i-22-14 i-22-15 i-22-16 i-22-17 i-22-18 i-22-19 i-22-20 i-22-21
i-23-1 i-23-2 i-23-3 i-23-4 i-23-5 i-23-6 i-23-7 i-23-8 i-23-9 i-23-10 i-23-11 i-23-12 i-23-13 i-23-14 i-23-15 i-23-16 i-23-17 i-23-18 i-23-19 i-23-20 i-23-21 i-23-22
i-24-1 i-24-2 i-24-3 i-24-4 i-24-5 i-24-6 i-24-7 i-24-8 i-24-9 i-24-10 i-24-11 i-24-12 i-24-13 i-24-14 i-24-15 i-24-16 i-24-17 i-24-18 i-24-19 i-24-20 i-24-21 i-24-22 i-24-23
```

Example code snippet · [View example page](http://flexible.gs/example.html)
```
<div class="row">
  <div class="xl-24-6 lg-space-0 lg-12-3 md-space-8-1 md-8-6 sm-space-12-3 sm-12-6 xs-1"></div>
  <div class="xl-24-18 lg-12-9 md-1 sm-1 xs-1"></div>
  <div class="xl-1 lg-1 md-1 sm-1 xs-1"></div>
  <div class="xl-push-0 xl-10-3 lg-push-12-9 lg-12-3 md-2-1 sm-12-6 xs-1"></div>
  <div class="xl-pull-0 xl-10-7 lg-pull-12-3 lg-12-9 md-2-1 sm-12-6 xs-1"></div>
  <div class="xl-visible xl-5-1 lg-visible lg-12-4 md-visible md-2-1 sm-visible sm-12-4 xs-visible xs-1"></div>
  <div class="xl-visible xl-5-1 lg-visible lg-12-4 md-visible md-2-1 sm-visible sm-12-4 xs-visible xs-1"></div>
  <div class="xl-visible xl-5-1 lg-visible lg-12-4 md-visible md-2-1 sm-visible sm-12-4 xs-visible xs-1"></div>
  <div class="xl-visible xl-5-1 lg-visible lg-12-6 md-visible md-2-1 sm-hidden xs-visible xs-1"></div>
  <div class="xl-visible xl-5-1 lg-visible lg-12-6 md-visible md-2-2 sm-hidden xs-visible xs-1"></div>
  <div class="xl-22-11 lg-20-10 md-18-9 sm-1 xs-1"></div>
  <div class="xl-22-11 lg-20-10 md-18-9 sm-1 xs-1"></div>
</div>
```

##Browser Support

#####Desktop Browsers
- Safari (6.1+)
- Chrome (26+)
- Firefox (16+)
- Opera (15+)
- IE (9+)

#####Mobile Browsers
- iOS Safari (7+)
- Android Browser (4.4+)
- Opera Mobile (22+)
- Chrome for Android (35+)
- Firefox for Android (30+)
- IE Mobile (10+)

##Feedback
If you find bugs please open a ticket at [https://github.com/dnomak/flexible.gs/issues](https://github.com/dnomak/flexible.gs/issues)

##License
Flexible Grid System is licensed under the MIT license [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
