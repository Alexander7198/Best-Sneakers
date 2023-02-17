

function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
          <div className="card">
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
