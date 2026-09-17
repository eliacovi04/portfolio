import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-NEB0F6ZC60"; // sostituisci col tuo

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};

export const trackPage = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string
) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};