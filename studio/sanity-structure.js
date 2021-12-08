import S from "@sanity/desk-tool/structure-builder";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Site Info")
                .child(
                    S.document()
                        .schemaType("siteInfo")
                        .documentId("siteInfo")
                ),
            ...S.documentTypeListItems().filter(listItem => !['siteInfo'].includes(listItem.getId()))
        ]);