import { defineComponent, onMounted, onUnmounted, Transition } from 'vue'
import { RouterLink } from 'vue-router'
import { TransitionRoot, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import {
  scrollingDown,
  scrollingUp,
  handleScroll,
  isSidebarOpen,
  isDark,
  toggleDark,
  isMobileSubMenuOpen,
  isSearchPanelOpen,
  isSettingsPanelOpen,
  isNotificationsPanelOpen,
} from '../../states/globalStates'
import IconButton from '../global/IconButton'

const UserMenu = defineComponent({
  setup() {
    const userMenuItems = [
      {
        label: 'Profile',
        link: '#',
      },
      {
        label: 'Sign out',
        link: '#',
      },
    ]
    return () => (
      <Menu as="div" class="relative inline-flex items-center ml-auto">
        <MenuButton class="transition-opacity duration-200 rounded-full hover:opacity-80 dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100">
          <span class="sr-only">User menu</span>
          <img
            class="w-10 h-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/57622665?v=4"
            alt="Ahmed Kamel"
          />
        </MenuButton>
        <TransitionRoot
          appear
          as="template"
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-in"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <MenuItems
            as="ul"
            class="absolute overflow-hidden bottom-0 mb-12 md:top-0 md:bottom-auto md:mb-0 right-0 w-56 md:mt-12 origin-bottom-right md:origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-900 focus:outline-none"
          >
            {userMenuItems.map((item) => (
              <MenuItem as="li">
                {({ active }) => (
                  <a
                    href={item.link}
                    class={[
                      'block px-4 py-2 text-sm text-gray-700 transition-colors dark:text-gray-100',
                      { 'text-gray-100 bg-purple-500': active },
                    ]}
                  >
                    {item.label}
                  </a>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </TransitionRoot>
      </Menu>
    )
  },
})

const MobileSubMenu = defineComponent({
  setup() {
    return () => (
      <>
        <Transition
          enterActiveClass="duration-200 ease-out"
          enterFromClass="opacity-0"
          enterToClass="opacity-100"
          leaveActiveClass="duration-100 ease-in"
          leaveFromClass="opacity-100"
          leaveToClass="opacity-0"
        >
          <div
            v-show={isMobileSubMenuOpen.value}
            onClick={() => {
              isMobileSubMenuOpen.value = false
            }}
            class="fixed z-20 inset-0 bg-black opacity-30"
          ></div>
        </Transition>
        <Transition
          enterActiveClass="transition-all duration-200 ease-out"
          enterFromClass="opacity-0 -translate-y-full"
          enterToClass="opacity-100 translate-y-0"
          leaveActiveClass="transition-all duration-100 ease-in"
          leaveFromClass="opacity-100 translate-y-0"
          leaveToClass="opacity-0 -translate-y-full"
        >
          <nav
            v-show={isMobileSubMenuOpen.value}
            aria-label="Secondary"
            class="fixed z-40 flex items-center justify-between p-2 bg-white rounded-md shadow-lg md:hidden dark:bg-gray-900 bottom-16 inset-x-4"
          >
            <div class="flex items-center gap-2 w-full">
              <IconButton onClick={toggleDark} text="Toggle dark mode" icon={isDark.value ? 'bx-sun' : 'bx-moon'} />

              <IconButton
                onClick={() => {
                  isSearchPanelOpen.value = true
                  isMobileSubMenuOpen.value = false
                }}
                text="Toggle search panel"
                icon="bx-search"
              />

              <IconButton
                onClick={() => {
                  isNotificationsPanelOpen.value = true
                  isMobileSubMenuOpen.value = false
                }}
                text="Toggle notifications panel"
                icon="bx-bell"
              />

              <IconButton
                onClick={() => {
                  isSettingsPanelOpen.value = true
                  isMobileSubMenuOpen.value = false
                }}
                text="Toggle settings panel"
                icon="bx-cog"
              />

              <UserMenu />
            </div>
          </nav>
        </Transition>
      </>
    )
  },
})

const MobileNavbar = defineComponent({
  setup() {
    return () => (
      <div
        class={[
          'fixed inset-x-0 bottom-0 z-10 flex items-center justify-between px-4 py-2 transition-transform duration-500 bg-white border-t border-t-gray-300 md:hidden dark:bg-gray-900 dark:border-t-gray-700',
          { 'translate-y-full': scrollingDown.value, 'translate-y-0': scrollingUp.value },
        ]}
      >
        <IconButton
          onClick={() => {
            isMobileSubMenuOpen.value = !isMobileSubMenuOpen.value
          }}
          text="Open sub menu"
          icon="bx-dots-vertical-rounded"
        />

        <RouterLink
          to={{ name: 'Home' }}
          class="inline-block text-2xl font-bold tracking-wider text-purple-500 uppercase"
        >
          K-WD
        </RouterLink>

        <IconButton
          onClick={() => {
            isSidebarOpen.value = !isSidebarOpen.value
          }}
          text="Open sidebar"
          icon="bx-menu"
        />
      </div>
    )
  },
})

const DesktopNavbar = defineComponent({
  setup() {
    return () => (
      <header
        class={[
          'hidden sticky top-0 z-[5] md:flex items-center justify-between flex-shrink-0 py-8 px-2 transition-transform duration-500 bg-white border-b border-b-gray-300 dark:border-b-gray-700 sm:px-4 max-h-14 dark:bg-gray-900',
          { '-translate-y-full': scrollingDown.value, '-translate-y-0': scrollingUp.value },
        ]}
      >
        <div class="flex items-center">
          <IconButton
            onClick={() => {
              isSidebarOpen.value = !isSidebarOpen.value
            }}
            text="Toggle sidebar"
            icon="bx-menu"
          />
        </div>

        <nav aria-label="Secondary" class="flex items-center gap-2">
          <IconButton onClick={toggleDark} text="Toggle dark mode" icon={isDark.value ? 'bx-sun' : 'bx-moon'} />

          <IconButton
            onClick={() => {
              isSearchPanelOpen.value = true
            }}
            text="Toggle search panel"
            icon="bx-search"
          />

          <IconButton
            onClick={() => {
              isNotificationsPanelOpen.value = true
            }}
            text="Toggle notifications panel"
            icon="bx-bell"
          />

          <IconButton
            onClick={() => {
              isSettingsPanelOpen.value = true
            }}
            text="Toggle settings panel"
            icon="bx-cog"
          />

          <UserMenu />
        </nav>
      </header>
    )
  },
})

export default defineComponent({
  setup() {
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return () => (
      <>
        <DesktopNavbar />
        <MobileNavbar />
        <MobileSubMenu />
      </>
    )
  },
})
