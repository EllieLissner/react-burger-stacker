
import Ingredients from './Ingredients'
 
const Burger = (props) => {
    
        let ingredients = props.addedIngredients.map((item, index) => (
            <li>
                <Ingredients
                    name={item.name}
                    color={item.color}
                    key={index}
                />
            </li>
        ))
        return(
            <ul>
                {ingredients.reverse()}
            </ul>
        )
   
}

export default  Burger