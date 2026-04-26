import type { Plugin } from 'vite';
import type { NormalizedModuleFederationOptions } from '../utils/normalizeModuleFederationOptions';

/**
 * Dev-mode HMR plugin for Module Federation.
 *
 * Cross-federation HMR is handled by letting Vite's native HMR work
 * directly over the remote's dev server WebSocket. React Fast Refresh
 * is enabled by the companion `pluginSharedReactRefresh` which unifies
 * the `@react-refresh` runtime across host and remote.
 *
 * This plugin is currently a placeholder — the host-side WS relay and
 * remote-side broadcast infrastructure were removed because Vite's
 * native HMR + the shared refresh proxy handle the common case.
 * If a future need arises for non-React cross-federation HMR (e.g.
 * imperative mount patterns without Fast Refresh), the relay can be
 * re-introduced here.
 */
export default function pluginDevRemoteHmr(
  _options: NormalizedModuleFederationOptions
): Plugin {
  return {
    name: 'module-federation-dev-remote-hmr',
    apply: 'serve',
  };
}
