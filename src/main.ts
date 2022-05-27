import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp} from 'qiankun'
import microApps from './micro-app'

createApp(App).mount('#apps')

/**
 * 注册子应用，配置生命周期
 */

registerMicroApps(microApps, {
    beforeLoad: app => {
      console.log("before load app.name====>>>>>", app.name);
    },
    beforeMount: [
      app => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      }
    ],
    afterMount: [
      app => {
        console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
      }
    ],
    afterUnmount: [
      app => {
        console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
      }
    ]
  });

//   setDefaultMountApp('vue3');
  start();