import "./Advertise.css";
import advertiseImage1 from "./bg-image/advertise.jpg";
function Paragraph(){
    return(
        <div className="advertise-container">
              <h2>Speciality</h2>
              <div className="advertise-item">
                  <img src={advertiseImage1} alt="Advertise" />
                  <p>Discover the best products for your beloved pets at unbeatable prices! From nutritious food to fun toys and stylish accessories, we have everything you need to keep your furry friends happy and healthy. Shop now and give your pets the care they deserve!</p>
              </div>
        </div>
    );
}
export default Paragraph;