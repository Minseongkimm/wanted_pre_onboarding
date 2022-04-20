import { React, useState } from 'react';

const Toggle = () => {
  const [toggleState, setToggleState] = useState('기본');

  const ToggleHandler = (menu) => {
    setToggleState(menu);
  };

  return (
    <div className="mt-6 mb-6">
      <section className="flex ml-2 bg-slate-200 w-64 rounded-lg">
        <div className="h-11 w-32 ">
          <div
            className={
              toggleState === '기본'
                ? 'clickedToggleMenu'
                : 'unClickedToggleMenu'
            }
            onClick={() => ToggleHandler('기본')}
          >
            기본
          </div>
        </div>

        <div className="h-11 w-32 ">
          <div
            className={
              toggleState === '상세'
                ? 'clickedToggleMenu'
                : 'unClickedToggleMenu'
            }
            onClick={() => ToggleHandler('상세')}
          >
            상세
          </div>
        </div>
      </section>
    </div>
  );
};

export default Toggle;
