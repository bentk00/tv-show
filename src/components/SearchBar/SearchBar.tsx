import {Search as SearchIcon} from "react-bootstrap-icons";
import s from './style.module.css'
import React from "react";
export function SearchBar ({onSubmit: onSubmit} : any){

    function submit(e: any){
        let value = e.target.value;
        if (e.key === 'Enter' && value.trim() !== ''){
            onSubmit(value);
        }
    }
    return <>
        <SearchIcon size={27} className={s.icon} />
        <input
            className={s.input}
            type="text"
            onKeyUp={submit}
            placeholder="Search a tv show you may like ..."/>
    </>
}