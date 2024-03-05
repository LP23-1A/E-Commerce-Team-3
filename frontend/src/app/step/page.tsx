"use client";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";

const steps = ["Market Name", "Location", "Information"];

const StepPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    console.log("test");
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="flex justify-center">
        {activeStep === steps.length ? (
          <div></div>
        ) : (
          <div>
            <div>
              {activeStep === 0 && (
                <div>
                  <p>Дэлгүүрийн мэдээлэл</p>
                  <p>Танай дэлгүүрийн нэр юу вэ?</p>
                  <input type="text" placeholder="Market Name" />
                </div>
              )}
              {activeStep === 1 && (
                <div>
                  <p>Бүс нутгийн мэдээлэл</p>
                  <p>Хот/Аймаг</p>
                  <input type="text" placeholder="City" />
                  <p>Сум/Дүүрэг</p>
                  <input type="text" placeholder="District" />
                  <p>Хороо</p>
                  <input type="text" placeholder="Khoroo" />
                </div>
              )}
              {activeStep === 2 && (
                <div>
                  <p>Жоохон танилцья</p>
                  <p>
                    Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор
                    ашиглана.
                  </p>
                  <p>Та борлуулалт хийж байсан туршлагатай юу?</p>
                  <select name="experience" id=""></select>
                  <p>Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?</p>
                  <select name="products" id=""></select>
                </div>
              )}
            </div>
            <div className="flex gap-10">
              <button disabled={activeStep === 0} onClick={handleBack}>
                {"<"}
              </button>
              <button
                onClick={
                  activeStep === steps.length - 1 ? handleSubmit : handleNext
                }
              >
                {"daraah->"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepPage;
