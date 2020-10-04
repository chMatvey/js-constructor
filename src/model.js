import { ModelTypes } from "./model.types";
import image from './assets/image.jpg'
import { Block } from "./block/block";

export const model = [
    new Block(ModelTypes.TITLE, 'Констурктор сайтов на чистом JavaScript',
        {
            tag: 'h2',
            //styles: 'background: linear-gradient(to right, #ff0099, #493240); text-align: center; padding: 1.5rem; color: #fff;'
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }
    ),
    new Block(ModelTypes.IMAGE, image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '600px',
            height: 'auto'
        },
        alt: 'Кинематограф'
    }),
    new Block(ModelTypes.TEXT, 'Кинемато́граф — отрасль человеческой деятельности, заключающаяся в создании движущихся изображений. Иногда также упоминается как синемато́граф и кинематогра́фия. Название заимствовано у одноимённого аппарата, изобретённого братьями Люмьер и положившего начало коммерческому использованию технологии.',
        {
            styles: {
                padding: '1.5rem',
                background: 'linear-gradient(to right, #FAE35F, #FACB4D)',
                "font-weight": 'bold',
                'text-align': "center"
            }
        }
    ),
    new Block(ModelTypes.COLUMNS, [
            'Эпоха немого кино',
            'Появление звука в кино',
            'Появление цвета',
            'Эффект 25-го кадра',
            'Цифровой кинематограф'
        ],
        {
            styles: {
                background: 'linear-gradient(to bottom, #06A5D6, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    )
]
