/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import "i18next";

import type navbar from "../public/locales/de/navbar.json";
import type footer from "../public/locales/de/footer.json";
import type history from "../public/locales/de/history.json";
import type members from "../public/locales/de/members.json";
import type affiliated from "../public/locales/de/affiliated.json";
import type sponsors from "../public/locales/de/sponsors.json";

interface I18nNamespaces {
  navbar: typeof navbar;
  footer: typeof footer;
  history: typeof history;
  members: typeof members;
  affiliated: typeof affiliated;
  sponsors: typeof sponsors;
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "history";
    resources: I18nNamespaces;
  }
}
