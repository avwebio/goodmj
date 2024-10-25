import React from 'react';
import certIcon from '../images/certificate.svg';
import weedLabPhoto from '../images/weed-lab.jpg';

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8">
      <main>
        <section className="flex justify-between gap-8">
          <div className="p-20 w-3/5 flex flex-col gap-4 relative bg-white rounded-lg shadow">
            <div className="flex items-center gap-4">
              <img src={certIcon} alt="Certificate icon" className="w-14" />
              <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-3xl">Services & Features</h1>
            </div>
            <h2 className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">We have an ever-growing list of services and features to offer
              you with affordable pricing options that work for you.</h2>
            <p>*This is more text to explain the below content.</p>
          </div>
          <div className="w-2/5">
          <img src={weedLabPhoto} alt="Cannabis lab" className="rounded-lg shadow border-2 border-white" />
            <h2>We only work with companies that
              pride themselves on proper lab
              testing and quality assurance.</h2>
            <p>Our promise is to provide you with the highest
              quality cannabis for the lowest costs available.</p>
            <p>We guarantee high-quality products that
              go through rigorous lab testing and quality
              assurance.</p>
            <div className="flex gap-2 mt-4 w-full">
              <a href="/plans" className="py-4 text-center rounded-md custom-bg-green custom-text-darkblue font-medium w-full shadow">View Plans</a>
              <a href="/menu" className="py-4 text-center rounded-md custom-text-darkblue bg-white font-medium w-full shadow">View Menu</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServicesPage;