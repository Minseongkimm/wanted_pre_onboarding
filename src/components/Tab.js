import { React, useState } from 'react';

const Tab = () => {
  const [id, setId] = useState(0);

  const clickHandler = (id) => {
    console.log(id);
    setId(id);
  };

  return (
    <div className="mb-6 mt-6 ml-3">
      <ul className="flex">
        <li
          className={id === 0 ? 'clickedTab' : 'unClickedTab'}
          onClick={() => clickHandler(0)}
        >
          감자
        </li>
        <li
          className={id === 1 ? 'clickedTab' : 'unClickedTab'}
          onClick={() => clickHandler(1)}
        >
          고구마
        </li>
        <li
          className={id === 2 ? 'clickedTab' : 'unClickedTab'}
          onClick={() => clickHandler(2)}
        >
          카레라이스
        </li>
      </ul>
    </div>
  );
};

export default Tab;
