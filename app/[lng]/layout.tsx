import { languages } from "../i18n/settings";
import BVSRFooter from "../../components/layout/BVSRFooter";
import BVSRNavbar from "../../components/layout/BVSRNavbar";
import { Flowbite, ThemeModeScript } from "flowbite-react";

export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng}>
      <head>
        <ThemeModeScript />
      </head>
      <Flowbite>
        <body className="flex min-h-screen flex-col bg-white text-gray-600 antialiased dark:bg-gray-900 dark:text-gray-400">
          <BVSRNavbar lng={lng} />

          <main className="flex grow flex-col items-center gap-8 pb-16">
            {children}
          </main>

          <BVSRFooter lng={lng} />
        </body>
      </Flowbite>
    </html>
  );
}
