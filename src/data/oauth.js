import { loadModules } from 'esri-loader';

/**
 * Register application ID and Portal URL
 * with the IdentityManager
 * @param appId
 * @param portalUrl
 * @returns Promise<void>
 */
export const initialize = async (appId, portalUrl) => {
  const [IdentityManager, OAuthInfo] = await loadModules([
    'esri/identity/IdentityManager',
    'esri/identity/OAuthInfo',
  ]);
  const oauthInfo = new OAuthInfo({
    appId,
    portalUrl,
    popup: true,
  });
  IdentityManager.registerOAuthInfos([oauthInfo]);
  return oauthInfo;
};

/**
 * Check current logged in status for current portal
 * @returns Promise<void>
 */
export const checkCurrentStatus = async (oauthInfo) => {
  const [IdentityManager] = await loadModules([
    'esri/identity/IdentityManager',
  ]);

  try {
    const credential = await IdentityManager.checkSignInStatus(
      `${oauthInfo.portalUrl}/sharing`
    );

    const user = await fetchUser(credential);

    return { credential, user };
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Attempt to sign in,
 * first check current status
 * if not signed in, then go through
 * steps to get credentials
 * @returns Promise<`esri/identity/Credential`>
 */
export const signIn = async (oauthInfo) => {
  try {
    const { credential, user } = await checkCurrentStatus(oauthInfo);
    return { credential, user };
  } catch (error) {
    const { credential, user } = await fetchCredentials(oauthInfo);
    return { credential, user };
  }
};

/**
 * Sign the user out, but if we checked credentials
 * manually, make sure they are registered with
 * IdentityManager, so it can destroy them properly
 * @returns Promise<void>
 */
export const signOut = async (oauthInfo) => {
  const [IdentityManager] = await loadModules([
    'esri/identity/IdentityManager',
  ]);

  IdentityManager.destroyCredentials();
  window.location.reload();
};

/**
 * Get the credentials for the provided portal
 * @returns Promise<`esri/identity/Credential`>
 */
export const fetchCredentials = async (oauthInfo) => {
  const [IdentityManager] = await loadModules([
    'esri/identity/IdentityManager',
  ]);

  const credential = await IdentityManager.getCredential(
    `${oauthInfo.portalUrl}/sharing`,
    {
      error: null,
      oAuthPopupConfirmation: false,
      token: null,
    }
  );

  const user = await fetchUser(credential);

  return { credential, user };
};

export const fetchUser = async (credential) => {
  const [esriRequest] = await loadModules(['esri/request']);

  try {
    const response = await esriRequest(
      `https://www.arcgis.com/sharing/rest/community/users/${credential.userId}?f=json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
