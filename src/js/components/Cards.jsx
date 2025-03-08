import { details } from "./array/dataAtribute";
const Cards = ({ name, image }) => {


  return (
    
   
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>
          <p className="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo animi dignissimos ipsam veniam consectetur ab quos quaerat assumenda neque. Temporibus architecto tempore veniam porro est! Eligendi ipsa dignissimos quasi sequi! </p>
          <a href="#" className="btn btn-primary">Find Out More</a>
        </div>
      </div>
   

  );
}
export default Cards;