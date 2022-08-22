import React from 'react';

const Legend = (props) => {
    return (
        <div>
            <div className={'legend_wrap'}>

                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_1'? '': 'lineText_1')}>
                    <span className={'legend_color color1'}>1</span>
                    <span>Красная - Сокольническая</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_2'? '': 'lineText_2')}>
                    <span className={'legend_color color2'}>2</span>
                    <span>Зеленая - Замоскворецкая</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_3'? '': 'lineText_3')}>
                    <span className={'legend_color color3'}>3</span>
                    <span>Синяя - Арбатско-Покровская</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_4'? '': 'lineText_4')}>
                    <span className={'legend_color color4'}>4</span>
                    <span>Голубая - Филевская</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_5'? '': 'lineText_5')}>
                    <span className={'legend_color color5'}>5</span>
                    <span>Кольцевая</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_6'? '': 'lineText_6')}>
                    <span className={'legend_color color6'}>6</span>
                    <span>Оранжевая - Колужско-Рижская</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_7'? '': 'lineText_7')}>
                    <span className={'legend_color color7'}>7</span>
                    <span>Фиолетовая - Таганско-Краснопресненская</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_8'? '': 'lineText_8')}>
                    <span className={'legend_color color8'}>8</span>
                    <span>Желтая - Калининского-Солнцевская</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_8A'? '': 'lineText_8A')}>
                    <span className={'legend_color color8A'}>8A</span>
                    <span>Бежевый - Солнцевская</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_9'? '': 'lineText_9')}>
                    <span className={'legend_color color9'}>9</span>
                    <span>Серая - Серпуховско-Тимирязевская</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_10'? '': 'lineText_10')}>
                    <span className={'legend_color color10'}>10</span>
                    <span>Салатовая - Люблинская-Дмитровская</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_11'? '': 'lineText_11')}>
                    <span className={'legend_color color11'}>11</span>
                    <span>Лазурный - Монорельсовая транспортная система</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_12'? '': 'lineText_12')}>
                    <span className={'legend_color color12'}>12</span>
                    <span>Светло синий - Бутовская (легкое метро)</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_13'? '': 'lineText_13')}>
                    <span className={'legend_color color13'}>13</span>
                    <span>Московский монорельс</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_14'? '': 'lineText_14')}>
                    <span className={'legend_color color14'}>14</span>
                    <span> Московское центральное кольцо</span>
                </div>
                <div className={'legend_items'} onClick={() => props.setLines(props.lines ==='lineText_15'? '': 'lineText_15')}>
                    <span className={'legend_color color15'}>15</span>
                    <span> Некрасовская линия</span>
                </div>
            </div>

        </div>
    );
};

export default Legend;
