import React from 'react';
import loader from "../../../assets/images/loading-.gif";
import style from './Proloader.module.css'

let Preloader = () => {
 return  <div><img src={loader} className={style.preloader}/></div>
}
export default Preloader