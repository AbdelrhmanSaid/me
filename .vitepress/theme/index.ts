import './style.css'
import 'nprogress/nprogress.css'
import nprogress from 'nprogress'
import type { EnhanceAppContext } from 'vitepress'

import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp({ router }: EnhanceAppContext) {
    nprogress.configure({ showSpinner: false })

    setTimeout(() => {
      const cachedBeforeRouteChange = router.onBeforeRouteChange
      const cachedAfterRouteChange = router.onAfterRouteChanged

      router.onBeforeRouteChange = (to) => {
        nprogress.start()

        if (cachedBeforeRouteChange) {
          cachedBeforeRouteChange(to)
        }
      }

      router.onAfterRouteChanged = (to) => {
        nprogress.done()

        if (cachedAfterRouteChange) {
          cachedAfterRouteChange(to)
        }
      }
    })
  }
}
