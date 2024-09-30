import React from 'react';
import CoreLayout from '../components/CoreLayout';
import ProjectIntro from '../components/ProjectIntro';
import cover from '../assets/taksha-city/taksha-city-cover.png';
import masterPlan from '../assets/taksha-city/masterplan.png';
import floorPlan from '../assets/taksha-city/floor-plan.png';
import elevation1 from '../assets/taksha-city/Elevation1.png';
import elevation2 from '../assets/taksha-city/Elevation2.png';
import section from '../assets/taksha-city/Section.png';
import outside from '../assets/taksha-city/outside.png';
import carousel1 from '../assets/taksha-city/carousel-1.png';
import carousel2 from '../assets/taksha-city/carousel-2.png';
import carousel3 from '../assets/taksha-city/carousel-3.png';
import last from '../assets/taksha-city/last.png';
import Title from '../components/Title';
import Text from '../components/Text.tsx';

const ProjectTakshaCity: React.FC = () => {

  return (
    <CoreLayout>
      <div
        className="flex flex-1 flex-col w-[90%] md:w-[80%] self-center items-center py-6 md:py-10 lg:py-16 gap-4 md:gap-8 lg:gap-12">
        <ProjectIntro
          heading="Taksha City"
          description="Taksha City is an immersive architectural project that..."
          location="Fictional location in India"
          topology="Urban"
          softwares={ ["AutoCAD", "SketchUp", "Lumion", "Adobe Photoshop"] }
        />
        <img
          src={ cover }
          className="w-full h-auto object-cover"
          alt="Taksha City"
        />
        <div className="flex flex-1 flex-col md:flex-row md:gap-4 lg:gap-8 xl:gap-12">
          <div className="flex-1 w-full flex-col">
            <Title text="MASTER PLAN"/>
            <img src={ masterPlan } alt="master-plan" className="w-full h-auto"/>
          </div>
          <div className="flex-1">
            <Title text="FLOOR PLAN"/>
            { /* Todo: update image */ }
            <img src={ floorPlan } alt="section" className="w-1/2 h-auto"/>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas eget diam vel
              efficitur. Integer orci purus, lacinia ac iaculis sed, viverra a dui. Aenean tempus purus nec vehicula
              egestas. Mauris maximus velit neque, nec pharetra leo semper id. Donec dapibus malesuada libero, sed
              lobortis elit accumsan non. Nunc molestie id ligula"/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4 lg:gap-8">
          <div className="flex flex-1 flex-col">
            <div className="flex flex-row gap-1 md:gap-2">
              <div className="flex-col flex-1 flex">
                <Title text="ELEVATION 01"/>
                <img className="w-full" src={ elevation1 } alt="elevation-1"/>
              </div>
              <div className="flex-col flex-1 flex">
                <Title text="ELEVATION 02"/>
                <img className="w-full" src={ elevation2 } alt="elevation-2"/>
              </div>
            </div>
            <Title text="SECTION"/>
            <img className="w-full" src={ section } alt="section"/>
            <Text
              text="Suspendisse tincidunt viverra massa sit amet accumsan. Duis ornare est purus, quis eleifend massa venenatis id. Morbi arcu augue, laoreet nec purus sit amet, viverra scelerisque nisl. Nam dapibus, justo non fringilla tincidunt, neque ex aliquam sem, luctus convallis felis neque sit amet nibh. Sed accumsan vel ante eu vulputate. Ut ullamcorper finibus ultrices."/>
            <Text text="Morbi aliquam, diam vel tincidunt semper, justo felis dignissim lorem, nec auctor ante diam eu arcu. Sed a aliquet mauris, a lacinia enim.

Integer placerat diam eget felis lacinia, non cursus ipsum bibendum. Nullam rutrum vitae nisi vel molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies."/>
          </div>
          <div className="flex-1 flex">
            <div>
              <img className="w-full h-auto mt-2 md:mt-4 lg:mt-8" src={ outside } alt="outside"/>
              <div className="my-2 md:my-8 lg:my-12 mx-1 md:mx-4 lg:mx-8">
                <Text
                  text="Maecenas suscipit urna vehicula orci malesuada consectetur. Vestibulum a nisi tempus, mollis mi eget, dictum dui. Quisque in sem aliquet tortor molestie rutrum ac a risus. Mauris vestibulum rutrum lobortis. Suspendisse eget consequat dui. Praesent et malesuada leo. Integer quis imperdiet risus, a varius urna. Quisque ut sem efficitur, volutpat enim eu, consectetur purus. Nulla viverra vel leo sed vulputate. Nulla ut turpis at magna efficitur gravida volutpat eu augue."/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1">
            <img src={ carousel1 } alt="c-1"/>
          </div>
          <div className="flex flex-1">
            <img src={ carousel2 } alt="c-2"/>
          </div>
          <div className="flex flex-1">
            <img src={ carousel3 } alt="c-3"/>
          </div>
        </div>
        <div className="flex flex-1">
          <img src={ last } alt="last"/>
        </div>
      </div>
    </CoreLayout>
  );
};

export default ProjectTakshaCity;
