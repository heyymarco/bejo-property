export default {
    title: 'Rumah',
    name: 'rumah', type: 'document',
    fields: [
        {
            title: 'Judul',
            name: 'title', type: 'string'
        },
        {
            title: 'Konten',
            name: 'content', type: 'blockContent'
        },
        {
            title: 'Foto utama',
            name: 'fotoUtama', type: 'image', options: {
                hotspot: true
            }
        },
        {
            title: 'Foto',
            name: 'foto', type: 'array', of: [{
                type: 'image',
                hotspot: true
            }]
        },
        {
            title: 'Harga',
            name: 'harga', type: 'number'
        },
        {
            title: 'Lebar',
            name: 'lebar', type: 'number'
        },
        {
            title: 'Panjang',
            name: 'panjang', type: 'number'
        },
    ],

    preview: {
        select: {
            title: 'title',
            media: 'fotoUtama'
        }
    }
}
