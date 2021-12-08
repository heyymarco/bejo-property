export default {
    title: 'Info Website',
    name: 'siteInfo', type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Logo website',
            name: 'logo', type: 'image',
        },
        {
            title: 'Nama website',
            name: 'name', type: 'string',
        },
        {
            title: 'URL website',
            name: 'url', type: 'url',
        },
    ]
}