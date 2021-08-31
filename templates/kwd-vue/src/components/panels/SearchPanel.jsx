import { defineComponent } from 'vue'
import Panel from './Panel'
import { isSearchPanelOpen } from '../../states/globalStates'

export default defineComponent({
  setup() {
    return () => (
      <Panel
        show={isSearchPanelOpen.value}
        title="Search"
        left
        onClose={() => {
          isSearchPanelOpen.value = false
        }}
      >
        <div>Search Content</div>
      </Panel>
    )
  },
})
