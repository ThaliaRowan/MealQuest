import axios from "axios";

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://api.spoonacular.com/recipes/complexSearch?query=" + query+ "&addRecipeInformation=true&number=50&apiKey="
    );
  }
};
