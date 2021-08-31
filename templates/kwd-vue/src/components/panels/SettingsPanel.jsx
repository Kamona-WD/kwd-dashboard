import { defineComponent } from 'vue'
import Panel from './Panel'
import { isSettingsPanelOpen } from '../../states/globalStates'

export default defineComponent({
  setup() {
    return () => (
      <Panel
        show={isSettingsPanelOpen.value}
        title="Settings"
        onClose={() => {
          isSettingsPanelOpen.value = false
        }}
      >
        <div>Settings Content</div>
      </Panel>
    )
  },
})
