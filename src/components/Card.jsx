const Cards = ({card}) => {
    const {url, name} = card
    return (
        <div className="card">
            <img src={url} alt={name} />
        </div>
    )
}

export default Cards;