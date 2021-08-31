import { defineComponent } from 'vue'
import Panel from './Panel'
import { isNotificationsPanelOpen } from '../../states/globalStates'

export default defineComponent({
  setup() {
    return () => (
      <Panel
        show={isNotificationsPanelOpen.value}
        title="Notifications"
        left
        onClose={() => {
          isNotificationsPanelOpen.value = false
        }}
      >
        <div>Notifications Content</div>
      </Panel>
    )
  },
})
