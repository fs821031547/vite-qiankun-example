import { createApp } from 'vue'
import App from './App.vue'


import { renderWithQiankun, qiankunWindow,QiankunProps } from 'vite-plugin-qiankun/dist/helper';


let instance: any = null

interface Props {
  container?: HTMLElement;
}

function render(props:Props) {
    const { container } = props;
    instance = createApp(App)
    instance.mount(container ? container.querySelector('#app') : '#app');
  }

// interface  { mount(props: QiankunProps): void; bootstrap(): void; unmount(props: any): void; }

// some code
renderWithQiankun({
  mount(props:QiankunProps) {
    render(props)
    console.log('mount', props);
  },
  bootstrap(): void {
    console.log('bootstrap');
  },
  unmount(props: any):void {
    instance.unmount();
    instance._container.innerHTML = '';
    instance = null;
    console.log('unmount');
  },
  update(props: any):void {
    console.log("vue3sub update");
    console.log(props)
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log(11)
  render({});
}