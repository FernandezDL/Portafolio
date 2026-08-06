import type { LocalizedPortfolioContent, PortfolioLang } from "@/types/types";
import { enContent } from "./en";
import { esContent } from "./es";

export const contentByLanguage: Record<
    PortfolioLang,
    LocalizedPortfolioContent
> = {
    en: enContent,
    es: esContent,
};