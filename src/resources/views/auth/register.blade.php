@extends('layouts.app')

@section('content')



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title> Timik Panel Design</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description">
    <meta content="coderthemes" name="author">

    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.ico">

    <!-- App css -->
    <link href="assets/css/app.min.css" rel="stylesheet" type="text/css">

    <!-- Icons css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css">

    <!-- Theme Config Js -->
    <script src="assets/js/config.js"></script>
</head>

<body>

    <div class="bg-gradient-to-r from-rose-100 to-teal-100 dark:from-gray-700 dark:via-gray-900 dark:to-black">

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <div class="h-screen w-screen flex justify-center items-center">

            <div class="2xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
                <div class="card overflow-hidden sm:rounded-md rounded-none">
                    <div class="p-6">
                        <a href="index.html" class="block mb-8">
                            <img class="h-6 block dark:hidden" src="assets/images/logo-dark.png" alt="">
                            <img class="h-6 hidden dark:block" src="assets/images/logo-light.png" alt="">
                        </a>

                        <form method="POST" action="{{ route('register') }}">
                                @csrf

                                <div class="mb-4">
                                    <label class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2" for="LoggingEmailAddress">Full Name</label>
                                    <input id="name"  type="text" class="form-input" type="text" placeholder="Enter your Name"  name="name" value="{{ old('name') }}" required autocomplete="name" autofocus >
                                    

                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                     @enderror
                                </div>

                                <div class="mb-4">
                                    <label class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2" for="LoggingEmailAddress">Email Address</label>
                                    <input id="email" class="form-input" type="email" placeholder="Enter your email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email">

                                                @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                </div>

                                <div class="mb-4">
                                    <label class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2" for="loggingPassword">Password</label>
                                    <input id="password" class="form-input" type="password" placeholder="Enter your password" type="password" name="password" required autocomplete="new-password">
                                    
                                            @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                </div>
                                <div class="mb-4">
                                    <label class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2" for="loggingPassword">Confirm Password</label>
                                         <div class="col-md-6">
                                            <input id="password-confirm" type="password" class="form-input" placeholder="Confirm password"  name="password_confirmation" required autocomplete="new-password">
                                        </div>
                                </div>

                                <div class="mb-4">
                                    <div class="flex items-center">
                                        <input type="checkbox" class="form-checkbox rounded" id="checkbox-signup">
                                        <label class="ms-2 text-slate-900 dark:text-slate-200" for="checkbox-signup">I accept <a href="#" class="text-gray-400 underline">Terms and Conditions</a></label>
                                    </div>
                                </div>

                                <div class="flex justify-center mb-6">
                                    
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn w-full text-white bg-primary">
                                            Register
                                         </button>
                                    </div>
                                </div>

                        </form>

                        

                        <p class="text-gray-500 dark:text-gray-400 text-center">Already have account ?<a href="/login" class="text-primary ms-1"><b>Log In</b></a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @endsection

    <!-- ============================================================== -->
    <!-- End Page content -->
    <!-- ============================================================== -->

</body>

</html>