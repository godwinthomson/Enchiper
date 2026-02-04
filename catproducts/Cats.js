import "./Cats.css";
import americanshorthair from "./bg-image/americanshorthair.jpg";
import bengal from "./bg-image/bengal.jpg";
import britishshorthair from "./bg-image/britishshorthair.jpg";
import mainecoon from "./bg-image/maine coon.jpg";
import persian from "./bg-image/persian.jpg";
import ragdoll from "./bg-image/ragdoll.jpg";
import savannah from "./bg-image/savannah.jpg";
import siamese from "./bg-image/siamese.jpg";
import siberian from "./bg-image/siberian.jpg";
const CatTypes = [
    {
        id: 1,
        Image: americanshorthair,
        name: "American Shorthair",
    },
    {
        id: 2,
        Image: bengal,
        name: "Bengal",
    },
    {
        id: 3,
        Image: britishshorthair,
        name: "British Shorthair",
    },
    {
        id: 4,
        Image: mainecoon,
        name: "Maine Coon",
    },
    {
        id: 5,
        Image: persian,
        name: "Persian",
    },
    {
        id: 6,
        Image: ragdoll,
        name: "Ragdoll",
    }, 
    {
        id: 7,
        Image: savannah,
        name: "Savannah",
    },
    {
        id: 8,
        Image: siamese,
        name: "Siamese",
    },
    {
        id: 9,
        Image: siberian,
        name: "Siberian",
    },
];
function CatTypesComponent(){
    return(
        <div className="cattypes-container">
              <h2> Cat Types</h2>
                <ul className="cattypes-list">
                    {
                    CatTypes.map((product) => (
                        <li key={product.id} className="cattypes-item">
                        <img src={product.Image} alt={product.name} />
                        <h3>{product.name}</h3>
                        </li>
                    ))}
                </ul>
        </div>
    );
}
export default CatTypesComponent;