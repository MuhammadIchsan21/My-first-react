import React from "react";
import HelloWorld from "../components/helloWorld";

function Home() {
  return (
    <div>
      <h1 className='font-bold text-2xl mb-3'>This is the Home Page</h1>
      <HelloWorld name='Ichsan' />
    </div>
  );
}
export default Home;
