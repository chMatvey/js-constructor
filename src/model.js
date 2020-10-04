import image from './assets/image.jpg'
import { TitleBlock } from "./block/title-block";
import { ImageBlock } from "./block/image-block";
import { TextBlock } from "./block/text-block";
import { ColumnsBlock } from "./block/columns-block";

export const model = [
    new TitleBlock('Констурктор сайтов на чистом JavaScript',
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
    new ImageBlock(image, {
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
    new TextBlock('Кинемато́граф — отрасль человеческой деятельности, заключающаяся в создании движущихся изображений. Иногда также упоминается как синемато́граф и кинематогра́фия. Название заимствовано у одноимённого аппарата, изобретённого братьями Люмьер и положившего начало коммерческому использованию технологии.',
        {
            styles: {
                padding: '1.5rem',
                background: 'linear-gradient(to right, #FAE35F, #FACB4D)',
                "font-weight": 'bold',
                'text-align': "center"
            }
        }
    ),
    new ColumnsBlock( [
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
