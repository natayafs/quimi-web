import React, { Component } from "react";
import logo from "../assets/logo.png";

class Cursos extends Component {
  render() {
    return (
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Cursos</h1>
              <div className="h-1 w-20 bg-teal-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis, libero nec porta congue, ligula quam rutrum massa, sit amet aliquet lectus nunc sit amet leo. Aliquam pharetra porta ex, id iaculis augue rutrum vel. Fusce mollis lectus non libero volutpat ornare. Integer laoreet, urna a molestie finibus, leo enim iaculis nulla, sit amet dignissim tellus massa quis quam. Cras commodo molestie sem, sit amet fringilla lorem tristique tincidunt. Ut iaculis placerat metus, ac dapibus arcu vehicula et.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={logo} alt="content" />
                <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">Nivel universitario, secundario</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Quimica general</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={logo} alt="content" />
                <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">Nivel universitario</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Quimica Inorgánica</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={logo} alt="content" />
                <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">Nivel secundario</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Quimica orgánica</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={logo} alt="content" />
                <h3 className="tracking-widest text-teal-500 text-xs font-medium title-font">Nivel universitario, secundario</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Quimica biológica</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cursos;