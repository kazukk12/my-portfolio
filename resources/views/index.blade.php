<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
        <title>KAZMA</title>
    </head>
    <body>
        @component('components.header') @endcomponent

        <!-- メインコンテンツ -->

        @component('components.footer-navigation') @endcomponent
        @component('components.footer') @endcomponent
    </body>
    @vite('resources/css/app.css')
</html>
