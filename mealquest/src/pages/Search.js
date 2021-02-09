import React from "react";

function Search(props){
    return(
        <div>
             <div className="row">
                <div className="col-12">
                    <div class="input-group input-group input-group-lg mx-auto" style={{width: "90%", paddingTop: "20px"}}>
                         <input type="text" value={props.search} className="form-control" onChange={props.handleInputChange} placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                         <div className="input-group-append">
                         <button className="btn btn-outline-secondary" onClick={props.handleFormSubmit} type="button">Search</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Search;