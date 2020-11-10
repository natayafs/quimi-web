import React, { Component } from "react";
import avatar from "../assets/avatar.jpg";

class Home extends Component {
  render() {
    return (
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={avatar} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Fernando Romero         
            </h1>
            <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis, libero nec porta congue, ligula quam rutrum massa, sit amet aliquet lectus nunc sit amet leo. Aliquam pharetra porta ex, id iaculis augue rutrum vel. Fusce mollis lectus non libero volutpat ornare. Integer laoreet, urna a molestie finibus, leo enim iaculis nulla, sit amet dignissim tellus massa quis quam. Cras commodo molestie sem, sit amet fringilla lorem tristique tincidunt. Ut iaculis placerat metus, ac dapibus arcu vehicula et.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">
                Botoncito
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Botoncito
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
