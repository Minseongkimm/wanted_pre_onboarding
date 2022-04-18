import { React } from 'react';

const Input = () => {
  return (
    <section className="flex flex-col mb-6 mt-6 ml-2">
      <div>
        <h4 className="mb-1">E-mail</h4>
        <input
          type="email"
          name=""
          placeholder="Email"
          className="mb-3 p-2 outline-none border-2 border-blue-300 rounded-lg"
        />
      </div>
      <div>
        <h4 className="mb-1">Password</h4>
        <input
          type="password"
          name=""
          placeholder="Password"
          className="mb-3 p-2 outline-none border-2 border-blue-300 rounded-lg"
        />
      </div>
    </section>
  );
};

export default Input;
