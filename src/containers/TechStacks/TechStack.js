import React from 'react';
import { FaReact,FaGithub,FaHtml5,FaCss3Alt } from 'react-icons/fa';
import { SiStreamlit, SiPython,SiSelenium,SiMysql,SiPandas,SiNumpy,SiScikitlearn,SiSpacy,SiKeras,SiTensorflow,SiGooglecolab,SiAnaconda,SiJavascript,SiFlask } from 'react-icons/si';
import './TechStack.css';

const TechStack = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="icon">
          <FaHtml5 color="#E34C26"/>
        </div>
        <div className="icon">
          <FaCss3Alt color="#2965f1"/>
        </div>
        <div className="icon">
          <SiJavascript color="yellow"/>
        </div>
        <div className="icon">
          <FaReact color="#61DBFB"/>
        </div>
        <div className="icon">
          <FaGithub />
        </div>
        <div className="icon">
          <SiMysql />
        </div>
        <div className="icon">
          <SiPython color = "#ffde57"/>
        </div>
        <div className="icon">
          <SiStreamlit color = "#ff4b4b"/>
        </div>
        <div className="icon">
          <SiFlask />
        </div>
        <div className="icon">
          <SiSelenium color = "#16DA2E"/>
        </div>
        <div className="icon">
          <SiPandas />
        </div>
        <div className="icon">
          <SiNumpy color = "rgb(77, 171, 207)"/>
        </div>
        <div className="icon">
          <SiScikitlearn color = "#9B4600"/>
        </div>
        <div className="icon">
          <SiSpacy color = "#48AADE"/>
        </div>
        <div className="icon">
          <SiKeras color = "#EE2C2C"/>
        </div>
        <div className="icon">
          <SiTensorflow color = "#F09D20"/>
        </div>
        <div className="icon">
          <SiGooglecolab color = "#D68917"/>
        </div>
        <div className="icon">
          <SiAnaconda color = "rgb(62, 176, 73)"/>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
