// import the original type declarations
import "react-i18next";
// import all namespaces (for the default language, only)
import navbar from "locales/de/navbar.json";
import footer from "locales/de/footer.json";
import history from "locales/de/history.json";
import members from "locales/de/members.json";
import affiliated from "locales/de/affiliated.json";
import sponsors from "locales/de/sponsors.json";

// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: "history";
    // custom resources type
    resources: {
      navbar: typeof navbar;
      footer: typeof footer;
      history: typeof history;
      members: typeof members;
      affiliated: typeof affiliated;
      sponsors: typeof sponsors;
    };
  }
}
