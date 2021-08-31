import { defineComponent, onMounted, onUnmounted } from 'vue'
import { isSidebarOpen, handleResize } from '../../states/globalStates'
import Navbar from '../navbar/Navbar'
import SearchPanel from '../panels/SearchPanel'
import SettingsPanel from '../panels/SettingsPanel'
import NotificationsPanel from '../panels/NotificationsPanel'
import Sidebar from '../sidebar/Sidebar'

export default defineComponent({
  setup(_, { slots }) {
    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    return () => (
      <div class="flex min-h-screen font-sans antialiased text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
        <Sidebar />

        <div class={['flex flex-col flex-1', { 'xl:pl-64 xl:rtl:pl-0 xl:rtl:pr-64': isSidebarOpen.value }]}>
          <Navbar />

          {slots.default()}
        </div>

        <SearchPanel />
        <SettingsPanel />
        <NotificationsPanel />
      </div>
    )
  },
})
