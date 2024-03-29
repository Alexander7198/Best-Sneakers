

function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unlike.jpg"></img>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.png" alt="Sneakers" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.jpg" alt="Plus" />
                </button>
            </div>
        </div>
    )
}

export default Card;