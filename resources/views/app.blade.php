<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet" />
    <title>Interview App</title>
    @inertiaHead
  </head>
  <body>
    @inertia
    <script src="{{ mix('/js/app.js') }}"></script>
    <script src="{{ asset('/js/all.js') }}"></script>
    {{-- <script src="{{ asset('js/validate.js') }}"></script> --}}
  </body>
</html>