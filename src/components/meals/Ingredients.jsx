import React, { useContext } from 'react';

import { menuContext } from '../../contexts/MainContext';
import Burger from './Burger';
import Hotdog from './hotdog';
import Pizza from './Pizza';

const Ingredients = () => {
    let{meal}=useContext(menuContext)
    return (
        <div>
            {meal == "burger" ? (
                
                <Burger/>
                
        
      ) : (
        ""
      )}
      {meal == "pizza" ? (
        <Pizza/>
      ) : (
        ""
      )}
      {meal == "hotdog" ? (
        <Hotdog/>
      ) : (
        ""
      )}

            
        </div>
    );
};

export default Ingredients;