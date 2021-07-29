import {
    bedIcon,
    bussinessIcon,
    carIcon, dressIcon,
    guitarIcon,
    homeIcon,
    mobileFone,
    toolsIcon
} from "./categoryIcons";

export default [
    {
        name: 'Imóveis',
        icon: homeIcon,
        id: 'IMOVEIS',
        "subcategories": [
            {
                "code": "1020",
                "label": "Apartamentos",
                "max_images": 20
            },
            {
                "code": "1040",
                "label": "Casas",
                "max_images": 20
            },
            {
                "code": "1100",
                "label": "Terrenos, sítios e fazendas",
                "max_images": 20
            },
            {
                "code": "1120",
                "label": "Comércio e indústria",
                "max_images": 20
            }
        ]
    },
    {
        name: 'Autos',
        icon: carIcon,
        id: 'AUTO_E_PECAS',
        "subcategories": [
            {
                "code": "2020",
                "label": "Carros, vans e utilitários",
                "max_images": 20,
                "hotjar_trigger": "placa_variation_b"
            },
            {
                "code": "2060",
                "label": "Motos",
                "max_images": 20
            },
            {
                "code": "2050",
                "label": "Ônibus",
                "max_images": 20
            },
            {
                "code": "2040",
                "label": "Caminhões",
                "max_images": 20
            },

        ]

    },
    {
        name: 'Para a sua casa',
        icon: bedIcon,
        id: 'PARA_SUA_CASA',
        "subcategories": [
            {
                "code": "5020",
                "label": "Móveis",
                "max_images": 6
            },
            {
                "code": "5040",
                "label": "Eletrodomésticos",
                "max_images": 6
            },
            {
                "code": "5060",
                "label": "Materiais de construção e jardim",
                "max_images": 6
            },
            {
                "code": "5080",
                "label": "Utilidades domésticas",
                "max_images": 6
            },
            {
                "code": "5100",
                "label": "Objetos de decoração",
                "max_images": 6
            }
        ]
    },
    {
        name: 'Eletrônicos e celulares',
        icon: mobileFone,
        id: 'ELETRONICOS_E_CELULARES',
        "subcategories": [
            {
                "code": "3040",
                "label": "Computadores e acessórios",
                "max_images": 6
            },
            {
                "code": "3060",
                "label": "Celulares e telefonia",
                "max_images": 6
            },
            {
                "code": "3080",
                "label": "Áudio, TV, vídeo e fotografia",
                "max_images": 6
            }
        ]
    },
    {
        name: 'Games',
        icon: guitarIcon,
        id: 'MUSICA_E_HOBBIES',
        "subcategories": [
            {
                "code": "1140",
                "label": "Consoles",
                "max_images": 6
            },
            {
                "code": "1160",
                "label": "Games",
                "max_images": 6
            }
        ]
    },
    {
        name: 'Vagas de emprego',
        icon: bussinessIcon,
        id: 'VAGAS_DE_EMPREGO'
    },
    {
        name: 'Serviços',
        icon: toolsIcon,
        id: 'SERVICOS'
    },
    {
        name: 'Moda e lazer',
        icon: dressIcon,
        id: 'MODA_E_LAZER',
        "subcategories": [
            {
                "code": "8020",
                "label": "Beleza e saúde",
                "max_images": 6
            },
            {
                "code": "8040",
                "label": "Roupas e calçados",
                "max_images": 6
            },
            {
                "code": "8060",
                "label": "Bolsas, malas e mochilas",
                "max_images": 6
            },
            {
                "code": "8080",
                "label": "Bijouterias, relógios e acessórios",
                "max_images": 6
            }
        ]
    },
];
