/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ item }) {
    return (
        <Link to={`/product/${item.id}`}>
            <div className="item__container">
                <div className="item--img__container">
                    <img className="item--img" src={item.image} alt={item.title} />
                </div>
                <h2 className="item--title">{item.title}</h2>
                <p className="item--description">{item.description}</p>
                <p className="item--price">$ {item.price}</p>
            </div>
        </Link>
    );
}