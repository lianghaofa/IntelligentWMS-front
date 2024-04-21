import Print from 'vue-print-nb'
import VDistpicker from 'v-distpicker'

export default async ({ app, router, store, Vue }) => {
  Vue.component('v-distpicker', VDistpicker)
  Vue.use(Print)
  console.log('Welcome To IntelligentWMS')
  console.log('Home Page ------ https://www.56yhz.com/')
  console.log('Demo Page ------ https://production.56yhz.com/')
  console.log('Gitee Page ------ https://gitee.com/Singosgu/IntelligentWMS')
  console.log('GitHub Page ------ https://github.com/Singosgu/IntelligentWMS')
}
