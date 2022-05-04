import React from "react";

export function Cards(props) {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card text-center ">
                        <div class="card-header">
                            {props.headerText}
                        </div>
                        <div class="card-body">
                            <img class="card-img-top" src="https://picsum.photos/200/100" alt="Card image" />

                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        {/* <div class="card-footer text-muted">
                            2 days ago
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}