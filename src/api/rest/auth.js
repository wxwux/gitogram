import { makeRequest } from "../requests";
import { clientId, clientSecret } from "../../../credentials.json";

const corsProxy = "https://cors-anywhere.herokuapp.com";

export const getAccessTokenByPersonalCode = (code) => {
  const body = {
    client_id: clientId,
    client_secret: clientSecret,
    code,
  };

  return makeRequest({
    url: `${corsProxy}/https://github.com/login/oauth/access_token`,
    method: "post",
    data: body
  });
};

export const sendUserToAuthPage = () => {
  const githubAuthApi = "https://github.com/login/oauth/authorize";
  const ghAuthUrl = `${githubAuthApi}?client_id=${clientId}&scope=repo%20user`;
  const windowParams = "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000";

  window.open(ghAuthUrl, "Auth With GitHub", windowParams);
};
