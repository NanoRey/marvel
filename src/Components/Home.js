import React from "react"
import { Col } from 'reactstrap';
import { Link } from "react-router-dom";

function Home(){
    return(<>
    <Col xs="12">
        <div class="card bg-dark text-white">
            <img src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Marvel-Studios-logo.jpg" height="500" width="500" class="card-img" alt="marvel logo"/>
            <div class="card-img-overlay">
                <h5 class="card-title">Encuentra qui a tus personajes favoritos de Marvel</h5>
                <p class="card-text">Marvel Worldwide, Inc., conocida como Marvel Comics, es una editorial de historietas estadounidense creada en 1939, inicialmente con el nombre de Timely Publications. Entre sus personajes emblemáticos del género superheroico se encuentran Spider-Man, Wolverine, X-Men, Capitán América, Iron Man, Capitana Marvel, Hulk, Thor, The Punisher, Los 4 Fantásticos, Los Vengadores, Deadpool, Daredevil, Doctor Strange, Ghost Rider, y los Inhumanos, entre otros.</p>
                <Link to="/personajes" type="button" class="btn btn-danger text-white text-center">Pulsa aqui para ver a los peronajes</Link>
            </div>
            
        </div>
        
    </Col>
    </>)
}

export default Home;