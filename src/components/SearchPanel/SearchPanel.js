import React from "react";
import "./SearchPanel.css";

// :TODO: props needs to be passed in somewhere, along with proper routes

const SearchPanel = props => (

    <div className="uk-container searchContainer">
        <p className="uk-text-center"><span className="redText" uk-icon="bolt"></span></p>
        <h3 className="searchContainerTitle uk-text-center">look up an author:</h3>
        
        <div className="uk-width-1-2@s uk-align-center">
            <form className="uk-width-1-1 uk-form-stacked">
                <fieldset className="uk-fieldset">
                    
                    <div className="uk-margin">
                    <label className="uk-form-label" for="searchDiversity">Author Diversity</label>
                        <select className="uk-select" id="selectRace">
                            <option>Select author race...</option>
                            <option>Asian</option>
                            <option>Black</option>
                            <option>Hispanic</option>
                            <option>Multiracial</option>
                            <option>Native American</option>
                            <option>Pacific Islander</option>
                            <option>White</option>
                        </select>  
                    </div>

                    <div className="uk-margin">
                        <label className="uk-form-label" for="selectCategory">Literary Category</label>
                        <select className="uk-select" id="selectCategory">
                            <option>Select book category...</option>
                            <option>Arts & Photography</option>
                            <option>Biographies & Memoirs</option>
                            <option>Children's Books</option>
                            <option>History</option>
                            <option>Literature & Fiction</option>
                            <option>Mystery & Suspense</option>
                            <option>Romance</option>
                            <option>Sci-Fi & Fantasy</option>
                            <option>Teens & Young Adult</option>
                        </select>  
                    </div>

                    <button className="uk-button uk-button-primary uk-align-center">look up</button>
                </fieldset>
            </form>
            
        </div> 

    </div>

);

export default SearchPanel;