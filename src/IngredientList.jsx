
import Ingredients from "./Ingredients"

const IngredientList = (props) => {
    
        const ingredients = props.ingredients.map((item, index) => (
            <li onClick={(e) => props.addToBurger(e)}>
                <Ingredients
                    name={item.name}
                    color={item.color}
                    key={index}
                />
            </li>
        ))
        return(
            <ul>
                {ingredients}
            </ul>
        )
    
}

export default IngredientList