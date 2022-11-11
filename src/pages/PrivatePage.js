import './scss/PrivatePage.scss'

function PrivatePage() {
  return(
    <div className='page private-page'>
      <div className="locations">
        <div className="locations-create">
          <div className="locations-create__item">
            <label className="locations-create__item_label" htmlFor=''>
              Название
            </label>
            <input className="locations-create__item_input" id="input1" type="text"/>
          </div>
          <div className="locations-create__item">
            <label className="locations-create__item_label" htmlFor=''>
              Долгота
            </label>
            <input className="locations-create__item_input" id="input2" type="text"/>
          </div>
          <div className="locations-create__item">
            <label className="locations-create__item_label" htmlFor=''>
              Ширина
            </label>
            <input className="locations-create__item_input" id="input3" type="text"/>
          </div>
        </div>
        <button className="locations__btn" id="locations__btn">Ввести данные</button>

        <div className="locations-box-output">
          <div className="locations-box" id="locations-box">
            <div className="outinput-wrapper" id="outinput-wrapper1">
              <label htmlFor='outInput1'>Название:</label>
              <div className="outInput1"></div>
            </div>
            <div className="outinput-wrapper" id="outinput-wrapper1">
              <label htmlFor='outInput2'>Долгота:</label>
              <div className="outInput2"></div>
            </div>
            <div className="outinput-wrapper" id="outinput-wrapper1">
              <label htmlFor='outInput3'>Ширина:</label>
              <div className="outInput3"></div>
            </div>
          </div>
        </div>
        <button className="add-locations__btn" id="add-locations__btn">
          Добавить локацию
        </button>
        <div className="locations__list-wrapper">
          {/* <ul className="locations__list">
            <li className="locations__list_item">
              <button>Редактировать</button>
              <button>Удалить</button>
            </li>
            <li className="locations__list_item">
              <button>Редактировать</button>
              <button>Удалить</button>
            </li>
            <li className="locations__list_item">
              <button>Редактировать</button>
              <button>Удалить</button>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="map-wrapper">
        {/* <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4bc5362cc6b6088dbc2d9447c8521b89c443a0f8f0e86b7452e2ea5189e0efdd&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script> */}
      </div>
    </div>
  )
}

export default PrivatePage;