interface TranslationTable {
  [key: string]: string;
}

const translations: TranslationTable = {
  om: "OM OSS",
};

const translateBreadcrumb = (path: string) => {
  return translations[path] ?? path;
};

export default translateBreadcrumb;
