import Card from "./components/Card"
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40 " >
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/search1.jpg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
          {/* <div className="card">
            <div className="favorite">
              <img src="/img/heart-unlike.jpg"></img>
            </div>
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
            <div className="favorite">
              <img src="/img/heart-unlike.jpg"></img>
            </div>
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
            <div className="favorite">
              <img src="/img/heart-unlike.jpg"></img>
            </div>
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
          </div> */}
        </div>
      </div>
    </div >
  );
}

export default App;
