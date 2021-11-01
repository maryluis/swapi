import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { actionGetOneData } from "../redux/dataOnePerson";
import { useEffect } from "react";
import { image } from "../tools";

export const PersonCart = ({data = {}, getData, id="", state}) => {
    useEffect(() => getData(id), [getData, id]);

    const { birth_year } = data

    return(
        <div>
            <Link className="noDecoration darkColor" to="/">Main</Link>
            <div className="flex column alignCenter">
                <h4 className="textCenter">{data.name}</h4>
                <img src={image} alt="space" width="300"/>
                <ul>
                    <li>Birth year: {birth_year}</li>
                    <li>Eye color: {data.eye_color}</li>
                    <li>Gender: {data.gender}</li>
                    <li>Hair color: {data.hair_color}</li>
                    <li>Height: {data.height}</li>
                    <li>Mass: {data.mass}</li>
                    <li>Skin color: {data.skin_color}</li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
     data: state.onePerson,
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
     getData: actionGetOneData,
}, dispatch);

export const CPersonCart = connect(mapStateToProps, mapDispatchToProps)(PersonCart);
export default connect(mapStateToProps, mapDispatchToProps)(PersonCart);