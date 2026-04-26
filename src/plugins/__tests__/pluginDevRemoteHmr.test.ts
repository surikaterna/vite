import { describe, expect, it } from 'vitest';
import pluginDevRemoteHmr from '../pluginDevRemoteHmr';

describe('pluginDevRemoteHmr', () => {
  it('returns a plugin with the correct name', () => {
    const plugin = pluginDevRemoteHmr({
      exposes: {},
      remotes: {},
      shared: {},
      name: 'test',
      filename: 'remoteEntry.js',
      virtualModuleDir: '.__mf__virtual',
      dev: { remoteHmr: true },
    } as any);
    expect(plugin.name).toBe('module-federation-dev-remote-hmr');
    expect(plugin.apply).toBe('serve');
  });
});
