import { FC, memo } from "react";
import i18next from "i18next";
import { getMultigamingUrl } from "../../data/data";
import Section from "../Layout/Section";

const Multigaming: FC<{ locale: string; sectionId: string }> = memo(
  ({ locale, sectionId }) => {
    const t = i18next.getFixedT(locale);

    return (
      <Section
        noPadding
        className="bg-black px-4 pb-12 pt-2 sm:px-8 sm:pb-16"
        sectionId={sectionId}
      >
        <div className="mx-auto grid max-w-screen-lg grid-cols-[72px_minmax(0,1fr)] gap-x-4 gap-y-4 rounded-lg border border-neutral-800 bg-neutral-900 p-5 sm:grid-cols-[144px_minmax(0,1fr)] sm:gap-x-8 sm:p-8">
          <img
            src="/images/11efo-original.webp"
            alt={t("homepage.multigaming.logoAlt")}
            width={283}
            height={300}
            loading="lazy"
            decoding="async"
            className="w-full self-center rounded-sm sm:row-span-3"
          />
          <div className="self-center">
            <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">
              {t("homepage.multigaming.label")}
            </span>
            <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              {t("homepage.multigaming.title")}
            </h2>
          </div>
          <p className="col-span-2 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:col-span-1 sm:col-start-2 sm:text-base">
            {t("homepage.multigaming.description")}
          </p>
          <a
            className="col-span-2 inline-flex w-fit items-center gap-x-2 rounded-sm py-1 text-sm font-medium text-orange-400 underline decoration-orange-400/50 underline-offset-4 hover:text-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 sm:col-span-1 sm:col-start-2"
            href={getMultigamingUrl(locale)}
            hrefLang={locale === "fr" ? "fr" : "en"}
          >
            {t("homepage.multigaming.action")}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Section>
    );
  },
);

Multigaming.displayName = "Multigaming";
export default Multigaming;
