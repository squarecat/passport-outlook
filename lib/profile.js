/**
 * Parse profile.
 *
 * The Outlook API response is transformed to the Portable Contacts format, defines for PassportJS.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function (json) {
  if ("string" == typeof json) {
    json = JSON.parse(json);
  }

  let { id, displayName, preferredLanguage, mail } = json;

  // try and handle some weird cases where email is null
  if (!mail) {
    mail = json.userPrincipalName || json.preferred_username;
  }

  var profile = {
    id,
    email: mail,
    displayName,
    preferredLanguage,
  };
  return profile;
};
