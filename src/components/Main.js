import { actionGetData } from "../redux";
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { IMG, getIdFromUrl } from "../tools";
import { Link } from "react-router-dom";

const Main = ({ getData, items = [], lastPage}) => {
    const [page, changePage] = useState(1);
    useEffect(() => getData(page), [page, getData]);
    return(
        <main>

            <div className="flex spaceAround wrap marginBottom">
                {items.map((item) => 
                <Link className="noDecoration darkColor" key={item.created} to={`characters/${getIdFromUrl(item.url)}`}>
                    <div className="flex column">
                        <h4 className="textCenter">{item.name}</h4>
                        <img src={IMG} alt="space" width="170" height="100"/>
                        <span className="textCenter">birth year: {item.birth_year}</span>
                    </div>
                </Link>)}
            </div>
            <div className="flex center marginBottom">
                <button className="textCenter" disabled={page < 2} onClick={() => changePage(page-1)}>Previous</button>
                <span className="padding5"> {page}  </span>
                <button className="textCenter" disabled={!lastPage} onClick={() => changePage(page+1)}>Next</button>
            </div>
        </main>
    )
}
const mapStateToProps = (state) => ({
    items: state.data.results,
    lastPage: state.data.next,
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    getData: actionGetData,
}, dispatch);

export const CMain = connect(mapStateToProps, mapDispatchToProps)(Main);


