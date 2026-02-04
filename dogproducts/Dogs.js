import "./Dogs.css";
import doggerman from "./bg-image/doggerman.jpg";
import german from "./bg-image/german.jpg";
import goldenretriever from "./bg-image/goldenretriever.jpg";
import husky from "./bg-image/husky.jpg";
import lab from "./bg-image/lab.jpg";
import pug from "./bg-image/pug.jpg";
import rotveiler from "./bg-image/rotveiler.jpg";
import shitzu from "./bg-image/shitzu.jpg";
// import product9 from "./bg-image/product9.jpg";
const DogTypes = [
    {
        id: 1,
        Image: doggerman,
        name: "Doggerman",
    },
    {
        id: 2,
        Image: german,
        name: "German Shepherd",
    },
    {
        id: 3,
        Image: goldenretriever,
        name: "Golden Retriever",
    },
    {
        id: 4,
        Image: husky,
        name: "Husky",
    },
    {
        id: 5,
        Image: lab,
        name: "Labrador",
    },
    {
        id: 6,
        Image: pug,
        name: "Pug",
    }, 
    {
        id: 7,
        Image: rotveiler,
        name: "Rottweiler",
    },
    {
        id: 8,
        Image: shitzu,
        name: "Shitzu",
    },
    // {
    //     id: 9,
    //     Image: product9,
    // },
];
function DogTypesComponent(){
    return(
        <div className="dogtypes-container">
              <h2>Dog Types</h2>
                <ul className="dogtypes-list">
                    {
                    DogTypes.map((product) => (
                        <li key={product.id} className="dogtypes-item">
                        <img src={product.Image} alt={product.name} />
                        <h3>{product.name}</h3>
                        </li>
                    ))}
                </ul>
        </div>
    );
}
export default DogTypesComponent;