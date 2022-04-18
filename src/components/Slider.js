import { React } from 'react';

const Slider = () => {
  const volumeHandler = (e) => {
    const result = e.target.value;
    document.getElementById('result').innerHTML = result;
  };

  return (
    <section className="flex flex-col">
      <div>
        <input type="range" onChange={volumeHandler} />
        <p id="result">50</p>
      </div>
    </section>
  );
};

export default Slider;
