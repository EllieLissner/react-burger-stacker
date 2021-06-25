import Ingredients from './Ingredients'
 
const Burger = (props) => {
    //we previously used reverse here right before the map. this MUTATED the props object
    //which is a react NO-NO!!! This is why we needed to apply it to the new array
    //never call reverse on props
    //must keep props pristine so react can properly track changes
    //spread not only grabs all of the elements of an array, but it also makes a copy
    let ingredients = [...props.addedIngredients].reverse().map((item, index) => (
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
            {ingredients}
        </ul>
    )
}

export default  Burger