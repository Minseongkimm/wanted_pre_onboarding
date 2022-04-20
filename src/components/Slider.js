import { React } from 'react';

const Slider = () => {
  const volumeHandler = (e) => {
    const result = e.target.value;
    document.getElementById('result').innerHTML = result;
  };

  return (
    <section className="flex flex-col mt-6 mb-6 ml-3">
      <div className="w-32">
        <div className="flex border-2 mb-2 p-2 rounded-md bg-slate-100 justify-end ">
          <div id="result">50</div>
          <p>%</p>
        </div>
        <input type="range" onChange={volumeHandler} />
      </div>
    </section>
  );
};

export default Slider;
