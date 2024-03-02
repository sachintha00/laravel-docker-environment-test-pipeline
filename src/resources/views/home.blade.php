<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description">
    <meta content="coderthemes" name="author">
    <title> Timik Panel Design</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <link rel="apple-touch-icon" href="images/icon.png">
    <link rel="manifest" href="manifest.json">
    <link rel="shortcut icon" href="../files/favicon_white.ico" media="(prefers-color-scheme: dark)" />
    <link rel="shortcut icon" href="../files/favicon.ico" media="(prefers-color-scheme: light)" />

    <!-- App favicon -->
    <link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">

    <!-- App css -->
    <link href="{{asset('assets/css/app.min.css')}}" rel="stylesheet" type="text/css">

    <!-- Icons css -->
    <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css">

    <!-- Theme Config Js -->
    <script src="{{asset('assets/js/config.js')}}"></script>
</head>

<body>

    <div class="flex wrapper">

        <!-- Sidenav Menu -->
        <div class="app-menu">

            <!-- Sidenav Brand Logo -->
            <a href="index.html" class="logo-box">
                <!-- Light Brand Logo -->
                <div class="logo-light">
                    <img src="{{asset('assets/images/logo-light.png')}}" class="logo-lg h-6" alt="Light logo">
                    <img src="{{asset('assets/images/logo-sm.png')}}" class="logo-sm" alt="Small logo">
                </div>

                <!-- Dark Brand Logo -->
                <div class="logo-dark">
                    <img src="{{asset('assets/images/logo-dark.png')}}" class="logo-lg h-6" alt="Dark logo">
                    <img src="{{asset('assets/images/logo-sm.png')}}" class="logo-sm" alt="Small logo">
                </div>
            </a>

            <!-- Sidenav Menu Toggle Button -->
            <button id="button-hover-toggle" class="absolute top-5 end-2 rounded-full p-1.5">
                <span class="sr-only">Menu Toggle Button</span>
                <i class="mgc_round_line text-xl"></i>
            </button>

            <!-- <div class="row justify-content-center"> -->
                    <!-- Right Side Of Navbar -->
                    <!-- <ul class="navbar-nav ms-auto">
                        Authentication Links -->
                        <!-- @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul> --> 

            <!--- Menu -->
            <div class="srcollbar" data-simplebar>
                <ul class="menu" data-fc-type="accordion">
                    <li class="menu-title">Menu</li>

                    <li class="menu-item">
                        <a href="/home" class="menu-link">
                            <span class="menu-icon"><i class="mgc_home_3_line"></i></span>
                            <span class="menu-text"> Dashboard </span>
                        </a>
                    </li>

                    <li class="menu-title">Apps</li>

                    <li class="menu-item">
                        <a href="/newapp" class="menu-link">
                            <span class="menu-icon"><i class="mgc_box_3_line"></i></span>
                            <span class="menu-text"> Workspace </span>
                        </a>
                    </li>

                   

                    

                    <li class="menu-item">
                        <a href="javascript:void(0)" data-fc-type="collapse" class="menu-link">
                            <span class="menu-icon"><i class="mgc_building_2_line"></i></span>
                            <span class="menu-text"> Project </span>
                            <span class="menu-arrow"></span>
                        </a>

                        <ul class="sub-menu hidden">
                            <li class="menu-item">
                                <a href="apps-project-list.html" class="menu-link">
                                    <span class="menu-text">List</span>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="apps-project-detail.html" class="menu-link">
                                    <span class="menu-text">Detail</span>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="apps-project-create.html" class="menu-link">
                                    <span class="menu-text">Create</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    

                    <li class="menu-item">
                        <a href="/pricingSideNav" data-fc-type="collapse" class="menu-link">
                            <span class="menu-icon"><i class="mgc_box_3_line"></i></span>
                            <span class="menu-text"> Pricing </span>
                            <span class="menu-arrow"></span>
                        </a>

                       
                    </li>

                    

                    

                    <li class="menu-title">Documentation</li>

                    <li class="menu-item">
                        <a href="javascript:void(0)" data-fc-type="collapse" class="menu-link">
                            <span class="menu-icon"><i class="mgc_document_line"></i></span>
                            <span class="menu-text"> Documentation </span>
                            <span class="menu-arrow"></span>
                        </a>

                        <ul class="sub-menu hidden">
                            <li class="menu-item">
                                <a href="docs-introduction.html" class="menu-link">
                                    <span class="menu-text">Introduction</span>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="docs-installation.html" class="menu-link">
                                    <span class="menu-text">Installation</span>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="docs-customization.html" class="menu-link">
                                    <span class="menu-text">Customization</span>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="docs-changelog.html" class="menu-link">
                                    <span class="menu-text">Changelog</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <!-- Help Box Widget -->
                
            </div>
        </div>
        <!-- Sidenav Menu End  -->

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <div class="page-content">

            <!-- Topbar Start -->
            <header class="app-header flex items-center px-4 gap-3">
                <!-- Sidenav Menu Toggle Button -->
                <button id="button-toggle-menu" class="nav-link p-2">
                    <span class="sr-only">Menu Toggle Button</span>
                    <span class="flex items-center justify-center h-6 w-6">
                        <i class="mgc_menu_line text-xl"></i>
                    </span>
                </button>

                <!-- Topbar Brand Logo -->
                <a href="index.html" class="logo-box">
                    <!-- Light Brand Logo -->
                    <div class="logo-light">
                        <img src="{{asset('assets/images/logo-light.png')}}" class="logo-lg h-6" alt="Light logo">
                        <img src="{{asset('assets/images/logo-sm.png')}}" class="logo-sm" alt="Small logo">
                    </div>

                    <!-- Dark Brand Logo -->
                    <div class="logo-dark">
                        <img src="{{asset('assets/images/logo-dark.png')}}" class="logo-lg h-6" alt="Dark logo">
                        <img src="{{asset('assets/images/logo-sm.png')}}" class="logo-sm" alt="Small logo">
                    </div>
                </a>

                <!-- Topbar Search Modal Button -->
                <button type="button" data-fc-type="modal" data-fc-target="topbar-search-modal" class="nav-link p-2 me-auto">
                    <span class="sr-only">Search</span>
                    <span class="flex items-center justify-center h-6 w-6">
                        <i class="mgc_search_line text-2xl"></i>
                    </span>
                </button>

            
                <!-- Fullscreen Toggle Button -->
                <div class="md:flex hidden">
                    <button data-toggle="fullscreen" type="button" class="nav-link p-2">
                        <span class="sr-only">Fullscreen Mode</span>
                        <span class="flex items-center justify-center h-6 w-6">
                            <i class="mgc_fullscreen_line text-2xl"></i>
                        </span>
                    </button>
                </div>

                <!-- Notification Bell Button -->
                <div class="relative md:flex hidden">
                    <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button" class="nav-link p-2">
                        <span class="sr-only">View notifications</span>
                        <span class="flex items-center justify-center h-6 w-6">
                            <i class="mgc_notification_line text-2xl"></i>
                        </span>
                    </button>
                    <div class="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-80 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">

                        <div class="p-2 border-b border-dashed border-gray-200 dark:border-gray-700">
                            <div class="flex items-center justify-between">
                                <h6 class="text-sm"> Notification</h6>
                                <a href="javascript: void(0);" class="text-gray-500 underline">
                                    <small>Clear All</small>
                                </a>
                            </div>
                        </div>

                        <div class="p-4 h-80" data-simplebar>

                            <h5 class="text-xs text-gray-500 mb-2">Today</h5>

                            <a href="javascript:void(0);" class="block mb-4">
                                <div class="card-body">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <div class="flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-primary">
                                                <i class="mgc_message_3_line text-lg"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow truncate ms-2">
                                            <h5 class="text-sm font-semibold mb-1">Datacorp <small class="font-normal text-gray-500 ms-1">1 min ago</small></h5>
                                            <small class="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="javascript:void(0);" class="block mb-4">
                                <div class="card-body">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <div class="flex justify-center items-center h-9 w-9 rounded-full bg-info text-white">
                                                <i class="mgc_user_add_line text-lg"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow truncate ms-2">
                                            <h5 class="text-sm font-semibold mb-1">Admin <small class="font-normal text-gray-500 ms-1">1 hr ago</small></h5>
                                            <small class="noti-item-subtitle text-muted">New user registered</small>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="javascript:void(0);" class="block mb-4">
                                <div class="card-body">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <img src="{{asset('assets/images/users/avatar-2.jpg')}}" class="rounded-full h-9 w-9" alt="">
                                        </div>
                                        <div class="flex-grow truncate ms-2">
                                            <h5 class="text-sm font-semibold mb-1">Cristina Pride <small class="font-normal text-gray-500 ms-1">1 day ago</small></h5>
                                            <small class="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <h5 class="text-xs text-gray-500 mb-2">Yesterday</h5>

                            <a href="javascript:void(0);" class="block mb-4">
                                <div class="card-body">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <div class="flex justify-center items-center h-9 w-9 rounded-full bg-primary text-white">
                                                <i class="mgc_message_1_line text-lg"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow truncate ms-2">
                                            <h5 class="text-sm font-semibold mb-1">Datacorp</h5>
                                            <small class="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="javascript:void(0);" class="block">
                                <div class="card-body">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <img src="{{asset('assets/images/users/avatar-4.jpg')}}" class="rounded-full h-9 w-9" alt="">
                                        </div>
                                        <div class="flex-grow truncate ms-2">
                                            <h5 class="text-sm font-semibold mb-1">Karen Robinson</h5>
                                            <small class="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <a href="javascript:void(0);" class="p-2 border-t border-dashed border-gray-200 dark:border-gray-700 block text-center text-primary underline font-semibold">
                            View All
                        </a>
                    </div>
                </div>

                <!-- Light/Dark Toggle Button -->
                <div class="flex">
                    <button id="light-dark-mode" type="button" class="nav-link p-2">
                        <span class="sr-only">Light/Dark Mode</span>
                        <span class="flex items-center justify-center h-6 w-6">
                            <i class="mgc_moon_line text-2xl"></i>
                        </span>
                    </button>
                </div>

                <!-- Profile Dropdown Button -->
                <div class="relative">
                    <button data-fc-type="dropdown" data-fc-placement="bottom-end" type="button" class="nav-link">
                        <img src="{{asset('assets/images/users/user-6.jpg')}}" alt="user-image" class="rounded-full h-10">
                    </button>
                    <div class="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-44 z-50 transition-[margin,opacity] duration-300 mt-2 bg-white shadow-lg border rounded-lg p-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                        <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="pages-gallery.html">
                            <i class="mgc_pic_2_line  me-2"></i> 
                            <span>Gallery</span>
                        </a>
                        <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="apps-kanban.html">
                            <i class="mgc_task_2_line  me-2"></i> 
                            <span>Kanban</span>
                        </a>
                        <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="auth-login.html">
                            <i class="mgc_lock_line  me-2"></i> 
                            <span>Lock Screen</span>
                        </a>
                        <hr class="my-2 -mx-2 border-gray-200 dark:border-gray-700">
                        <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                            <i class="mgc_exit_line  me-2"></i> 
                            <span>
                            Log Out</span>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                            </form>
                        </a>
                    </div>
                </div>
            </header>
            <!-- Topbar End -->

            <!-- Topbar Search Modal -->
            <div>
                <div id="topbar-search-modal" class="fc-modal hidden w-full h-full fixed top-0 start-0 z-50">
                    <div class="fc-modal-open:opacity-100 fc-modal-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-12 sm:mx-auto">
                        <div class="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl transition-all dark:bg-slate-800">
                            <div class="relative">
                                <div class="pointer-events-none absolute top-3.5 start-4 text-gray-900 text-opacity-40 dark:text-gray-200">
                                    <i class="mgc_search_line text-xl"></i>
                                </div>
                                <input type="search" class="h-12 w-full border-0 bg-transparent ps-11 pe-4 text-gray-900 placeholder-gray-500 dark:placeholder-gray-300 dark:text-gray-200 focus:ring-0 sm:text-sm" placeholder="Search...">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main class="flex-grow p-6">

                <!-- Page Title Start -->
                <div class="flex justify-between items-center mb-6">
                    <h4 class="text-slate-900 dark:text-slate-200 text-lg font-medium">Dashboard</h4>

                    <div class="md:flex hidden items-center gap-2.5 text-sm font-semibold">
                        <div class="flex items-center gap-2">
                            <a href="#" class="text-sm font-medium text-slate-700 dark:text-slate-400">TPD</a>
                        </div>

                        <div class="flex items-center gap-2">
                            <i class="mgc_right_line text-lg flex-shrink-0 text-slate-400 rtl:rotate-180"></i>
                            <a href="#" class="text-sm font-medium text-slate-700 dark:text-slate-400">Menu</a>
                        </div>

                        <div class="flex items-center gap-2">
                            <i class="mgc_right_line text-lg flex-shrink-0 text-slate-400 rtl:rotate-180"></i>
                            <a href="#" class="text-sm font-medium text-slate-700 dark:text-slate-400" aria-current="page">Dashboard</a>
                        </div>
                    </div>
                </div>
                <!-- Page Title End -->

                <div class="grid 2xl:grid-cols-4 gap-6 mb-6">
                    
                    <div class="2xl:col-span-3">
                        <div class="grid xl:grid-cols-4 md:grid-cols-2 gap-6 mb-6">
                            <div class="card">
                                <div class="p-6">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h4 class="text-base mb-1 text-gray-600 dark:text-gray-400">Project Dashboard</h4>
                                            <p class="font-normal text-sm text-gray-400 truncate dark:text-gray-500">New Task Assign</p>
                                        </div>

                                        <div>
                                            <button class="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                                <i class="mgc_more_1_fill text-xl"></i>
                                            </button>

                                            <div class="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
                                                    <i class="mgc_add_circle_line"></i> Add
                                                </a>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
                                                    <i class="mgc_edit_line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:void(0)">
                                                    <i class="mgc_copy_2_line"></i> Copy
                                                </a>
                                                <div class="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="javascript:void(0)">
                                                    <i class="mgc_delete_line"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex items-end">
                                        <div class="flex-grow">
                                            <p class="text-[13px] text-gray-400 dark:text-gray-500 font-semibold"><i class="mgc_alarm_2_line"></i> 4 Hrs ago</p>
                                        </div>
                                        <div class="flex">
                                            <a href="javascript:void(0);">
                                                <img src="{{asset('assets/images/users/avatar-1.jpg')}}" class="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend">
                                            </a>
                                            <a href="javascript:void(0);" class="-ms-2">
                                                <img src="{{asset('assets/images/users/avatar-2.jpg')}}" class="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="p-6">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h4 class="text-base mb-1 text-gray-600 dark:text-gray-400">Admin Template</h4>
                                            <p class="font-normal text-sm text-gray-400 truncate dark:text-gray-500">New Task Assign</p>
                                        </div>
                                        <div>
                                            <button class="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                                <i class="mgc_more_1_fill text-xl"></i>
                                            </button>

                                            <div class="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
                                                    <i class="mgc_add_circle_line"></i> Add
                                                </a>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
                                                    <i class="mgc_edit_line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:void(0)">
                                                    <i class="mgc_copy_2_line"></i> Copy
                                                </a>
                                                <div class="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="javascript:void(0)">
                                                    <i class="mgc_delete_line"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex items-end">
                                        <div class="flex-grow">
                                            <p class="text-[13px] text-gray-400 dark:text-gray-500 font-semibold"><i class="mgc_alarm_2_line"></i> 3 Hrs ago</p>
                                        </div>
                                        <div class="flex">
                                            <a href="javascript:void(0);">
                                                <img src="{{asset('assets/images/users/avatar-3.jpg')}}" class="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend">
                                            </a>
                                            <a href="javascript:void(0);" class="-ms-2">
                                                <img src="{{asset('assets/images/users/avatar-4.jpg')}}" class="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="p-6">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h4 class="text-base mb-1 text-gray-600 dark:text-gray-400">Client Project</h4>
                                            <p class="font-normal text-sm text-gray-400 truncate dark:text-gray-500">New Task Assign</p>
                                        </div>
                                        <div>
                                            <button class="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                                <i class="mgc_more_1_fill text-xl"></i>
                                            </button>

                                            <div class="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
                                                    <i class="mgc_add_circle_line"></i> Add
                                                </a>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
                                                    <i class="mgc_edit_line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:void(0)">
                                                    <i class="mgc_copy_2_line"></i> Copy
                                                </a>
                                                <div class="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="javascript:void(0)">
                                                    <i class="mgc_delete_line"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex items-end">
                                        <div class="flex-grow">
                                            <p class="text-[13px] text-gray-400 dark:text-gray-500 font-semibold"><i class="mgc_alarm_2_line"></i> 5 Hrs ago</p>
                                        </div>
                                        <div class="flex">
                                            <a href="javascript:void(0);">
                                                <img src="{{asset('assets/images/users/avatar-5.jpg')}}" class="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend">
                                            </a>
                                            <a href="javascript:void(0);" class="-ms-2">
                                                <img src="{{asset('assets/images/users/avatar-6.jpg')}}" class="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="p-6">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h4 class="text-base mb-1 text-gray-600 dark:text-gray-400">Figma Design</h4>
                                            <p class="font-normal text-sm text-gray-400 truncate dark:text-gray-500">New Task Assign</p>
                                        </div>
                                        <div>
                                            <button class="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                                <i class="mgc_more_1_fill text-xl"></i>
                                            </button>

                                            <div class="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
                                                    <i class="mgc_add_circle_line"></i> Add
                                                </a>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
                                                    <i class="mgc_edit_line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:void(0)">
                                                    <i class="mgc_copy_2_line"></i> Copy
                                                </a>
                                                <div class="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
                                                <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="javascript:void(0)">
                                                    <i class="mgc_delete_line"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex items-end">
                                        <div class="flex-grow">
                                            <p class="text-[13px] text-gray-400 dark:text-gray-500 font-semibold"><i class="mgc_alarm_2_line"></i> 1 Day ago</p>
                                        </div>
                                        <div class="flex">
                                            <a href="javascript:void(0);">
                                                <img src="{{asset('assets/images/users/avatar-7.jpg')}}" class="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend">
                                            </a>
                                            <a href="javascript:void(0);" class="-ms-2">
                                                <img src="{{asset('assets/images/users/avatar-8.jpg')}}" class="rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700" alt="friend">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                    </div>

                    <div class="col-span-1">
                        <div class="card mb-6">
                            <div class="px-6 py-5 flex justify-between items-center">
                                <h4 class="header-title">Project Summary</h4>
                                <div>
                                    <button class="text-gray-600 dark:text-gray-400" data-fc-type="dropdown" data-fc-placement="left-start" type="button">
                                        <i class="mgc_more_1_fill text-xl"></i>
                                    </button>

                                    <div class="hidden fc-dropdown fc-dropdown-open:opacity-100 opacity-0 w-36 z-50 mt-2 transition-[margin,opacity] duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
                                        <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
                                            <i class="mgc_add_circle_line"></i> Add
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" href="javascript:void(0)">
                                            <i class="mgc_edit_line"></i> Edit
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:void(0)">
                                            <i class="mgc_copy_2_line"></i> Copy
                                        </a>
                                        <div class="h-px bg-gray-200 dark:bg-gray-700 my-2 -mx-2"></div>
                                        <a class="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-danger hover:bg-danger/5" href="javascript:void(0)">
                                            <i class="mgc_delete_line"></i> Delete
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-2 bg-warning/20 text-warning" role="alert">
                                <i class="mgc_folder_star_line me-1 text-lg align-baseline"></i> <b>38</b> Total Admin & Client Projects
                            </div>

                            <div class="p-6 space-y-3">
                                <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="w-12 h-12 flex justify-center items-center rounded-full text-primary bg-primary/25">
                                            <i class="mgc_group_line text-xl"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow">
                                        <h5 class="font-semibold mb-1">Project Discssion</h5>
                                        <p class="text-gray-400">6 Person</p>
                                    </div>
                                    <div>
                                        <button class="text-gray-400" data-fc-type="tooltip" data-fc-placement="top">
                                            <i class="mgc_information_line text-xl"></i>
                                        </button>
                                        <div class="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                                            Info <div class="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="w-12 h-12 flex justify-center items-center rounded-full text-warning bg-warning/25">
                                            <i class="mgc_compass_line text-xl"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow">
                                        <h5 class="fw-semibold my-0">In Progress</h5>
                                        <p>16 Projects</p>
                                    </div>
                                    <div>
                                        <button class="text-gray-400" data-fc-type="tooltip" data-fc-placement="top">
                                            <i class="mgc_information_line text-xl"></i>
                                        </button>
                                        <div class="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                                            Info <div class="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="w-12 h-12 flex justify-center items-center rounded-full text-danger bg-danger/25">
                                            <i class="mgc_check_circle_line text-xl"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow">
                                        <h5 class="fw-semibold my-0">Completed Projects</h5>
                                        <p>24</p>
                                    </div>
                                    <div>
                                        <button class="text-gray-400" data-fc-type="tooltip" data-fc-placement="top">
                                            <i class="mgc_information_line text-xl"></i>
                                        </button>
                                        <div class="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                                            Info <div class="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded px-3 py-2">
                                    <div class="flex-shrink-0 me-2">
                                        <div class="w-12 h-12 flex justify-center items-center rounded-full text-success bg-success/25">
                                            <i class="mgc_send_line text-xl"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow">
                                        <h5 class="fw-semibold my-0">Delivery Projects</h5>
                                        <p>20</p>
                                    </div>
                                    <div>
                                        <button class="text-gray-400" data-fc-type="tooltip" data-fc-placement="top">
                                            <i class="mgc_information_line text-xl"></i>
                                        </button>
                                        <div class="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                                            Info <div class="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" data-fc-arrow></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div> <!-- Grid End -->

       
            </main>

            <!-- Footer Start -->
            <footer class="footer h-16 flex items-center px-6 bg-white shadow dark:bg-gray-800">
                <div class="flex justify-center w-full gap-4">
                    <div>
                        <script>document.write(new Date().getFullYear())</script> © TPD  <a href="https://coderthemes.com/" target="_blank"></a>
                    </div>
                </div>
            </footer>
            <!-- Footer End -->

        </div>

        <!-- ============================================================== -->
        <!-- End Page content -->
        <!-- ============================================================== -->

    </div>

    <!-- Back to Top Button -->
    <button data-toggle="back-to-top" class="fixed hidden h-10 w-10 items-center justify-center rounded-full z-10 bottom-20 end-14 p-2.5 bg-primary cursor-pointer shadow-lg text-white">
        <i class="mgc_arrow_up_line text-lg"></i>
    </button>

    <!-- Theme Settings -->
    <div>
        <!-- Theme Setting Button -->
        <div class="fixed end-0 bottom-20">
            <button data-fc-type="offcanvas" data-fc-target="theme-customization" type="button" class="bg-white rounded-s-full shadow-lg p-2.5 ps-3 transition-all dark:bg-slate-800">
                <span class="sr-only">Setting</span>
                <span class="flex items-center justify-center animate-spin">
                    <i class="mgc_settings_4_line text-2xl"></i>
                </span>
            </button>
        </div>
    
        <!-- Theme Settings Offcanvas -->
        <div id="theme-customization" class="fc-offcanvas-open:translate-x-0 hidden translate-x-full rtl:-translate-x-full fixed inset-y-0 end-0
             transition-all duration-300 transform max-w-sm w-full z-50 bg-white border-s border-gray-900/10 dark:bg-gray-800 dark:border-white/10" tabindex="-1">
            <div class="h-16 flex items-center text-gray-800 dark:text-white border-b border-dashed border-gray-900/10 dark:border-white/10 px-6 gap-3">
                <h5 class="text-base grow">Theme Settings</h5>
                <button type="button" class="p-2" id="reset-layout"><i class="mgc_refresh_1_line text-xl"></i></button>
                <button type="button" data-fc-dismiss><i class="mgc_close_line text-xl"></i></button>
            </div>
    
            <div class="h-[calc(100vh-64px)]" data-simplebar>
                <div class="divide-y divide-dashed divide-slate-900/10  dark:divide-white/10">
                    <div class="p-6">
                        <h5 class="font-semibold text-sm mb-3">Theme</h5>
                        <div class="grid grid-cols-3 gap-2">
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-mode" id="layout-color-light" value="light">
                                <label class="form-label rounded-md" for="layout-color-light">
                                    <span class="flex items-center justify-center px-4 py-3">
                                        <i class="mgc_sun_line text-2xl"></i>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Light </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-mode" id="layout-color-dark" value="dark">
                                <label class="form-label rounded-md" for="layout-color-dark">
                                    <span class="flex items-center justify-center px-4 py-3">
                                        <i class="mgc_moon_line text-2xl"></i>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Dark </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="p-6">
                        <h5 class="font-semibold text-sm mb-3">Direction</h5>
                        <div class="grid grid-cols-3 gap-2">
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="dir" id="direction-ltr" value="ltr">
                                <label class="form-label rounded-md" for="direction-ltr">
                                    <span class="flex items-center justify-center px-4 py-3">
                                        <i class="mgc_align_left_line text-2xl"></i>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> LTR </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="dir" id="direction-rtl" value="rtl">
                                <label class="form-label rounded-md" for="direction-rtl">
                                    <span class="flex items-center justify-center px-4 py-3">
                                        <i class="mgc_align_right_line text-2xl"></i>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> RTL </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="p-6 2xl:block hidden">
                        <h5 class="font-semibold text-sm mb-3">Content Width</h5>
                        <div class="grid grid-cols-3 gap-2">
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-layout-width" id="layout-mode-default" value="default">
                                <label class="form-label rounded-md" for="layout-mode-default">
                                    <span class="flex items-center justify-center px-4 py-3">
                                        <i class="mgc_fullscreen_2_line text-2xl rotate-45"></i>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Fluid </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-layout-width" id="layout-mode-boxed" value="boxed">
                                <label class="form-label rounded-md" for="layout-mode-boxed">
                                    <span class="flex items-center justify-center px-4 py-3">
                                        <i class="mgc_fullscreen_exit_2_line text-2xl rotate-45"></i>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Boxed </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="p-6">
                        <h5 class="font-semibold text-sm mb-3">Sidenav View</h5>
                        <div class="grid grid-cols-3 gap-3">
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-sidenav-view" id="sidenav-view-default" value="default">
                                <label class="form-label rounded-md" for="sidenav-view-default">
                                    <span class="flex h-16 overflow-hidden">
                                        <span class="block w-8 bg-gray-100 dark:bg-gray-800">
                                            <span class="mt-1.5 mx-1.5 block space-y-1">
                                                <span class="h-1 block rounded-sm mb-2.5 bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="h-1 block rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="h-1 block rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="h-1 block rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="h-1 block rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="h-1 block rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                            </span>
                                        </span>
                                        <span class="flex flex-col flex-auto border-s border-gray-200 dark:border-gray-700">
                                            <span class="h-3 bg-gray-100 dark:bg-gray-800">
                                                <span class="flex items-center justify-end h-full mr-1.5">
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                </span>
                                            </span>
                                            <span class="flex flex-auto border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"></span>
                                        </span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Default </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-sidenav-view" id="sidenav-view-hover" value="hover">
                                <label class="form-label rounded-md" for="sidenav-view-hover">
                                    <span class="flex h-16 overflow-hidden">
                                        <span class="w-3 bg-gray-100 dark:bg-gray-800">
                                            <span class="w-1.5 h-1.5 mt-1 mx-auto rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                            <span class="flex flex-col items-center w-full mt-1.5 space-y-1">
                                                <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                            </span>
                                        </span>
                                        <span class="flex flex-col flex-auto border-s border-gray-200 dark:border-gray-700">
                                            <span class="h-3 bg-gray-100 dark:bg-gray-800">
                                                <span class="flex items-center justify-end h-full mr-1.5">
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                </span>
                                            </span>
                                            <span class="flex flex-auto border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"></span>
                                        </span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Hover </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-sidenav-view" id="sidenav-view-hover-active" value="hover-active">
                                <label class="form-label rounded-md" for="sidenav-view-hover-active">
                                    <span class="flex h-16 overflow-hidden">
                                        <span class="w-8 bg-gray-100 dark:bg-gray-800">
                                            <span class="mt-1.5 mx-1.5 block space-y-1">
                                                <span class="flex mb-2.5 gap-1">
                                                    <span class="h-1 block w-full rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="h-1 block w-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                </span>
                                                <span class="h-1 block rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="h-1 block rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="h-1 block rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="h-1 block rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="h-1 block rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                            </span>
                                        </span>
                                        <span class="flex flex-col flex-auto border-s border-gray-200 dark:border-gray-700">
                                            <span class="h-3 bg-gray-100 dark:bg-gray-800">
                                                <span class="flex items-center justify-end h-full mr-1.5">
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                </span>
                                            </span>
                                            <span class="flex flex-auto border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"></span>
                                        </span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Hover Active </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-sidenav-view" id="sidenav-view-sm" value="sm">
                                <label class="form-label rounded-md" for="sidenav-view-sm">
                                    <span class="flex h-16 overflow-hidden">
                                        <span class="w-3 bg-gray-100 dark:bg-gray-800">
                                            <span class="w-1.5 h-1.5 mt-1 mx-auto rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                            <span class="flex flex-col items-center w-full mt-1.5 space-y-1">
                                                <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                            </span>
                                        </span>
                                        <span class="flex flex-col flex-auto border-s border-gray-200 dark:border-gray-700">
                                            <span class="h-3 bg-gray-100 dark:bg-gray-800">
                                                <span class="flex items-center h-full mr-1.5">
                                                    <span class="grow">
                                                        <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    </span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                </span>
                                            </span>
                                            <span class="flex flex-auto border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"></span>
                                        </span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Small </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-sidenav-view" id="sidenav-view-md" value="md">
                                <label class="form-label rounded-md" for="sidenav-view-md">
                                    <span class="flex h-16 rounded-md overflow-hidden">
                                        <span class="w-4 bg-gray-100 dark:bg-gray-800">
                                            <span class="w-2 h-2 mt-2 mx-auto rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                            <span class="flex flex-col items-center w-full mt-2 space-y-1">
                                                <span class="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                <span class="w-2 h-2 rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                            </span>
                                        </span>
                                        <span class="flex flex-col flex-auto border-s border-gray-200 dark:border-gray-700">
                                            <span class="h-3 bg-gray-100 dark:bg-gray-800">
                                                <span class="flex items-center h-full mr-1.5">
                                                    <span class="grow">
                                                        <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    </span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                </span>
                                            </span>
                                            <span class="flex flex-auto border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"></span>
                                        </span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Compact </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-sidenav-view" id="sidenav-view-mobile" value="mobile">
                                <label class="form-label rounded-md" for="sidenav-view-mobile">
                                    <span class="flex h-16 overflow-hidden">
                                        <span class="flex flex-col flex-auto">
                                            <span class="h-3 bg-gray-100 dark:bg-gray-800">
                                                <span class="flex items-center h-full mr-1.5">
                                                    <span class="w-1.5 h-1.5  ms-1 rounded-sm bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ms-1  rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ms-auto rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ms-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ms-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ms-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                </span>
                                            </span>
                                            <span class="flex flex-auto border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"></span>
                                        </span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Mobile </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-sidenav-view" id="sidenav-view-hidden" value="hidden">
                                <label class="form-label rounded-md" for="sidenav-view-hidden">
                                    <span class="flex h-16 overflow-hidden">
                                        <span class="flex flex-col flex-auto">
                                            <span class="h-3 bg-gray-100 dark:bg-gray-800">
                                                <span class="flex flex-auto items-center h-full me-1.5">
                                                    <span class="w-1 h-1 block ms-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ms-auto rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ms-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ms-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                    <span class="w-1 h-1 block ms-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                                                </span>
                                            </span>
                                            <span class="flex flex-auto border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"></span>
                                        </span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Hidden </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="p-6">
                        <h5 class="font-semibold text-sm mb-3">Menu Color</h5>
                        <div class="grid grid-cols-4 gap-2">
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-menu-color" id="menu-color-light" value="light">
                                <label class="form-label rounded-md" for="menu-color-light">
                                    <span class="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-900">
                                        <span class="w-5 h-5 shadow-lg rounded-full bg-white"></span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Light </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-menu-color" id="menu-color-dark" value="dark">
                                <label class="form-label rounded-md" for="menu-color-dark">
                                    <span class="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-900">
                                        <span class="w-5 h-5 shadow-lg rounded-full bg-dark"></span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Dark </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-menu-color" id="menu-color-brand" value="brand">
                                <label class="form-label rounded-md" for="menu-color-brand">
                                    <span class="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-900">
                                        <span class="w-5 h-5 shadow-lg rounded-full bg-primary"></span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Brand </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-menu-color" id="menu-color-gradient" value="gradient">
                                <label class="form-label rounded-md" for="menu-color-gradient">
                                    <span class="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-900">
                                        <span class="w-5 h-5 shadow-lg rounded-full" style="background: linear-gradient(135deg, #6379c3 0%, #546ee5 60%);"></span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Gradient </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="p-6">
                        <h5 class="font-semibold text-sm mb-3">Topbar Color</h5>
                        <div class="grid grid-cols-4 gap-2">
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-topbar-color" id="topbar-color-light" value="light">
                                <label class="form-label rounded-md" for="topbar-color-light">
                                    <span class="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-900">
                                        <span class="w-5 h-5 shadow-lg rounded-full bg-white"></span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Light </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-topbar-color" id="topbar-color-dark" value="dark">
                                <label class="form-label rounded-md" for="topbar-color-dark">
                                    <span class="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-900">
                                        <span class="w-5 h-5 shadow-lg rounded-full bg-dark"></span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Dark </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-topbar-color" id="topbar-color-brand" value="brand">
                                <label class="form-label rounded-md" for="topbar-color-brand">
                                    <span class="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-900">
                                        <span class="w-5 h-5 shadow-lg rounded-full bg-primary"></span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Brand </div>
                            </div>
    
                            <div class="card-radio">
                                <input class="form-radio" type="radio" name="data-topbar-color" id="topbar-color-gradient" value="gradient">
                                <label class="form-label rounded-md" for="topbar-color-gradient">
                                    <span class="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-900">
                                        <span class="w-5 h-5 shadow-lg rounded-full" style="background: linear-gradient(135deg, #6379c3 0%, #546ee5 60%);"></span>
                                    </span>
                                </label>
                                <div class="mt-1 text-md font-medium text-center text-gray-600 dark:text-gray-300"> Gradient </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="p-6">
                        <h5 class="font-semibold text-sm mb-3">Layout Position</h5>
                        <div class="flex btn-radio">
                            <input type="radio" class="form-radio hidden" name="data-layout-position" id="layout-position-fixed" value="fixed">
                            <label class="btn rounded-e-none bg-gray-100 dark:bg-gray-700" for="layout-position-fixed">Fixed</label>
                            <input type="radio" class="form-radio hidden" name="data-layout-position" id="layout-position-scrollable" value="scrollable">
                            <label class="btn rounded-s-none bg-gray-100 dark:bg-gray-700" for="layout-position-scrollable">Scrollable</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Plugin Js -->
    <script src="{{asset('assets/libs/simplebar/simplebar.min.js')}}"></script>
    <script src="{{asset('assets/libs/feather-icons/feather.min.js')}}"></script>
    <script src="{{asset('assets/libs/%40frostui/tailwindcss/frostui.js')}}"></script>

    <!-- App Js -->
    <script src="{{asset('assets/js/app.js')}}"></script>

    <!-- Apexcharts js -->
    <script src="{{asset('assets/libs/apexcharts/apexcharts.min.js')}}"></script>

    <!-- Dashboard Project Page js -->
    <script src="{{asset('assets/js/pages/dashboard.js')}}"></script>

</body>

</html>