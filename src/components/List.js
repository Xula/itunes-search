import React from 'react';
import '../styles/list.css';

function List({ data }) {
    return(
        <div className="wrapper">
            {data.resultCount ? <h2>Total de músicas encontradas: {data.resultCount}</h2> : <h2>Nenhuma música encontrada!</h2>}
            <span>(Pesquise alguma música e clique nela para busca-la no youtube)</span>
            <ul>
            {data.results ? (
                data.results.map(function(m){
                    let link = `https://www.youtube.com/results?search_query=${m.trackName}`;
                    return (<li><a target="_blank" href={link}>{m.trackName}</a></li>)
                })
            )
            : null}
            </ul>
        </div>
    )
}

export default List;