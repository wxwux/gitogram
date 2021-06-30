import { makeRequest } from "../requests";
import env from "../../../env";

export const getAccessTokenByPersonalCode = (code) => makeRequest({
  url: "https://webdev-api.loftschool.com/github",
  method: "post",
  data: {
    code
  }
});

export const sendUserToAuthPage = () => {
  const githubAuthApi = "https://github.com/login/oauth/authorize";
  const ghAuthUrl = `${githubAuthApi}?client_id=${env.clientId}&scope=repo%20user`;
  const windowParams = "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000";

  window.location.href = ghAuthUrl;

  // window.open(ghAuthUrl, "Auth With GitHub", windowParams);
};
