import React, {useState} from 'react';
import './Main.css'
import MapMetro from '../../common/MapMetro'
import Legend from "../../common/Legend";

const Main = () => {
    const [lines, setLines] = useState('');

    return (
        <div className={`Main_wrap`}>
            <MapMetro lines={lines} setLines={setLines}/>
            <Legend lines={lines} setLines={setLines}/>
        </div>
    );
};

export default Main;
