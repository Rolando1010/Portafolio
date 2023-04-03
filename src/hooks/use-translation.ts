import { useRouter } from "next/router";
import ENGLISH from "translations/en.json";
import SPANISH from "translations/es.json";

const useTranslation = () => {
    const { locale } = useRouter();
    return locale === "es" ? SPANISH : ENGLISH;
}

export default useTranslation;