<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet" />
    <title>Interview App - student - profile</title>
  </head>
  <body>
   <header class="bg-primary text-white p-3">
       <div class="container">
           <div class="d-flex justify-content-between">
               <a href="/admin" class="text-docoration-none text-white" style="text-decoration:none">Admin Panel</a>
               <a href="/logout" class="text-white">Logout</a>
           </div>
       </div>
   </header>

   <div class="container mt-5">
    <div class="fs-5 mb-3 text-center text-capitalize">
        student's information
    </div>
      <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            {{-- <th>#</th> --}}
                            <th>Attribute</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                       @foreach ($user as $key => $value)
                       <tr>
                         <td>{{ $key }}</td>
                         <td>{{ $value }}</td>
                       </tr>
                       @endforeach
                    </tbody>
                </table>
            </div>
        </div>
      </div>
   </div>
    <script src="{{ asset('/js/all.js') }}"></script>
    <script src="{{ asset('/js/app.js') }}"></script>
  </body>
</html>