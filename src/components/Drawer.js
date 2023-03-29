

function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30 ">Корзина<img className="removeBtn cu-p" src="/img/btn-remove.jpg" alt="Remove" />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/1.png)' }}
                            className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>8 499 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.jpg" alt="Remove" />
                    </div>

                    <div className="cartItem d-flex align-center">
                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/1.png)' }}
                            className="cartItemImg"></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>8 499 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.jpg" alt="Remove" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 399 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1020 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.png" alt="arrow" /></button>
                </div>

            </div>
        </div>
    )
}

export default Drawer;