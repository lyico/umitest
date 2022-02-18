import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  fastRefresh: {},
  alias: {
    img: '@/assets/img'
  }
});
