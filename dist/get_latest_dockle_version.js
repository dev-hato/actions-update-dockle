"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.script = script;
async function script(github) {
    const release = await github.rest.repos.getLatestRelease({
        owner: "goodwithtech",
        repo: "dockle",
    });
    return release.data.tag_name.replace("v", "");
}
