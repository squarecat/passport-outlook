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

  var profile = {
    id: json.id,
    email: json.mail,
    displayName: json.displayName,
    preferredLanguage: json.preferredLanguage,
  };
  return profile;
};
