const sidebarList = {
    "Apparels": ["Pants-a", "Jumpsuits-a", "Shorts-a", "Tops-a"],
    "Accessories": ["Pants-a", "Jumpsuits-a", "Shorts-a", "Tops-a"],
    "Houseware": ["Pants-h", "Jumpsuits-h", "Shorts-h", "Tops-h"],
    "Others": ["Pants-o", "Jumpsuits-o", "Shorts-o", "Tops-o"],
    "Techniques": ["Pants-t", "Jumpsuits-t", "Shorts-t", "Tops-t"],
    "Styles": ["Pants-s", "Jumpsuits-s", "Shorts-s", "Tops-s"]
};

const sidebarListNew = {
    'shoes': {
        'boots': {
            id: 1,
            'kinds': [
                {
                    id: 1,
                    name: 'leather',
                },
                {
                    id: 2,
                    name: 'suede',
                },
            ]
        },
        'sandals': {
            id: 2,
            'kinds': [
                {
                    id: 1,
                    name: 'beach',
                },
                {
                    id: 2,
                    name: 'rope',
                },
            ]
        },
        'sneakers': {
            id: 3,
            'kinds': [
                {
                    id: 1,
                    name: 'sport',
                },
                {
                    id: 2,
                    name: 'casual',
                },
            ]
        }
    },
    'clothing': {
        'jeans': {
            id: 1,
            'kinds': [
                {
                    id: 1,
                    name: 'classic',
                },
                {
                    id: 2,
                    name: 'slim',
                },
            ]
        },
        'coats & jackets': {
            id: 2,
            'kinds': [
                {
                    id: 1,
                    name: 'raincoat',
                },
                {
                    id: 2,
                    name: 'winter',
                },
            ]
        },
        'sweatshirts': {
            id: 3,
            'kinds': [
                {
                    id: 1,
                    name: 'kangaroo',
                },
                {
                    id: 2,
                    name: 'warm',
                },
            ]
        }
    },
    'bags': {
        'messenger bags': {
            id: 1,
            'kinds': [
                {
                    id: 1,
                    name: 'small',
                },
                {
                    id: 2,
                    name: 'medium',
                },
            ]
        },
        'backpacks': {
            id: 2,
            'kinds': [
                {
                    id: 1,
                    name: 'women',
                },
                {
                    id: 2,
                    name: 'men',
                },
            ]
        },
        'duffel bags': {
            id: 3,
            'kinds': [
                {
                    id: 1,
                    name: 'duffle-bags',
                },
                {
                    id: 2,
                    name: 'handbags',
                },
            ]
        }
    },
    'accessories': {
        'sunglasses': {
            id: 1,
            'kinds': [
                {
                    id: 1,
                    name: 'women',
                },
                {
                    id: 2,
                    name: 'men',
                },
            ]
        },
        'hats': {
            id: 2,
            'kinds': [
                {
                    id: 1,
                    name: 'women',
                },
                {
                    id: 2,
                    name: 'men',
                },
            ]
        },
        'watches': {
            id: 3,
            'kinds': [
                {
                    id: 1,
                    name: 'women',
                },
                {
                    id: 2,
                    name: 'men',
                },
            ]
        }
    }
};

const selectSizeSidebar = {
    "sizes": [
        {
            id: 0,
            size: '1'
        },
        {
            id: 1,
            size: '2'
        },
        {
            id: 2,
            size: '3'
        },
        {
            id: 3,
            size: '4'
        }
    ]
};

export {
    sidebarList,
    selectSizeSidebar,
    sidebarListNew
}