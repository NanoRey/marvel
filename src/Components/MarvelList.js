import React, { useEffect, useState, useContext } from "react"
import { Col } from 'reactstrap';
import { Link } from "react-router-dom";
import ContextApiMarvel from "../ContextApi/ContextApiMarvel"

function MarvelList(){

    const stateMarvel=useContext(ContextApiMarvel)
    const {setArrayMarvel,arrayMarvel}=stateMarvel;

    async function catchApi(){
        const fetchMarvel= await fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=6b577e01b776fdb56eb941eee5b38ffb")
        const result= await fetchMarvel.json();
        console.log(result.data.results)
        const finalResult=result.data.results;
        setArrayMarvel(finalResult);
    }

    useEffect(()=>{
       catchApi(); 
    },[])
    
    return(<>
    <Col xs="12">
        <Link to="/" class="btn btn-danger text-white text-center">Home</Link>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {arrayMarvel.map((value, index)=>{
                    return(<>
                        <tr>
                            <th scope="row">{`${index}:${value.id}`}</th>
                            <td>{value.name}</td>
                            <td><img width="100" src={`${value.thumbnail.path}.${value.thumbnail.extension}`}></img></td>
                            <Link to={`/personajes/${value.id}`} class="btn btn-danger text-white text-center">Ver mas info</Link>
                        </tr>
                    </>)
                })}
            </tbody>
        </table>
    </Col>
    </>)
}

export default MarvelList;