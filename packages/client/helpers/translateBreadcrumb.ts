interface TranslationTable {
  [key: string]: string;
}

const translations: TranslationTable = {
  about: "OM OSS",
};

const translateBreadcrumb = (path: string) => {
  return translations[path] ?? path;
};

export default translateBreadcrumb;
