import { Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;
export function withInstall<T>(components: T) {
  (components as SFCWithInstall<T>).install = function (app) {
    const { name } = components as unknown as { name: string };
    // 将组件注册为全局的
    app.component(name, components);
  };
  return components as SFCWithInstall<T>;
}
