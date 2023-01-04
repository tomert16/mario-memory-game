import Card from './Card'

const CardContainer = ( {cards, setCards}) => {
    return (
        <div className="container">
            {cards.map((card) => (
                <Card key={card.id} card={card} /> 
            ))}
        </div>
    )
}

export default CardContainer;