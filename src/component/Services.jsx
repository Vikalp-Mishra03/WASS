import React from 'react'

export default function Services() {
  return (
    <>
      <div className="service">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
        <div className="line5"></div>
        <h1 className='head text-[25px] font-black ml-[220px]'>Service</h1>
        <div className="col">
          <h2>The World's Most Powerful Design Tool.</h2>
          <p className='para w-[40%]'>The refining your brand identify and running campaigns to powering your digital presence, we do it all.</p>

        </div>

        <div className="row">
          <div className="col-3 ml-[5rem]">
            <div className="boxes">
              <div className="heading">
                <div className="big-circle">
                  <div className="small-circle"></div>
                </div>
                <h3>Digital Marketing</h3>
              </div>
              <p>Enthusiastically network virtual technologies whereas e-business interfaces holisticly pontificate</p>
            </div>
            <div className="boxes">
              <div className="heading">
                <div className="big-square">
                  <div className="small-circle"></div>
                </div>
                <h3>Branding Design</h3>
              </div>
              <p>Enthusiastically network virtual technologies whereas e-business interfaces holisticly pontificate</p>
            </div>
          </div>
          <div className="big-box w-[25%] relative ml-[-75px]">
            <div className="dot-circle">
              <div className="circle">
                <p className='text text-[30px] font-bold mt-[2.5rem]'>More Services</p>
              </div>
              <div className="top-circle"></div>
              <div className="bottom-circle"></div>
            </div>
          </div>
          <div className="col-2">
            <div className="boxes">
              <div className="heading">
                <div className="big-triangle">
                  <div className="small-triangle"></div>
                </div>
                <div className="small-circle"></div>
                <h3>Website Development</h3>
              </div>
              <p>Enthusiastically network virtual technologies whereas e-business interfaces holisticly pontificate</p>
            </div>

            <div className="boxes">
              <div className="heading">
                <div className="big-hexagon">
                  <div className="small-hexagon"></div>
                </div>
                <div className="small-circle"></div>
                <h3>SEO Marketing</h3>
              </div>
              <p>Enthusiastically network virtual technologies whereas e-business interfaces holisticly pontificate</p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
