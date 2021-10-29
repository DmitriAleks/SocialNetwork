import React, {useState} from 'react';
import style from './Paginator.module.css';

type PaginatorPropsType = {
    totalItemCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
}

let Paginator: React.FC<PaginatorPropsType> = ({totalItemCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalItemCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = 10
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return <div className={style.section}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}> {'<<'} </button>}
        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={currentPage === p ? style.selectedPage : style.pageNumber}
                                 key={p}
                                 onClick={() => onPageChanged(p)}>
                       {p}
                   </span>
                })}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}> {'>>'} </button>}
    </div>
};
export default Paginator;