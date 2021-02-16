import React, {useEffect, useState} from "react";
import PIC from "../utils/PIC";

function Breakfast(){

    const [btnState, setBtnState] = useState({
        search: "Breakfast",
        error: ""
    })

    console.log("this is the state" + btnState)
    const [result, setResultState] = useState([]);

    useEffect(() => {

    

        PIC.searchTerms(btnState.search)
          .then(res => {
            console.log(res);
            if (res.data.length === 0) {
              throw new Error("No results found.");
            }
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            setBtnState(
              console.log(res),
              {
                error: ""
              },

              setResultState(
                res.data.results
              )
          
            );
          })
          .catch(err => setBtnState({ error: err.message }));
      }, [])


    return(
        <div>
                  <h2 className="breakfast">Breakfast</h2>
  
  <div className="grid ">
      { result.map((recipeCards, index) => (
        <div className="row ">
          <div className="col-3 col-sm-1 mb-3">
            
           <div className="box" style={{width: "18rem"}}>
          <img className="card-img-top" src={recipeCards.image} alt="Card image cap" />
          <div className="card-body ">
            <div className="card-content">
            <h5 className="card-title">{recipeCards.title}</h5>
            <p className="card-text">{recipeCards.sourceName}</p>
            <a href={recipeCards.sourceUrl} className="btn btn-primary">View Recipe</a>
              </div>
          </div>
        </div>
          </div>
         
          </div>
    
     
      ))}
        </div>
      </div>
        
    )
}

export default Breakfast;