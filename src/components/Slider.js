import { React } from 'react';

const Slider = () => {
  const volumeHandler = (e) => {
    const result = e.target.value;
    document.getElementById('result').innerHTML = result;
  };

  return (
    <section className="flex flex-col mt-6 mb-6 ml-3">
      <div>
        <div className="flex">
          <p id="result">50</p>
          <p>%</p>
        </div>
        <input type="range" onChange={volumeHandler} />
      </div>
    </section>
  );
};

export default Slider;
