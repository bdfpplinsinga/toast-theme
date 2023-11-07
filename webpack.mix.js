let mix = require('laravel-mix');

mix.setPublicPath('./web/assets/')
    .js('src/js/app.js', 'web/assets/js')
    .postCss('src/css/app.css', 'web/assets/css', [require('tailwindcss')])
    .version();
