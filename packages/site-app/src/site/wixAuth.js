import { createClient } from '@wix/sdk'
import { AuthManager, initWixAuthSetup, resolveWixAuthSetup } from '@wix/builder-auth'

const clientId = import.meta.env.VITE_WIX_CLIENT_ID
const siteId = import.meta.env.VITE_WIX_SITE_ID
const hasSiteIdentity = Boolean(clientId && siteId)

// Runs on import, before the page module is evaluated. initWixAuthSetup() publishes the legacy
// token getters on window.wixEmbedsAPI; they resolve once initializeAuth() hands over the manager.
if (hasSiteIdentity) initWixAuthSetup()

// initWixAuthSetup() also puts a bare { auth } object on globalThis.__wix_context__.client, but
// @wix/* SDK modules (e.g. @wix/stores) call client.use() on it, so a real SDK client replaces it.
export const wixClient = createClient({
    ...(hasSiteIdentity
        ? {
              auth: {
                  getAuthHeaders: async () => ({
                      headers: { Authorization: await window.wixEmbedsAPI.getAppToken() },
                  }),
              },
          }
        : {}),
})
wixClient.enableContext('global')

/** Starts visitor auth and waits for the first access token; the page entry mounts after it. */
export const initializeAuth = async () => {
    if (!hasSiteIdentity) {
        console.warn(
            'VITE_WIX_CLIENT_ID and VITE_WIX_SITE_ID are not set in packages/site-app/.env; ' +
                'Wix APIs will be called without visitor auth.'
        )
        return
    }
    const authManager = new AuthManager(clientId, siteId)
    resolveWixAuthSetup(authManager)
    try {
        await authManager.getAccessToken()
    } catch (error) {
        // The page still renders; Wix API calls retry the token through the auth manager.
        console.error('Wix visitor auth failed to initialize:', error)
    }
}
