import S from "@sanity/desk-tool/structure-builder";

const exclude = ["media.tag", "globalSettings", "aboutPage"];

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
                .title("About page")
                .child(
                  S.document().schemaType("aboutPage").documentId("aboutPage")
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
