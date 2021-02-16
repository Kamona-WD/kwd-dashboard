<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>K-WD Dashboard | Mini + One Columns Sidebar</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../build/css/tailwind.css" />
    <script src="https://cdn.jsdelivr.net/gh/alpine-collective/alpine-magic-helpers@0.5.x/dist/component.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" defer></script>
  </head>
  <body>
    <div
      x-data="setup()"
      x-init="$refs.loading.classList.add('hidden'); setColors(color);"
      :class="{ 'dark': isDark}"
      @resize.window="watchScreen()"
    >
      <div class="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
        <!-- Loading screen -->
        <div
          x-ref="loading"
          class="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-primary-darker"
        >
          Loading.....
        </div>

        <!-- Sidebar -->
        <!-- Backdrop -->
        <div
          x-show="isSidebarOpen"
          @click="isSidebarOpen = false"
          class="fixed inset-0 z-10 bg-primary-darker lg:hidden"
          style="opacity: 0.5"
          aria-hidden="true"
        ></div>

        <!-- Sidebar content -->
        <aside
          x-show="isSidebarOpen"
          x-transition:enter="transition-all transform duration-300 ease-in-out"
          x-transition:enter-start="-translate-x-full opacity-0"
          x-transition:enter-end="translate-x-0 opacity-100"
          x-transition:leave="transition-all transform duration-300 ease-in-out"
          x-transition:leave-start="translate-x-0 opacity-100"
          x-transition:leave-end="-translate-x-full opacity-0"
          x-ref="sidebar"
          @keydown.escape="window.innerWidth <= 1024 ? isSidebarOpen = false : ''"
          tabindex="-1"
          class="fixed inset-y-0 z-10 flex flex-shrink-0 overflow-hidden bg-white border-r lg:static dark:border-primary-darker dark:bg-darker focus:outline-none"
        >
          <!-- Mini column -->
          <div class="flex flex-col flex-shrink-0 h-full px-2 py-4 border-r dark:border-primary-darker">
            <!-- Brand -->
            <div class="flex-shrink-0">
              <a
                href="../index.html"
                class="inline-block text-xl font-bold tracking-wider uppercase text-primary-dark dark:text-light"
              >
                K-WD
              </a>
            </div>
            <div class="flex flex-col items-center justify-center flex-1 space-y-4">
              <!-- Notification button -->
              <button
                @click="openNotificationsPanel"
                class="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
              >
                <span class="sr-only">Open Notification panel</span>
                <svg
                  class="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <!-- Search button -->
              <button
                @click="openSearchPanel"
                class="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
              >
                <span class="sr-only">Open search panel</span>
                <svg
                  class="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <!-- Settings button -->
              <button
                @click="openSettingsPanel"
                class="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
              >
                <span class="sr-only">Open settings panel</span>
                <svg
                  class="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
            <!-- Mini column footer -->
            <div class="relative flex items-center justify-center flex-shrink-0">
              <!-- User avatar button -->
              <div class="" x-data="{ open: false }">
                <button
                  @click="open = !open; $nextTick(() => { if(open){ $refs.userMenu.focus() } })"
                  type="button"
                  aria-haspopup="true"
                  :aria-expanded="open ? 'true' : 'false'"
                  class="block transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
                >
                  <span class="sr-only">User menu</span>
                  <img class="w-10 h-10 rounded-full" src="../build/images/avatar.jpg" alt="Ahmed Kamel" />
                </button>

                <!-- User dropdown menu -->
                <div
                  x-show="open"
                  x-ref="userMenu"
                  x-transition:enter="transition-all transform ease-out"
                  x-transition:enter-start="-translate-y-1/2 opacity-0"
                  x-transition:enter-end="translate-y-0 opacity-100"
                  x-transition:leave="transition-all transform ease-in"
                  x-transition:leave-start="translate-y-0 opacity-100"
                  x-transition:leave-end="-translate-y-1/2 opacity-0"
                  @click.away="open = false"
                  @keydown.escape="open = false"
                  class="absolute w-56 py-1 mb-4 bg-white rounded-md shadow-lg min-w-max left-5 bottom-full ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
                  tabindex="-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-label="User menu"
                >
                  <a
                    href="#"
                    role="menuitem"
                    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    role="menuitem"
                    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    role="menuitem"
                    class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Sidebar links -->
          <nav aria-label="Main" class="flex-1 w-64 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
            <!-- Dashboards links -->
            <div x-data="{ isActive: false, open: false}">
              <!-- active & hover classes 'bg-primary-100 dark:bg-primary' -->
              <a
                href="#"
                @click="$event.preventDefault(); open = !open"
                class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                :class="{'bg-primary-100 dark:bg-primary': isActive || open}"
                role="button"
                aria-haspopup="true"
                :aria-expanded="(open || isActive) ? 'true' : 'false'"
              >
                <span aria-hidden="true">
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
                <span class="ml-2 text-sm"> Dashboards </span>
                <span class="ml-auto" aria-hidden="true">
                  <!-- active class 'rotate-180' -->
                  <svg
                    class="w-4 h-4 transition-transform transform"
                    :class="{ 'rotate-180': open }"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>
              <div role="menu" x-show="open" class="mt-2 space-y-2 px-7" aria-label="Dashboards">
                <!-- active & hover classes 'text-gray-700 dark:text-light' -->
                <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
                <a
                  href="../index.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                >
                  Default
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Project Mangement (soon)
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  E-Commerce (soon)
                </a>
              </div>
            </div>

            <!-- Components links -->
            <div x-data="{ isActive: false, open: false }">
              <!-- active classes 'bg-primary-100 dark:bg-primary' -->
              <a
                href="#"
                @click="$event.preventDefault(); open = !open"
                class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                :class="{ 'bg-primary-100 dark:bg-primary': isActive || open }"
                role="button"
                aria-haspopup="true"
                :aria-expanded="(open || isActive) ? 'true' : 'false'"
              >
                <span aria-hidden="true">
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </span>
                <span class="ml-2 text-sm"> Components </span>
                <span aria-hidden="true" class="ml-auto">
                  <!-- active class 'rotate-180' -->
                  <svg
                    class="w-4 h-4 transition-transform transform"
                    :class="{ 'rotate-180': open }"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>
              <div x-show="open" class="mt-2 space-y-2 px-7" role="menu" arial-label="Components">
                <!-- active & hover classes 'text-gray-700 dark:text-light' -->
                <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                >
                  Alerts (soon)
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                >
                  Buttons (soon)
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Cards (soon)
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Dropdowns (soon)
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Forms (soon)
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Lists (soon)
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Modals (soon)
                </a>
              </div>
            </div>

            <!-- Pages links -->
            <div x-data="{ isActive: false, open: false }">
              <!-- active classes 'bg-primary-100 dark:bg-primary' -->
              <a
                href="#"
                @click="$event.preventDefault(); open = !open"
                class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                :class="{ 'bg-primary-100 dark:bg-primary': isActive || open }"
                role="button"
                aria-haspopup="true"
                :aria-expanded="(open || isActive) ? 'true' : 'false'"
              >
                <span aria-hidden="true">
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span class="ml-2 text-sm"> Pages </span>
                <span aria-hidden="true" class="ml-auto">
                  <!-- active class 'rotate-180' -->
                  <svg
                    class="w-4 h-4 transition-transform transform"
                    :class="{ 'rotate-180': open }"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>
              <div x-show="open" class="mt-2 space-y-2 px-7" role="menu" arial-label="Pages">
                <!-- active & hover classes 'text-gray-700 dark:text-light' -->
                <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
                <a
                  href="../pages/blank.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                >
                  Blank
                </a>
                <a
                  href="../pages/404.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                >
                  404
                </a>
                <a
                  href="../pages/500.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                >
                  500
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                >
                  Profile (soon)
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Pricing (soon)
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Kanban (soon)
                </a>
                <a
                  href="#"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Feed (soon)
                </a>
              </div>
            </div>

            <!-- Authentication links -->
            <div x-data="{ isActive: false, open: false}">
              <!-- active & hover classes 'bg-primary-100 dark:bg-primary' -->
              <a
                href="#"
                @click="$event.preventDefault(); open = !open"
                class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                :class="{'bg-primary-100 dark:bg-primary': isActive || open}"
                role="button"
                aria-haspopup="true"
                :aria-expanded="(open || isActive) ? 'true' : 'false'"
              >
                <span aria-hidden="true">
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="ml-2 text-sm"> Authentication </span>
                <span aria-hidden="true" class="ml-auto">
                  <!-- active class 'rotate-180' -->
                  <svg
                    class="w-4 h-4 transition-transform transform"
                    :class="{ 'rotate-180': open }"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>
              <div x-show="open" class="mt-2 space-y-2 px-7" role="menu" aria-label="Authentication">
                <!-- active & hover classes 'text-gray-700 dark:text-light' -->
                <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
                <a
                  href="../auth/register.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Register
                </a>
                <a
                  href="../auth/login.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Login
                </a>
                <a
                  href="../auth/forgot-password.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Forgot Password
                </a>
                <a
                  href="../auth/reset-password.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
                >
                  Reset Password
                </a>
              </div>
            </div>

            <!-- Layouts links -->
            <div x-data="{ isActive: true, open: true}">
              <!-- active & hover classes 'bg-primary-100 dark:bg-primary' -->
              <a
                href="#"
                @click="$event.preventDefault(); open = !open"
                class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary"
                :class="{'bg-primary-100 dark:bg-primary': isActive || open}"
                role="button"
                aria-haspopup="true"
                :aria-expanded="(open || isActive) ? 'true' : 'false'"
              >
                <span aria-hidden="true">
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </span>
                <span class="ml-2 text-sm"> Layouts </span>
                <span aria-hidden="true" class="ml-auto">
                  <!-- active class 'rotate-180' -->
                  <svg
                    class="w-4 h-4 transition-transform transform"
                    :class="{ 'rotate-180': open }"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </a>
              <div x-show="open" class="mt-2 space-y-2 px-7" role="menu" aria-label="Layouts">
                <!-- active & hover classes 'text-gray-700 dark:text-light' -->
                <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
                <a
                  href="two-columns-sidebar.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                >
                  Two Columns Sidebar
                </a>
                <a
                  href="two-columns-sidebar.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
                >
                  Mini + One Columns Sidebar
                </a>
                <a
                  href="mini-column-sidebar.html"
                  role="menuitem"
                  class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                >
                  Mini Column Sidebar
                </a>
              </div>
            </div>
          </nav>
        </aside>

        <!-- Sidebar button -->
        <div class="fixed flex items-center space-x-4 top-5 right-10 lg:hidden">
          <button
            @click="isSidebarOpen = true; $nextTick(() => { $refs.sidebar.focus() })"
            class="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:ring"
          >
            <span class="sr-only">Toggle main manu</span>
            <span aria-hidden="true">
              <svg
                x-show="!isSidebarOpen"
                class="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                x-show="isSidebarOpen"
                class="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        <!-- Main content -->
        <main class="flex-1">
          <div
            class="flex flex-col items-center justify-center flex-1 h-full min-h-screen p-4 overflow-x-hidden overflow-y-auto"
          >
            <h1 class="mb-4 text-2xl font-semibold text-center md:text-3xl">Mini + One Columns Sidebar</h1>
            <div class="space-y-4">
              <div class="relative flex p-1 space-x-1 bg-white shadow-md w-80 h-72 dark:bg-darker">
                <div class="w-6 h-full bg-gray-200 dark:bg-dark"></div>
                <div class="w-16 h-full bg-gray-200 dark:bg-dark"></div>
                <div class="flex-1 h-full bg-gray-100 dark:bg-dark"></div>
              </div>
            </div>
          </div>
        </main>

        <!-- Panels -->

        <!-- Settings Panel -->
        <!-- Backdrop -->
        <div
          x-transition:enter="transition duration-300 ease-in-out"
          x-transition:enter-start="opacity-0"
          x-transition:enter-end="opacity-100"
          x-transition:leave="transition duration-300 ease-in-out"
          x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0"
          x-show="isSettingsPanelOpen"
          @click="isSettingsPanelOpen = false"
          class="fixed inset-0 z-10 bg-primary-darker"
          style="opacity: 0.5"
          aria-hidden="true"
        ></div>
        <!-- Panel -->
        <section
          x-transition:enter="transition duration-300 ease-in-out transform sm:duration-500"
          x-transition:enter-start="translate-x-full"
          x-transition:enter-end="translate-x-0"
          x-transition:leave="transition duration-300 ease-in-out transform sm:duration-500"
          x-transition:leave-start="translate-x-0"
          x-transition:leave-end="translate-x-full"
          x-ref="settingsPanel"
          tabindex="-1"
          x-show="isSettingsPanelOpen"
          @keydown.escape="isSettingsPanelOpen = false"
          class="fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
          aria-labelledby="settinsPanelLabel"
        >
          <div class="absolute left-0 p-2 transform -translate-x-full">
            <!-- Close button -->
            <button
              @click="isSettingsPanelOpen = false"
              class="p-2 text-white rounded-md focus:outline-none focus:ring"
            >
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- Panel content -->
          <div class="flex flex-col h-screen">
            <!-- Panel header -->
            <div
              class="flex flex-col items-center justify-center flex-shrink-0 px-4 py-8 space-y-4 border-b dark:border-primary-dark"
            >
              <span aria-hidden="true" class="text-gray-500 dark:text-primary">
                <svg
                  class="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </span>
              <h2 id="settinsPanelLabel" class="text-xl font-medium text-gray-500 dark:text-light">Settings</h2>
            </div>
            <!-- Content -->
            <div class="flex-1 overflow-hidden hover:overflow-y-auto">
              <!-- Theme -->
              <div class="p-4 space-y-4 md:p-8">
                <h6 class="text-lg font-medium text-gray-400 dark:text-light">Mode</h6>
                <div class="flex items-center space-x-8">
                  <!-- Light button -->
                  <button
                    @click="setLightTheme"
                    class="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark"
                    :class="{ 'border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100': !isDark, 'text-gray-500 dark:text-primary-light': isDark }"
                  >
                    <span>
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </span>
                    <span>Light</span>
                  </button>

                  <!-- Dark button -->
                  <button
                    @click="setDarkTheme"
                    class="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark"
                    :class="{ 'border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100': isDark, 'text-gray-500 dark:text-primary-light': !isDark }"
                  >
                    <span>
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    </span>
                    <span>Dark</span>
                  </button>
                </div>
              </div>

              <!-- Colors -->
              <div class="p-4 space-y-4 md:p-8">
                <h6 class="text-lg font-medium text-gray-400 dark:text-light">Colors</h6>
                <div>
                  <button
                    @click="setColors('cyan')"
                    class="w-10 h-10 rounded-full"
                    style="background-color: var(--color-cyan)"
                  ></button>
                  <button
                    @click="setColors('teal')"
                    class="w-10 h-10 rounded-full"
                    style="background-color: var(--color-teal)"
                  ></button>
                  <button
                    @click="setColors('green')"
                    class="w-10 h-10 rounded-full"
                    style="background-color: var(--color-green)"
                  ></button>
                  <button
                    @click="setColors('fuchsia')"
                    class="w-10 h-10 rounded-full"
                    style="background-color: var(--color-fuchsia)"
                  ></button>
                  <button
                    @click="setColors('blue')"
                    class="w-10 h-10 rounded-full"
                    style="background-color: var(--color-blue)"
                  ></button>
                  <button
                    @click="setColors('violet')"
                    class="w-10 h-10 rounded-full"
                    style="background-color: var(--color-violet)"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Notification panel -->
        <!-- Backdrop -->
        <div
          x-transition:enter="transition duration-300 ease-in-out"
          x-transition:enter-start="opacity-0"
          x-transition:enter-end="opacity-100"
          x-transition:leave="transition duration-300 ease-in-out"
          x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0"
          x-show="isNotificationsPanelOpen"
          @click="isNotificationsPanelOpen = false"
          class="fixed inset-0 z-10 bg-primary-darker"
          style="opacity: 0.5"
          aria-hidden="true"
        ></div>
        <!-- Panel -->
        <section
          x-transition:enter="transition duration-300 ease-in-out transform sm:duration-500"
          x-transition:enter-start="-translate-x-full"
          x-transition:enter-end="translate-x-0"
          x-transition:leave="transition duration-300 ease-in-out transform sm:duration-500"
          x-transition:leave-start="translate-x-0"
          x-transition:leave-end="-translate-x-full"
          x-ref="notificationsPanel"
          x-show="isNotificationsPanelOpen"
          @keydown.escape="isNotificationsPanelOpen = false"
          tabindex="-1"
          aria-labelledby="notificationPanelLabel"
          class="fixed inset-y-0 z-20 w-full max-w-xs bg-white dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
        >
          <div class="absolute right-0 p-2 transform translate-x-full">
            <!-- Close button -->
            <button
              @click="isNotificationsPanelOpen = false"
              class="p-2 text-white rounded-md focus:outline-none focus:ring"
            >
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex flex-col h-screen" x-data="{ activeTabe: 'action' }">
            <!-- Panel header -->
            <div class="flex-shrink-0">
              <div class="flex items-center justify-between px-4 pt-4 border-b dark:border-primary-darker">
                <h2 id="notificationPanelLabel" class="pb-4 font-semibold">Notifications</h2>
                <div class="space-x-2">
                  <button
                    @click.prevent="activeTabe = 'action'"
                    class="px-px pb-4 transition-all duration-200 transform translate-y-px border-b focus:outline-none"
                    :class="{'border-primary-dark dark:border-primary': activeTabe == 'action', 'border-transparent': activeTabe != 'action'}"
                  >
                    Action
                  </button>
                  <button
                    @click.prevent="activeTabe = 'user'"
                    class="px-px pb-4 transition-all duration-200 transform translate-y-px border-b focus:outline-none"
                    :class="{'border-primary-dark dark:border-primary': activeTabe == 'user', 'border-transparent': activeTabe != 'user'}"
                  >
                    User
                  </button>
                </div>
              </div>
            </div>

            <!-- Panel content (tabs) -->
            <div class="flex-1 pt-4 overflow-y-hidden hover:overflow-y-auto">
              <!-- Action tab -->
              <div class="space-y-4" x-show.transition.in="activeTabe == 'action'">
                <p class="px-4">Action tab content</p>
                <!--  -->
                <!-- Action tab content -->
                <!--  -->
              </div>

              <!-- User tab -->
              <div class="space-y-4" x-show.transition.in="activeTabe == 'user'">
                <p class="px-4">User tab content</p>
                <!--  -->
                <!-- User tab content -->
                <!--  -->
              </div>
            </div>
          </div>
        </section>

        <!-- Search panel -->
        <!-- Backdrop -->
        <div
          x-transition:enter="transition duration-300 ease-in-out"
          x-transition:enter-start="opacity-0"
          x-transition:enter-end="opacity-100"
          x-transition:leave="transition duration-300 ease-in-out"
          x-transition:leave-start="opacity-100"
          x-transition:leave-end="opacity-0"
          x-show="isSearchPanelOpen"
          @click="isSearchPanelOpen = false"
          class="fixed inset-0 z-10 bg-primary-darker"
          style="opacity: 0.5"
          aria-hidden="ture"
        ></div>
        <!-- Panel -->
        <section
          x-transition:enter="transition duration-300 ease-in-out transform sm:duration-500"
          x-transition:enter-start="-translate-x-full"
          x-transition:enter-end="translate-x-0"
          x-transition:leave="transition duration-300 ease-in-out transform sm:duration-500"
          x-transition:leave-start="translate-x-0"
          x-transition:leave-end="-translate-x-full"
          x-show="isSearchPanelOpen"
          @keydown.escape="isSearchPanelOpen = false"
          class="fixed inset-y-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
        >
          <div class="absolute right-0 p-2 transform translate-x-full">
            <!-- Close button -->
            <button @click="isSearchPanelOpen = false" class="p-2 text-white rounded-md focus:outline-none focus:ring">
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h2 class="sr-only">Search panel</h2>
          <!-- Panel content -->
          <div class="flex flex-col h-screen">
            <!-- Panel header (Search input) -->
            <div
              class="relative flex-shrink-0 px-4 py-8 text-gray-400 border-b dark:border-primary-darker dark:focus-within:text-light focus-within:text-gray-700"
            >
              <span class="absolute inset-y-0 inline-flex items-center px-4">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                x-ref="searchInput"
                type="text"
                class="w-full py-2 pl-10 pr-4 border rounded-full dark:bg-dark dark:border-transparent dark:text-light focus:outline-none focus:ring"
                placeholder="Search..."
              />
            </div>

            <!-- Panel content (Search result) -->
            <div class="flex-1 px-4 pb-4 space-y-4 overflow-y-hidden h hover:overflow-y-auto">
              <h3 class="py-2 text-sm font-semibold text-gray-600 dark:text-light">History</h3>
              <p class="px=4">Search resault</p>
              <!--  -->
              <!-- Search content -->
              <!--  -->
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- All javascript code in this project for now is just for demo DON'T RELY ON IT  -->
    <script>
      const setup = () => {
        const getTheme = () => {
          if (window.localStorage.getItem('dark')) {
            return JSON.parse(window.localStorage.getItem('dark'))
          }
          return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        }

        const setTheme = (value) => {
          window.localStorage.setItem('dark', value)
        }

        const getColor = () => {
          if (window.localStorage.getItem('color')) {
            return window.localStorage.getItem('color')
          }
          return 'cyan'
        }

        const setColors = (color) => {
          const root = document.documentElement
          root.style.setProperty('--color-primary', `var(--color-${color})`)
          root.style.setProperty('--color-primary-50', `var(--color-${color}-50)`)
          root.style.setProperty('--color-primary-100', `var(--color-${color}-100)`)
          root.style.setProperty('--color-primary-light', `var(--color-${color}-light)`)
          root.style.setProperty('--color-primary-lighter', `var(--color-${color}-lighter)`)
          root.style.setProperty('--color-primary-dark', `var(--color-${color}-dark)`)
          root.style.setProperty('--color-primary-darker', `var(--color-${color}-darker)`)
          this.selectedColor = color
          window.localStorage.setItem('color', color)
        }

        return {
          loading: true,
          isDark: getTheme(),
          color: getColor(),
          selectedColor: 'cyan',
          toggleTheme() {
            this.isDark = !this.isDark
            setTheme(this.isDark)
          },
          setLightTheme() {
            this.isDark = false
            setTheme(this.isDark)
          },
          setDarkTheme() {
            this.isDark = true
            setTheme(this.isDark)
          },
          setColors,
          watchScreen() {
            if (window.innerWidth <= 1024) {
              this.isSidebarOpen = false
            } else if (window.innerWidth >= 1024) {
              this.isSidebarOpen = true
            }
          },
          isSidebarOpen: window.innerWidth >= 1024 ? true : false,
          toggleSidbarMenu() {
            this.isSidebarOpen = !this.isSidebarOpen
          },
          isNotificationsPanelOpen: false,
          openNotificationsPanel() {
            this.isNotificationsPanelOpen = true
            this.$nextTick(() => {
              this.$refs.notificationsPanel.focus()
            })
          },
          isSettingsPanelOpen: false,
          openSettingsPanel() {
            this.isSettingsPanelOpen = true
            this.$nextTick(() => {
              this.$refs.settingsPanel.focus()
            })
          },
          isSearchPanelOpen: false,
          openSearchPanel() {
            this.isSearchPanelOpen = true
            this.$nextTick(() => {
              this.$refs.searchInput.focus()
            })
          },
        }
      }
    </script>
  </body>
</html>
