import S from "@sanity/desk-tool/structure-builder";

const exclude = ["media.tag", "globalSettings", "aboutPage", "frontpage"];

export default () =>
  S.list()
    .title("Innehåll")
    .items([
      S.listItem()
        .title("Sidor")
        .child(
          S.list()
            .title("Sidor")
            .items([
              S.listItem()
                .title("Om oss")
                .child(
                  S.document().schemaType("aboutPage").documentId("aboutPage")
                ),
              S.listItem()
                .title("Startsida")
                .child(
                  S.document().schemaType("frontpage").documentId("frontpage")
                ),
              S.listItem()
                .title("News page")
                .child(
                  S.document().schemaType("newsPage").documentId("newsPage")
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Inställningar")
        .child(
          S.editor().schemaType("globalSettings").documentId("globalSettings")
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !exclude.includes(listItem.getId() ?? "")
      ),
    ]);
