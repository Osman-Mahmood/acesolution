import React, { useState } from "react";
import CanvasJSReact from "../../assets/canvasjsreact/canvasjs.react";

let canvasBtn = [
  {
    id: 0,
    name: "Business Areas",
    class: "btn btnCanvas-outline p-2 mx-2 mb-3",
    activeClass: "btn btnCanvas p-2 mx-2 mb-3",
    isActive: true,
  },
  {
    id: 1,
    name: "Our Experts",
    class: "btn btnCanvas-outline p-2 mx-2 mb-3",
    activeClass: "btn btnCanvas p-2 mx-2 mb-3",
    isActive: false,
  },
  {
    id: 2,
    name: "Technologies",
    class: "btn btnCanvas-outline p-2 mx-2 mb-3",
    activeClass: "btn btnCanvas p-2 mx-2 mb-3",
    isActive: false,
  },
  {
    id: 3,
    name: "Frame Wroks",
    class: "btn btnCanvas-outline p-2 mx-2 mb-3",
    activeClass: "btn btnCanvas p-2 mx-2 mb-3",
    isActive: false,
  },
];
const options = {
  animationEnabled: true,
  subtitles: [
    {
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true,
    },
  ],
  data: [
    {
      type: "doughnut",
      // showInLegend: true,
      indexLabel: "{name}",
      // yValueFormatString: "#,###'%'",
      dataPoints: [
        { y: 40, name: "HRMS" },
        { y: 38, name: "EDUCATION" },
        { y: 32, name: "ECOMMERCE" },
        { y: 30, name: "FINTECH" },
        { y: 28, name: "HEALTHCARE" },
        { y: 26, name: "DATA" },
        { y: 22, name: "SOCIAL NETWORKING" },
        { y: 18, name: "BUSINESS SOLUTIONS" },
      ],
    },
  ],
};
const options1 = {
  animationEnabled: true,
  subtitles: [
    {
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true,
    },
  ],
  data: [
    {
      type: "doughnut",
      // showInLegend: true,
      indexLabel: "{name}",
      // yValueFormatString: "#,###'%'",
      dataPoints: [
        { y: 40, name: "DATA ENGINEERS" },
        { y: 38, name: "PROJECT MANAGERS" },
        { y: 32, name: "IOS DEVELOPERS" },
        { y: 30, name: "FRONT END DEVELOPERS" },
        { y: 28, name: "SEO EXPERTS" },
        { y: 26, name: "SQA EXPERTS" },
        { y: 22, name: "DATA ENGINEERS" },
        { y: 18, name: "BACKEND ENGINEERS" },
      ],
    },
  ],
};
const options2 = {
  animationEnabled: true,
  subtitles: [
    {
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true,
    },
  ],
  data: [
    {
      type: "doughnut",
      // showInLegend: true,
      indexLabel: "{name}",
      // yValueFormatString: "#,###'%'",
      dataPoints: [
        { y: 40, name: "node" },
        { y: 38, name: "react" },
        { y: 32, name: "vue" },
        { y: 30, name: "php" },
        { y: 28, name: "css" },
        { y: 26, name: "redux" },
        { y: 22, name: "javascript" },
        { y: 18, name: "kotlin" },
        { y: 18, name: "C#" },
        { y: 18, name: "JAVA" },
      ],
    },
  ],
};
const options3 = {
  animationEnabled: true,
  subtitles: [
    {
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true,
    },
  ],
  data: [
    {
      type: "doughnut",
      // showInLegend: true,
      indexLabel: "{name}",
      // yValueFormatString: "#,###'%'",
      dataPoints: [
        { y: 40, name: "Angular JS" },
        { y: 38, name: "react JS" },
        { y: 32, name: "vue JS" },
        { y: 30, name: "Django" },
        { y: 28, name: "Flutter" },
        { y: 26, name: "Wordpress" },
        { y: 22, name: "React Native" },
        { y: 18, name: ".Net" },
      ],
    },
  ],
};
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Canvas = () => {
  const [canvas, setCanvas] = useState(canvasBtn);

  const handleIsActive = (id) => {
    canvasBtn = canvasBtn.map((data, i) => {
      if (id === i) {
        return { ...data, isActive: true };
      } else {
        return { ...data, isActive: false };
      }
    });
    setCanvas(canvasBtn);
  };

  return (
    <div className="expertise-sec p-5">
      <h2 className="text-center">Our Expertise</h2>
      <p className="text-center">
        Our years of working experience in software design and development
        allowed <br />
        us to develop scalable, secure, and interactive solutions.
      </p>
      <div className="d-flex flex-wrap justify-content-center p-5">
        {canvas.map((data) => (
          <button
            key={data.id}
            className={data.isActive ? data.activeClass : data.class}
            onClick={() => handleIsActive(data.id)}
          >
            {data.name}
          </button>
        ))}
      </div>
      <CanvasJSChart
        options={
          (canvas[0].isActive && options) ||
          (canvas[1].isActive && options1) ||
          (canvas[2].isActive && options2) ||
          (canvas[3].isActive && options3)
        }
        // onRef={ref => this.chart = ref}
      />
    </div>
  );
};

export default Canvas;
