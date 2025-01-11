import { useCookies } from "react-cookie";

export const UseCookies = () => {
  const [cookies, setCookies] = useCookies([
    "age",
    "preferences",
  ]);

  const onSetAgeCookie = (state) => {
    setCookies("age", state, { path: "/", maxAge: 3600 });
  };

  const onSetAcceptCookie = (state) => {
    setCookies("preferences", state, { path: "/", maxAge: 3600 });
  };

  const getCookieAge = () => {
    return cookies.age || null;
  };

  const getAcceptCookie = () => {
    return cookies.preferences || null;
  };

  return { onSetAgeCookie, getCookieAge, onSetAcceptCookie, getAcceptCookie };
};
