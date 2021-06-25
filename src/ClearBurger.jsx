const ClearBurger = (props) => {
    return (
        <div>
            <button onClick= {(e) => props.clearBurger(e)}>
                Clear Burger
            </button>
        </div>
    )    
}

export default ClearBurger