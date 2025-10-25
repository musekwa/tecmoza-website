import GetInTouch from "@/get-in-touch";
import FirstSection from "./_components/first-section";
import FourthSection from "./_components/fourth-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/TranslationsProvider";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const i18nNamespaces = ["landing-page", "common"];

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;

  const { resources } = await initTranslations(locale, [
    "landing-page",
    "common",
  ]);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <main className="">
        <div className="px-4 lg:px-24  my-6 py-6 ">
          <FirstSection />
        </div>
        <div className="px-4 lg:px-24 bg-sky-100 dark:bg-gray-900 my-6 py-6 ">
          <SecondSection />
        </div>
        <div className="px-4 lg:px-24  ">
          <ThirdSection />
        </div>
        <div className="px-4 lg:px-24 dark:bg-gray-900 py-6 ">
          <FourthSection />
        </div>

        <GetInTouch />
      </main>
    </TranslationsProvider>
  );
}
