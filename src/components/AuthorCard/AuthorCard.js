import React from "react";
import "./AuthorCard.css";

const AuthorCard = props => (

    <div className="uk-card uk-card-default">
        <div className="uk-card-header">
            <div className="uk-width-expand">
                <div className="uk-card-badge uk-label">8 works</div>
                <h3 className="uk-card-title uk-margin-remove-bottom">James Baldwin</h3>
                <p className="uk-text-meta uk-margin-remove-top"><span className="flag-icon flag-icon-us"></span> New York City, New York, United States<br>Born: August 02, 1924<br>Died: December 01, 1987</p>
            </div>
        </div>
        <div className="uk-card-body">
            <p>James Arthur "Jimmy" Baldwin was an American novelist and social critic. His essays, as collected in Notes of a Native Son, explore intricacies of racial, sexual, and className distinctions in Western societies, most notably in mid-20th-century America.</p>
        </div>
        <div className="uk-card-footer">
            <a className="uk-align-right" href="baldwin.html" className="uk-button uk-button-text">View Author<span uk-icon="arrow-right"></span></a>
        </div>
    </div>

);