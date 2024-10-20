module.exports = async ({ github }) => {
  const release = await github.rest.repos.getLatestRelease({
    owner: "goodwithtech",
    repo: "dockle",
  });
  return release.data.tag_name.replace("v", "");
};
