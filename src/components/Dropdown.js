import { React, useState } from 'react';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const dropDownHandler = () => {
    setIsActive(!isActive);
  };

  const getOptionValue = (e) => {
    const result = e.target.innerHTML;
    console.log('result', result);
    document.getElementById('optionResult').innerHTML = result;
    setIsActive(!isActive);
  };

  return (
    <div className="mt-6 mb-6 ml-2 w-52">
      <div
        className="border-2 p-2 cursor-grab w-full "
        id="optionResult"
        readOnly
        onClick={dropDownHandler}
      >
        클릭 후 옵션선택
      </div>
      <section className={isActive ? 'mt-2 w-full' : 'mt-2 hidden w-full'}>
        {/* 아래 input -> search 바  */}
        <input placeholder="Search" className="border-2 p-2"></input>
        <ul onClick={getOptionValue}>
          <li className="" value="고구마">
            고구마
          </li>
          <li>감자</li>
          <li>설탕</li>
        </ul>
      </section>
    </div>
  );
};

export default Dropdown;
