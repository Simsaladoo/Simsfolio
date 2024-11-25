window.addEventListener("DOMContentLoaded", async function () {
    async function get(url) {
        const resp = await fetch(url);
        return resp.json();
    }

    document.querySelectorAll(".github-card").forEach(async function (el) {
        const username = el.getAttribute("username");

        const response = await get(`https://api.github.com/users/${username}`);
        const { name, avatar_url, public_repos, followers, html_url, following } = response;

        el.innerHTML = `
            <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; border-radius: 6px; line-height: 1.5; padding: 16px; font-size: 14px; color: #24292e; background-color: #f9bf3f;">
                <div style="display: flex; align-items: center; margin-top: -4px">
                    <img style="width: 48px; height: 48px; border-radius: 50%" src="${avatar_url}" alt="Profile image"></img>
                    <div style="display: flex; flex-direction: column; margin-left: 12px">
                        <span style="font-weight: 500; color: #black; font-size: 18px">
                            <a style="text-decoration: none; color: inherit;" target="_blank" href="${html_url}">
                                ${name}
                            </a>
                        </span>
                        <span style="font-weight: 400; color: #586069; font-size: 12px">
                            @${html_url.replace('https://', '')}
                        </span>
                    </div>
                </div>

                <div style="margin-top: 12px; display: flex; justify-content: space-evenly; align-items: center; ">
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 500; color: #586069;">
                            REPOSITORIES
                        </span>
                        <span style="font-weight: 600; color: #211F1F; font-size: 32px; line-height: 1">
                            ${public_repos}
                        </span>
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 500; color: #586069;">
                            FOLLOWERS
                        </span>
                        <span style="font-weight: 600; color: #211F1F; font-size: 32px; line-height: 1">
                            ${followers}
                        </span>
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 500; color: #586069;">
                            FOLLOWING
                        </span>
                        <span style="font-weight: 600; color: #211F1F; font-size: 32px; line-height: 1">
                            ${following}
                        </span>
                    </div>
                </div>
            </div>
        `;
    });
});