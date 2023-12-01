import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import woman from '../assets/christina-wocintechchat-com-kXfBDl0fR1E-unsplash.jpg'
export default function Security() {
    return (
        <>
            <div className="security flex">
                <div className="content bg-[#0055ff]"></div>
                <div className="business-goal">
                    <h3 className='text-[25px]'>98%</h3>
                    <p className='text-[17px] font-bold blur-[0.5px] mb-[10px]'>Business Goal</p>
                    <div className="bars flex justify-between">
                        <div className="contain">
                            <div className="bar">
                                <div className="jan"></div>
                            </div>
                            <p className='month'>Jan</p>
                        </div>
                        <div className="contain">
                            <div className="bar">
                                <div className="feb"></div>
                            </div>
                            <p className='month'>Feb</p>
                        </div>
                        <div className="contain">
                            <div className="bar">
                                <div className="mar"></div>
                            </div>
                            <p className='month'>Mar</p>
                        </div>

                        <div className="contain">
                            <div className="bar">
                                <div className="apl"></div>
                            </div>
                            <p className='month'>Apl</p>
                        </div>
                        <div className="contain">
                            <div className="bar">
                                <div className="may"></div>
                            </div>
                            <p className='month'>May</p>
                        </div>
                    </div>
                </div>
                <div className="big-img">
                    <img src={woman} alt="" />
                </div>
                <div className="about">
                    <p className='text-[12px] font-bold text-[#0055ff]'>WHAT WE ARE DOING</p>
                    <h2>Keep Your Buisness Safe & Ensure High Availability</h2>
                    <p className='text-[15px] text-[#8a8888]'>Ever find yourself staring at your Computer good consulting slogan to come to mind? Oftentimes.</p>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What harsh truths do you prefer to ignore?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Exercitation in fugiat est ut ad ea cupidatat ut in
                                    cupidatat occaecat ut occaecat consequat est minim minim
                                    esse tempor laborum consequat esse adipisicing eu
                                    reprehenderit enim.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is free will real or just an illusion?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is free will real or just an illusion?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    



                </div>

            </div>

        </>
    )
}
