import Burger from "./Burger"
import ClearBurger from "./ClearBurger"

const BurgerHome = (props) => { 
    return(
        <div>
            <Burger addedIngredients={props.addedIngredients} />
            
            <ClearBurger  clearBurger={props.clearBurger}/>
        </div>
    )    
}
export default BurgerHome