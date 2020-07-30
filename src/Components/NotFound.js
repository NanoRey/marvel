import React from "react"
import { Col } from 'reactstrap';
import { Link } from "react-router-dom";

function NotFound(){
    return(<>
    <Col xs="12">
        <div class="card bg-dark text-white">
            <img src="https://media.giphy.com/media/14uQ3cOFteDaU/source.gif" height="500" width="500" class="card-img" alt="marvel logo"/>
            <div class="card-img-overlay">
                <h5 class="card-title">NOT FOUND</h5>
                <Link to="/personajes" type="button" class="btn btn-danger text-white text-center">Pulsa aqui para volver al inicio</Link>
            </div>
        </div>
        
    </Col>
    </>)
}

export default NotFound;