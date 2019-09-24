import { join } from 'path';

import StylelintPlugin from '../../src/index';

export default (context, webpackConf = {}, pluginConf = {}) => {
  const testDir = join(__dirname, '..');

  return {
    context: join(testDir, 'fixtures', context),
    mode: 'development',
    entry: './index',
    output: {
      path: join(testDir, 'output'),
    },
    plugins: [
      new StylelintPlugin({
        configFile: join(testDir, '.stylelintrc'),
        ...pluginConf,
      }),
    ],
    ...webpackConf,
  };
};
