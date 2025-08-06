import './style.css'
import type { EnhanceAppContext } from 'vitepress'

import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp({ router }: EnhanceAppContext) {
    setTimeout(() => {
      const cachedBeforeRouteChange = router.onBeforeRouteChange
      const cachedAfterRouteChange = router.onAfterRouteChanged

      router.onBeforeRouteChange = (to) => {
        if (cachedBeforeRouteChange) {
          cachedBeforeRouteChange(to)
        }
      }

      router.onAfterRouteChanged = (to) => {
        if (cachedAfterRouteChange) {
          cachedAfterRouteChange(to)
        }
      }
    })
  }
}
