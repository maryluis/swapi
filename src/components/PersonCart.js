import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { actionGetOneData } from "../redux/dataOnePerson";
import { useEffect } from "react";
import { image } from "../tools";

export const PersonCart = ({data = {}, getData,}) => {
    let { id } = useParams(); 
    useEffect(() => getData(id), [getData, id]);

    const { birth_year, name, eye_color, gender, hair_color, height, mass, skin_color } = data;

    return(
        <div>
            <Link className="noDecoration darkColor" to="/">Main</Link>
            <div className="flex column alignCenter">
                <h4 className="textCenter">{name}</h4>
                <img src={image} alt="space" width="300"/>
                <ul>
                    <li>Birth year: {birth_year}</li>
                    <li>Eye color: {eye_color}</li>
                    <li>Gender: {gender}</li>
                    <li>Hair color: {hair_color}</li>
                    <li>Height: {height}</li>
                    <li>Mass: {mass}</li>
                    <li>Skin color: {skin_color}</li>
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