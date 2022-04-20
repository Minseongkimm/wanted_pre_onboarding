import { React, useState } from 'react';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const dropDownHandler = () => {
    setIsActive(!isActive);
  };

  const getOptionValue = (e) => {
    const result = e.target.innerHTML;
    document.getElementById('optionResult').innerHTML = result;
    setIsActive(!isActive);
  };

  return (
    <div className="mt-6 mb-6 ml-2 w-52">
      <div
        className="border-2 p-2 cursor-grab rounded"
        id="optionResult"
        readOnly
        onClick={dropDownHandler}
      >
        Choose Menu
      </div>
      <section className={isActive ? 'mt-2 w-full' : 'mt-2 hidden w-full'}>
        <ul
          className="border-2 border-slate-300 p-2 rounded cursor-pointer"
          onClick={getOptionValue}
        >
          <li className="mb-1 text-gray-700 hover:bg-slate-100">고구마 맛탕</li>
          <li className="mb-1 text-gray-700 hover:bg-slate-100">감자 볶음</li>
          <li className="mb-1 text-gray-700 hover:bg-slate-100">오이지 무침</li>
        </ul>
      </section>
    </div>
  );
};

export default Dropdown;
