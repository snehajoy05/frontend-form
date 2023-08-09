import { useEffect,useState } from 'react';
import './Field.css';


export const Field = (props) => {
    // useEffect(()=>{
    //     return()=>{
    //     console.log("component is unmounting")
    // };
    // },[]);

    const handleSelected = (e) => {
        if(props.chooseCountry) {props.chooseCountry(e.target.value)};
    }

    return (
        <div className="field">
            <label>{props.label}</label>
            <select onChange={handleSelected}>
                {props.options.map((item) => {
                    // console.log(item);
                    return (
                    <option value={item.label} key={item.label}>
                        {item.label}
                    </option>
                    );
                })}
            </select>
        </div>
    );
}
export default Field;