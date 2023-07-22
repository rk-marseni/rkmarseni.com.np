import React, { Fragment } from "react";
import Layout from "../Layout/Layout";
// import kakaImage from "/personalwebsite/assests/kaka.png";

function Home() {
  return (
    <Fragment>
      <Layout>
        <div className="md:w-5/6 m-auto font-Lato py-4 md:px-10 px-7">
          <div className="flex">
            <div class="bg-[color] h-[height] w-[width] bg-cover bg-center"></div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}

export default Home;
