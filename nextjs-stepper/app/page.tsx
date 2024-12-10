'use client';

import React, { useState } from 'react';

const HomePage = () => {
  const [stepperCount, setStepperCount] = useState(1);

  const stepper_data = [
    {
      stepper_name: 'Process-1',
      stepper_details: 'Process-1 Details',
    },
    {
      stepper_name: 'Process-2',
      stepper_details: 'Process-2 Details',
    },
    {
      stepper_name: 'Process-3',
      stepper_details: 'Process-3 Details',
    },
    {
      stepper_name: 'Process-4',
      stepper_details: 'Process-4 Details',
    },
    {
      stepper_name: 'Process-5',
      stepper_details: 'Process-5 Details',
    },
  ];

  const handleStepper = (step: number) => {
    setStepperCount(step);
  };

  const stepper_bar_height = 100 / (stepper_data.length - 1);

  const handlerPrevStepper = () => {
    if (stepperCount === 1) {
      return;
    }
    setStepperCount((prev) => prev - 1);
  };

  const handlerNextStepper = () => {
    if (stepper_data.length === stepperCount) {
      return;
    }
    setStepperCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="wrapper">
            <h1>NextJS Stepper (Progress Indicator)</h1>
            <div className="stepper_ctn">
              {stepper_data.map((stepper, index) => {
                return (
                  <div
                    key={stepper.stepper_name}
                    className={`stepper_wrapper ${
                      stepperCount === index + 1 ? 'active' : ''
                    }${stepperCount > index + 1 ? 'completed' : ''}`}
                    onClick={() => handleStepper(index + 1)}
                  >
                    <div className="stepper_number_ctn">
                      <div className="stepper_number"></div>
                    </div>
                    <div className="stepper_name">{stepper.stepper_name}</div>
                  </div>
                );
              })}
              <div
                className="stepper_bar_ctn"
                style={{
                  height: `${stepper_bar_height * (stepperCount - 1)}%`,
                }}
              ></div>
            </div>
            <div className="stepper_next_prev_ctn">
              <button className="stepper_btn prev" onClick={handlerPrevStepper}>
                Previous
              </button>
              <button className="stepper_btn next" onClick={handlerNextStepper}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
