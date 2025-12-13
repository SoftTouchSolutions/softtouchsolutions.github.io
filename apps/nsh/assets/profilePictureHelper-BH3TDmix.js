const BACKEND_URL = "http://localhost:8000";
const getProfilePictureUrl = (profilePicture, fallbackImage = null) => {
  if (!profilePicture) {
    return fallbackImage;
  }
  if (profilePicture.startsWith("data:")) {
    return profilePicture;
  }
  if (profilePicture.startsWith("http://") || profilePicture.startsWith("https://")) {
    return profilePicture;
  }
  return `${BACKEND_URL}${profilePicture}?t=${(/* @__PURE__ */ new Date()).getTime()}`;
};
export {
  getProfilePictureUrl as g
};
