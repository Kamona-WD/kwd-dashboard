import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import AppLayout from './components/layouts/AppLayout'

export default defineComponent({
  setup() {
    return () => (
      <AppLayout>
        <RouterView />
      </AppLayout>
    )
  },
})
