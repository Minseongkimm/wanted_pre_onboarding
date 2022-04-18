import { React, useState } from 'react';

const Toggle = () => {
  const [toggleState, setToggleState] = useState('기본');

  const detailHandler = () => {
    setToggleState('상세');
  };

  const basicHandler = () => {
    setToggleState('기본');
  };

  return (
    <div className="mt-6 mb-6">
      <section className="flex ml-2">
        <div className="h-11 w-32 bg-slate-300 rounded-l-lg  ">
          <div
            className={
              toggleState === '기본'
                ? 'clickedToggleMenu'
                : 'unClickedToggleMenu'
            }
            onClick={basicHandler}
          >
            기본
          </div>
        </div>
        <div className="h-11 w-32 bg-slate-300 rounded-r-lg transition duration-150">
          <div
            className={
              toggleState === '상세'
                ? 'clickedToggleMenu'
                : 'unClickedToggleMenu'
            }
            onClick={detailHandler}
          >
            상세
          </div>
        </div>
      </section>
    </div>
  );
};

export default Toggle;
