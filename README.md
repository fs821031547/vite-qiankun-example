# vite微前端主应用和子应用示范项目
微前端的项目示例，包括主应用和各个框架下的子应用示例

## 微应用配置
### 1.vite项目配置示例
#### 1、在 vite.config.ts 中安装插件
```
// vite.config.ts

import qiankun from 'vite-plugin-qiankun';

export default {
  // 这里的 'myMicroAppName' 是子应用名，主应用注册时AppName需保持一致
  plugins: [qiankun('myMicroAppName')],
  // 生产环境需要指定运行域名作为base
  base: 'http://xxx.com/'
}
```

#### 2、在入口文件里面写入乾坤的生命周期配置
```
// main.ts
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

// 配置生命周期
renderWithQiankun({
  mount(props) {
    console.log('mount');
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount(props: any) {
    console.log('unmount');
    const { container } = props;
    const mountRoot = container?.querySelector('#root');
    ReactDOM.unmountComponentAtNode(
      mountRoot || document.querySelector('#root'),
    );
  },
});

// 子应用独立运行
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
```