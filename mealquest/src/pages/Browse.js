import React, {useState, useEffect} from "react";
import Nav from "../components/Nav";
import API from "../utils/API";
import "../Home.css";
import Search from "./Search";

function Browse(){

    const [searchState, setSearchState] = useState({
        search: "",
        error: ""
    });

    const [resultState, setResultState] = useState([]);


    
  useEffect(() => {

    

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


  const handleInputChange = event => {
    setSearchState({ search: event.target.value });
  };

  
  const handleFormSubmit = event => {
    event.preventDefault();
    if (!searchState.search) {
      return;
    }
    API.searchTerms(searchState.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearchState({

          error: ""
        },
          setResultState(
            res.data.results
          )

        );
      })
      .catch(err => setSearchState({ error: err.message }));
      };





    return(
       <div>
           <Nav />

            <Search 
             handleInputChange={handleInputChange}
             handleFormSubmit={handleFormSubmit}
             results={searchState.search}   
            />
                        
            <div className="grid">
            { resultState.map((recipeCards, index) => (
              <div className="row">
                <div className="col-3 col-lg-1 mb-3">
                  
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
};

export default Browse;