import { defineComponent, Transition } from 'vue'
import { RouterLink } from 'vue-router'
import { isSidebarOpen } from '../../states/globalStates'

export default defineComponent({
  setup() {
    return () => (
      <>
        <Transition
          enterActiveClass="transition-opacity"
          enterFromClass="opacity-0"
          enterToClass="opacity-100"
          leaveActiveClass="transition-opacity"
          leaveFromClass="opacity-100"
          leaveToClass="opacity-0"
        >
          <div
            v-show={isSidebarOpen.value}
            onClick={() => {
              isSidebarOpen.value = false
            }}
            aria-hidden="true"
            class="fixed inset-0 z-40 bg-black bg-opacity-50 xl:hidden dark:bg-opacity-75"
          ></div>
        </Transition>

        <aside
          class={[
            'fixed inset-y-0 z-40 flex-shrink-0 h-screen transition-transform transform',
            {
              '-translate-x-full rtl:translate-x-full': !isSidebarOpen.value,
              'translate-x-0 shadow-2xl xl:shadow-none': isSidebarOpen.value,
            },
          ]}
        >
          <div class="flex flex-col w-64 h-full bg-white border-r border-gray-300 dark:bg-gray-900 dark:border-gray-700 rtl:border-r-0 rtl:border-l">
            <div class="flex-shrink-0 hidden px-4 py-2 md:block">
              <RouterLink
                to={{ name: 'Home' }}
                class="inline-block text-2xl font-bold tracking-wider text-purple-500 uppercase"
              >
                K-WD
              </RouterLink>
            </div>

            <nav
              aria-label="Main"
              class="flex flex-col flex-1 p-2 overflow-y-hidden gap-y-2 hover:overflow-y-auto"
            ></nav>

            <div class="flex-shrink-0 p-4"></div>
          </div>
        </aside>
      </>
    )
  },
})
