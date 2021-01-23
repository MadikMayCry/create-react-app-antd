export const mobileSize = 720;

export const ROUTES = [
  {
    component: "Home",
    isProtected: false,
    path: "/",
  },
  {
    component: "Login",
    isProtected: false,
    path: "/login",
  },
  {
    component: "Cabinet",
    isProtected: true,
    path: "/cabinet",
  },
];
