export default {
    title: 'Halaman',
    name: 'page', type: 'document',
    fields: [
        {
            title: 'Tab',
            name: 'tab', type: 'string',
        },
        {
            title: 'Urutan',
            name: 'order', type: 'number',
        },
        {
            title: 'Bilah',
            name: 'slug', type: 'slug', options: {
                source: 'tab',
                maxLength: 50
            }
        },
        {
            title: 'Banner',
            name: 'banner', type: 'image', options: {
                hotspot: true
            }
        },
        {
            title: 'Judul',
            name: 'title', type: 'string'
        },
        {
            title: 'Konten',
            name: 'content', type: 'blockContent'
        }
    ],

    preview: {
        select: {
            title: 'title',
            media: 'banner'
        }
    }
}
