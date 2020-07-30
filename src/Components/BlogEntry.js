import React from "react"
import { Col } from 'reactstrap';

function BlogEntry(){
    return(<>

    <Col xs="12">
        <div class="card bg-dark text-white">
            <img src="https://media.giphy.com/media/M2hv7BgZCKCeQ/source.gif" height="500" width="500" class="card-img" alt="logo" />
            <div class="card-img-overlay">
                <h5 class="card-title">Magia!!</h5>
            </div>
        </div>
    </Col>

    </>)
}

export default BlogEntry;