import "./Content.css";
import product1 from "./bg-image/product1.jpg";
import product2 from "./bg-image/product2.jpg";
import product3 from "./bg-image/product3.jpg";
import product4 from "./bg-image/product4.jpg";
import product5 from "./bg-image/product5.jpg";
import product6 from "./bg-image/product6.jpg";
const Petproducts = [
    {
        id: 1,
        Image: product1,
        name: "Pet Food",
        offerprice: "$10.99",
    },
    {
        id: 2,
        Image: product2,
        name: "Pet Home",
        offerprice: "$59.99",
    },
    {
        id: 3,
        Image: product3,
        name: "Pet Holder",
        offerprice: "$15.99",
    },
    {
        id: 4,
        Image: product4,
        name: "PetAccessories",
        offerprice: "$25.99",

    },
    {
        id: 5,
        Image: product5,
        name: "Pet Foodcontainer",
        offerprice: "$12.99",
    },
    {
        id: 6,
        Image: product6,
        name: "Pet Traveller",
        offerprice: "$45.99",
    },    
];
function Petoffers(){
    return(
        <div className="petcorner-container">
              <h2>Pet Offers</h2>
                <ul className="petcorner-list">
                    {
                    Petproducts.map((product) => (
                        <li key={product.id} className="petcorner-item">
                        <img src={product.Image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p className="offer-price">{product.offerprice}</p>
                        </li>
                    ))}
                </ul>
        </div>
    );
}
export default Petoffers;