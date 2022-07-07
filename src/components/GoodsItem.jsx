
function GoodsItem(props) {
    const {
        mainId,
        displayName,
        price,
        displayType,
        displayAssets,
        addToBasket
    } = props

    const finalPrice = price.finalPrice;

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName} />
                <span className="card-title">{displayType}</span>
            </div>
            <div className="card-content">
                <p>{displayType}</p>
            </div>
            <div className="card-action">
                <button onClick={() => addToBasket({
                    finalPrice,
                    displayName,
                    mainId
                })} className="btn">Buy</button>
                <span className="right">{finalPrice}</span>
            </div>
        </div>
    )

}

export { GoodsItem }