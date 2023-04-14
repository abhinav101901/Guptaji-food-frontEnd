import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import green from '../Assets/green.png'
import '../styles/a.css'
 
class StepProgressBar extends React.Component {

  render() {
    return (
      <ProgressBar
        percent={35}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        width="70"
        height="20px"
      >
        <Step transitionDuration={"30000000000000000000"} transition="scale">
          {({ accomplished}) => (
            <div className="StatusOrder">
            <img
              style={{ filter: `grayscale(${accomplished ? 10 : 50}%)` }}
              width="60"
              src={green} alt="Green"/>
            <p>Add Card</p>
            </div>
          )}
        </Step>
        <Step transitionDuration transition="scale">
        {({ accomplished}) => (
            <div className="StatusOrder">
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="60"
              src={green} alt="Green"/>
            <p>Order</p>
            </div>
          )}
        </Step>
        <Step transitionDuration transition="scale">
        {({ accomplished}) => (
            <div className="StatusOrder">
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="60"
              src={green} alt="Green"/>
            <p>Despatch</p>
            </div>
          )}
        </Step>
        <Step transitionDuration="300000" transition="scale">
        {({ accomplished}) => (
            <div className="StatusOrder">
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="60"
              src={green} alt="Green"/>
            <p>Delievered</p>
            </div>
          )}
        </Step>
      </ProgressBar>
    );
  }
}
export default StepProgressBar