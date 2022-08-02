<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet" />
    <title>Interview App - admin</title>
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
       <div class="table-responsive">
           <table class="table table-striped">
               <thead>
                   <tr>
                       <th>#</th>
                       <th>Full Name</th>
                       <th>Username</th>
                       <th>Date of birth</th>
                       <th>Score</th>
                       <th>Gender</th>
                       <th>Action</th>
                   </tr>
               </thead>
               <tbody>
                  @foreach ($users as $id => $user)
                  <tr>
                    <td>{{ $id + 1 }}</td>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->username }}</td>
                    <td>{{ $user->date_of_birth }}</td>
                    <td>{{ $user->score }}</td>
                    <td>{{ $user->gender }}</td>
                    <td>
                        <form class="d-inline-block" action="{{ route('delete-user', $user->id) }}" method="post">
                            @csrf
                            @method('DELETE')
                           <button type="submit" class="btn btn-primary btn-xs">
                             <i class="fas fa-trash"></i>
                             <span> Delete</span>
                           </button>
                        </form>
                        <a type="submit" href="/student/profile/{{ $user->id }}" class="btn btn-success btn-xs d-inline-block">
                            <i class="fas fa-eye"></i>
                            <span> View Profile</span>
                        </a>
                     </td>
                  </tr>
                  @endforeach
               </tbody>
           </table>
       </div>
   </div>
    <script src="{{ asset('/js/all.js') }}"></script>
    <script src="{{ asset('/js/app.js') }}"></script>
  </body>
</html>