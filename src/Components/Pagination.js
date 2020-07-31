import React from "react"
import { Col } from 'reactstrap';

function Pagination(props){
    // const stateMarvel=useContext(ContextApiMarvel)
    // const {setArrayMarvel,arrayMarvel}=stateMarvel;

    return(<>
    <Col xs="12">
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <button onClick={()=>props.function(-1)} class="page-link" href="#" tabindex="-1">Previous</button>
                </li>
                <li onClick={(event)=>props.function(event.target.textContent)} class="page-item"><a class="page-link" href="#">1</a></li>
                <li onClick={(event)=>props.function(event.target.textContent)} class="page-item"><a class="page-link" href="#">2</a></li>
                <li onClick={(event)=>props.function(event.target.textContent)} class="page-item"><a class="page-link" href="#">3</a></li>
                <li onClick={(event)=>props.function(event.target.textContent)} class="page-item"><a class="page-link" href="#">4</a></li>
                <li onClick={(event)=>props.function(event.target.textContent)} class="page-item"><a class="page-link" href="#">5</a></li>
                <li onClick={(event)=>props.function(event.target.textContent)} class="page-item"><a class="page-link" href="#">6</a></li>
                <li class="page-item">
                    <button onClick={()=>props.function(1)} class="page-link" href="#">Next</button>
                </li>
            </ul>
        </nav>
    </Col>
    </>)
}

export default Pagination;



