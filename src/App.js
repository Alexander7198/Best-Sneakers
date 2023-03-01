

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>

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
      </div>

      <header className="d-flex justify-between align-center p-40" >
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase" >Best Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex" >
          <li className="mr-30">
            <img width={18} height={18} src="/img/Group.png" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/Union.png" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40 " >
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/search1.jpg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
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
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Under Armour Curry 8</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>15 199 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.jpg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Kyrie 7</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>11 299 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.jpg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.png" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>10 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.jpg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
