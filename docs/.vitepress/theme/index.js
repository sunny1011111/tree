import DefaultTheme from 'vitepress/theme';

import WIcon from '@sunny9528/components/icon';
import '@sunny9528/theme-chalk/src/index.scss';

console.log(WIcon);
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(WIcon); // 在vitepress 中注册全局组件
  },
};
