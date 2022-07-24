// 用来整合组件的 最终实现导出组件
import _Icon from './src/icon.vue';
import { withInstall } from '../../utils/with-install';
export * from './src/icon';

const Icon = withInstall(_Icon);
export default Icon;


declare module 'vue' {
	export interface GlobalComponents {
    WIcon: typeof Icon;
  }
}