import { languages } from "../i18n/settings";
import BVSRFooter from "../../components/layout/BVSRFooter";
import BVSRNavbar from "../../components/layout/BVSRNavbar";

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
      <body className="flex flex-col">
        <BVSRNavbar lng={lng} />

        <main className="flex grow flex-col items-center gap-16 bg-[#eee]">
          {children}
        </main>

        <BVSRFooter lng={lng} />
      </body>
    </html>
  );
}
