import React from "react";
import { useParams, Link } from "react-router-dom";
import Cocktails from '../cocktails.json'
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';

function Details(){
    let {name} = useParams();
    let result = Cocktails.filter(drink => drink.name === name)
    result = result[0]
    
    return(
        <React.Fragment>           
            <Slide in="true" direction="left">
            <Box color="white" mx="auto" width="80%" boxShadow={2} borderRadius={15} p={2} className="infoPanel">
             <h1>{name}</h1>
                <div className="whitePill">
                    <h4>Ingredients: {result.ingredients.length}</h4>
                    <h4>Garnish: {result.garnish !== null ? 'Yes' : 'No'} </h4>
                </div>
                <h3>Ingredients</h3>
                 <div> 
                {result.ingredients.map((item, index) => (
                    <div key={index}>
                    <h4 style={{marginBottom: 0}}>{item.name}</h4>
                    <span>{item.amount} {item.unit}</span>
                    </div>
                ))}
                </div>
                <div className="whitePill"><h3>Preparation</h3></div>
                <p>{result.method}</p>
                { result.garnish &&
                    <div className="whitePill"><h3>Garnish</h3></div>
                }
                { result.garnish &&
                <p>{result.garnish}</p>
                }
                
                { result.note &&
                    <div className="whitePill"><h3>Notes</h3></div>
                }
                { result.note && 
                    <p>{result.note}</p>
                }
            </Box>
            </Slide>
        </React.Fragment>       
    )    
};

export default Details;