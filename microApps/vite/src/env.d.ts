/// <reference types="vite/client" />

declare module '*.css' {
  const classes: {[key: string]: string};
  export default classes;
}

declare module '*.vue' {
  import type { defineComponent, FunctionalComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  // const component: DefineComponent<{}, {}, any>
  const component: ReturnType<typeof defineComponent> | FunctionalComponent;
  export default component
}
