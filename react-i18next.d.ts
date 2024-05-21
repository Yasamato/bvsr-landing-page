// import the original type declarations
import "react-i18next";
// import all namespaces (for the default language, only)
import history from "locales/de/history.json";
import footer from "locales/de/footer.json";
import members from "locales/de/members.json";
import navbar from "locales/de/navbar.json";
import sponsors from "locales/de/sponsors.json";

// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: "history";
    // custom resources type
    resources: {
      history: typeof history;
      footer: typeof footer;
      members: typeof members;
      navbar: typeof navbar;
      sponsors: typeof sponsors;
    };
  }
}
