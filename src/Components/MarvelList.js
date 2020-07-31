import React, { useEffect, useState, useContext } from "react"
import { Col } from 'reactstrap';
import { Link } from "react-router-dom";
import ContextApiMarvel from "../ContextApi/ContextApiMarvel"
import Pagination from "./Pagination"

function MarvelList(){

    const stateMarvel=useContext(ContextApiMarvel)
    const {setArrayMarvel,arrayMarvel}=stateMarvel;
    
    const url="https://gateway.marvel.com:443/v1/public/characters"
    const apiKey="6b577e01b776fdb56eb941eee5b38ffb";
    const limitUrl=20;
    const [offSet,setOffset]=useState(0);

    //const URL= "https://gateway.marvel.com:443/v1/public/characters?apikey=6b577e01b776fdb56eb941eee5b38ffb" +"?apikey="+apiKey +"&limit=" + limitUrl +"&offset=" +offSetFinal;

    function giveMeTheOffset(indice){
        console.log(indice);
        const diferencial=20;

        if(offSet<=0 & indice===-1){
            setOffset(0);
            return;
        }
        if(indice===1){
            const offSetFinal= offSet+diferencial;
            setOffset(offSetFinal)
            return;
        }
        if (indice===-1 && offSet!==0){
            const offSetFinal= offSet-diferencial;
            setOffset(offSetFinal);
            return;
        }
        const offSetFinal=indice*limitUrl;
        setOffset(offSetFinal);
        
    }

    async function catchApi(){
        const fetchMarvel= await fetch(url + "?apikey=" + apiKey + "&limit=" + limitUrl + "&offset=" + offSet)
        const result= await fetchMarvel.json();
        console.log(result.data.results)
        const finalResult=result.data.results;
        setArrayMarvel(finalResult);
    }

    useEffect(()=>{
       catchApi(); 
    },[offSet])
    
    return(<>
    <Col xs="12">
        <Link to="/" class="btn btn-danger text-white text-center mt-3">Home</Link>

        <Pagination function={giveMeTheOffset}/>

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