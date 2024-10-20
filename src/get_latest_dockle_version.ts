import type { GitHub } from "@actions/github/lib/utils";
import type {RestEndpointMethodTypes} from "@octokit/plugin-rest-endpoint-methods";

export async function script(github: InstanceType<typeof GitHub>):Promise<string> {
  const release:RestEndpointMethodTypes["repos"]["getLatestRelease"]["response"] = await github.rest.repos.getLatestRelease({
    owner: "goodwithtech",
    repo: "dockle",
  });
  return release.data.tag_name.replace("v", "");
}
