import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router'
import Entry from '../views/Entry.vue'
import History from '../views/History.vue'
import Settings from '../views/Settings.vue'
import { store } from '../store/store'
import { toaster } from '@/components/alert'

// const toaster = useToaster()

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'Entry' }
  },
  {
    path: '/entry',
    name: 'Entry',
    component: Entry
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/demo',
    component: Entry,
    beforeEnter: (to, from, next) => {
      store.commit('loadDemo');
      toaster.showToast('Demo mode loaded')
      next({ name: 'Entry' })
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
