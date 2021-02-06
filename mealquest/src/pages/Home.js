import React, {useState, useEffect} from "react";
import Nav from "../components/Nav";
import API from "../utils/API";
import "../Home.css"

function Home(){

    const [searchState, setSearchState] = useState({
        search: "chocolate cake",
        error: ""
    });

    const [resultState, setResultState] = useState([]);


    
  useEffect(() => {

    document.title = "";

    API.searchTerms(searchState.search)
      .then(res => {
        console.log(res.data.results);
        if (res.data.results.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearchState(
          {
            error: ""
          },

          setResultState(
            res.data.results
          )
        );
      })
      .catch(err => setSearchState({ error: err.message }));
  }, [])


 




    return(
       <div>
           <Nav />
           <div className="row">
                <div className="col-12">
                    <div class="input-group input-group input-group-lg mx-auto" style={{width: "90%", paddingTop: "20px"}}>
                         <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                         <div className="input-group-append">
                         <button className="btn btn-outline-secondary" type="button">Search</button>
                        </div>
                    </div>
                </div>
            </div> 
                        
            <div className="grid">
            { resultState.map((recipeCards, index) => (
              <div>
                 <div className="box" style={{width: "18rem"}}>
                <img className="card-img-top" src={recipeCards.image} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{recipeCards.title}</h5>
                  <p className="card-text">{recipeCards.sourceName}</p>
                  <a href={recipeCards.sourceUrl} className="btn btn-primary">View Recipe</a>
                </div>
              </div>
                </div>
               
           
            ))}
            </div>
       </div>

    )
}

export default Home;