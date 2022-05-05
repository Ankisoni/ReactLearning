import React from "react";
import PropTypes from 'prop-types';

export function Cards(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-header">
                            {props.headerText}
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src="https://picsum.photos/200/100" alt="Card image" />

                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        {/* <div className="card-footer text-muted">
                            2 days ago
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


Cards.propTypes ={
    headerText :PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}

Cards.defaultProps ={
    headerText : "Card Header text here",
    title:"Card Title here"
}