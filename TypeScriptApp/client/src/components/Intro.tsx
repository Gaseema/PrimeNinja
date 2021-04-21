import React from "react";

function Intro() {
  return (
    <div className="intro">
      <div className='centeredDiv'>
        <h3>PrimeNinja</h3>
        <p>A simple game designed to help you remember the prime numbers. Mathematicians are not the people who find Maths easy; they are the people who enjoy how mystifying, puzzling and hard it is. </p>
        <p className='startState'>Click the start button to get started.</p>
        <p> Good luck.</p>
        <button type="button" className="btn btn-primary">START</button>
      </div>
    </div>
  );
}

export default Intro;