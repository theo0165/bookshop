import S from "@sanity/desk-tool/structure-builder";
import {
  AiOutlineSetting,
  AiOutlineFile,
  AiOutlineQuestionCircle,
  AiOutlineHome,
  AiOutlineNotification,
} from "react-icons/ai";

const exclude = [
  "media.tag",
  "globalSettings",
  "aboutPage",
  "frontpage",
  "newsPage",
];

export default () =>
  S.list()
    .title("Innehåll")
    .items([
      S.listItem()
        .title("Sidor")
        .icon(AiOutlineFile)
        .child(
          S.list()
            .title("Sidor")
            .items([
              S.listItem()
                .title("Startsida")
                .icon(AiOutlineHome)
                .child(
                  S.document().schemaType("frontpage").documentId("frontpage")
                ),
              S.listItem()
                .title("Om oss")
                .icon(AiOutlineQuestionCircle)
                .child(
                  S.document().schemaType("aboutPage").documentId("aboutPage")
                ),
              S.listItem()
                .title("News page")
                .icon(AiOutlineNotification)
                .child(
                  S.document().schemaType("newsPage").documentId("newsPage")
                ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !exclude.includes(listItem.getId() ?? "")
      ),
      S.divider(),
      S.listItem()
        .title("Inställningar")
        .icon(AiOutlineSetting)
        .child(
          S.editor().schemaType("globalSettings").documentId("globalSettings")
        ),
    ]);
