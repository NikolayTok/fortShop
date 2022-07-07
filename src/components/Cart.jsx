function Cart (props){
    const {count} = props
    return (
     <div className="cart blue darken-4 white-text">
        <i className="material-icons"> shopping_cart</i>
        {count ? <span>{count}</span> : null}
    </div>
    )
}

export {Cart}