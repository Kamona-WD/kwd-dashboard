import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'button',
    },
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    iconSize: {
      type: String,
      default: 'sm',
    },
  },
  setup(props) {
    return () => (
      <button
        type={props.type}
        class="flex items-center justify-center p-2 text-purple-500 transition-colors duration-200 rounded-full  bg-purple-50 hover:text-purple-700 hover:bg-purple-100 dark:bg-gray-800 focus:outline-none focus:ring focus:ring-purple-200 dark:focus:ring-gray-700"
      >
        <span class="sr-only">{props.text}</span>
        <span class={`bx ${props.icon} bx-${props.iconSize}`}></span>
      </button>
    )
  },
})
