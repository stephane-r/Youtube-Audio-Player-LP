const API_GITHUB_YAP_RELEASE =
  "https://api.github.com/repos/stephane-r/HoloPlay/releases";

const fetchYapRelease = () =>
  fetch(API_GITHUB_YAP_RELEASE)
    .then((request) => request.json())
    .then(([repo]) => ({
      tagName: repo.tag_name,
      browserDownloadUrl: repo.assets[0].browser_download_url,
    }));

export default fetchYapRelease;
