import React, { useEffect, useState, useContext } from "react"
import { Col } from 'reactstrap';
import { Link, useParams, useRouteMatch, Switch, Route } from "react-router-dom";
import ContextApiMarvel from "../ContextApi/ContextApiMarvel";
import BlogEntry from "./BlogEntry"

function PersonMarvel(){

    let{id}=useParams();
    console.log(id);

    const stateMarvel=useContext(ContextApiMarvel)
        const {arrayMarvel}=stateMarvel;
        const resultPerson=arrayMarvel.find((value)=>value.id===id)
    
    const [infoPerson,setInfoPerson]=useState();

    async function catchApi(){
        const fetchPersonMarvel= await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=6b577e01b776fdb56eb941eee5b38ffb`)
        const resultPerson= await fetchPersonMarvel.json();
        console.log("logApi",resultPerson.data.results[0])
        const finalResultPerson=resultPerson.data.results[0];
        setInfoPerson(finalResultPerson);
    }

    useEffect(()=>{
       catchApi(); 
    },[])
    
    let { path, url } = useRouteMatch ();

    return(<>
        
        <Col xs="12">
            <div className="text-center">
                <Link to={`${url}/prueba`} type="button" class="btn btn-warning text-white text-center">Prueba este boton</Link>
            </div>

            <Switch >
                <Route path={`${path}/:prueba`}>
                    <BlogEntry/>
                </Route>
            </Switch>

            {infoPerson
                ?   <div class="card bg-dark text-white">
                        <img src={`${infoPerson.thumbnail.path}.${infoPerson.thumbnail.extension}`} height="500" width="500" class="card-img" alt="marvel logo"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">{infoPerson.name}</h5>
                            <Link to="/personajes" type="button" class="btn btn-danger text-white text-center">Pulsa aqui para ver a los peronajes</Link>
                        </div>
                    </div>
                :   <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                    </button>
                }

            <table class="table table-dark">
                <thead>
                    <h2>Informacion de Comics</h2>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {infoPerson
                        ? infoPerson.comics.items.map((value, index)=>{
                            return(<>
                                <tr>
                                    <th scope="row">{value.name}</th>
                                    <td>{infoPerson.name}</td>
                                    <td>{infoPerson.description}</td>
                                    <td><Link to={`/personajes`} class="btn btn-danger text-white text-center">Ver mas personajes</Link></td>
                                </tr>
                            </>)
                        })
                        :   <button class="btn btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                            </button>
                    }
                </tbody> 
            </table>
            
            
        </Col>

        
    </>)
}

export default PersonMarvel;