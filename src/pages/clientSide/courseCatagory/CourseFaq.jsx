import React from 'react'
import { Accordion } from 'react-bootstrap'
import { IoMdStar } from 'react-icons/io'

const CourseFaq = () => {
    return (
        <div>
            <div className={"mt-[54px] "}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className={""}>Rating</Accordion.Header>
                                        <Accordion.Body>
                                            <hr/>
                                            <div className={"flex text-[yellow] font-bold text-[25px] "}>
                                                <i><IoMdStar/></i>
                                                <i><IoMdStar/></i>
                                                <i><IoMdStar/></i>
                                                <i><IoMdStar/></i>
                                                <i><IoMdStar/></i>
                                            </div>
                                            <div className={"flex  font-bold text-[25px] "}>
                                                <i className={"text-[yellow]"}><IoMdStar/></i>
                                                <i className={"text-[yellow]"}><IoMdStar/></i>
                                                <i className={"text-[yellow]"}><IoMdStar/></i>
                                                <i className={"text-[yellow]"}><IoMdStar/></i>
                                                <i className={"text-[#cccccc]"}><IoMdStar/></i>
                                            </div>
                                            <div className={"flex  font-bold text-[25px] "}>
                                                <i className={"text-[yellow]"}><IoMdStar/></i>
                                                <i className={"text-[yellow]"}><IoMdStar/></i>
                                                <i className={"text-[yellow]"}><IoMdStar/></i>
                                                <i className={"text-[#cccccc]"}><IoMdStar/></i>
                                                <i className={"text-[#cccccc]"}><IoMdStar/></i>
                                            </div>
                                            <div className={"flex  font-bold text-[25px] "}>
                                                <i className={"text-[yellow]"}><IoMdStar/></i>
                                                <i className={"text-[yellow]"}><IoMdStar/></i>
                                                <i className={"text-[#cccccc]"}><IoMdStar/></i>
                                                <i className={"text-[#cccccc]"}><IoMdStar/></i>
                                                <i className={"text-[#cccccc]"}><IoMdStar/></i>
                                            </div>
                                            <div className={"flex  font-bold text-[25px] "}>
                                                <i className={"text-[yellow]"}><IoMdStar/></i>
                                                <i className={"text-[#cccccc]"}><IoMdStar/></i>
                                                <i className={"text-[#cccccc]"}><IoMdStar/></i>
                                                <i className={"text-[#cccccc]"}><IoMdStar/></i>
                                                <i className={"text-[#cccccc]"}><IoMdStar/></i>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Number of Chapters</Accordion.Header>
                                        <Accordion.Body>
                                            <hr/>
                                            <div className={"flex flex-col  "}>
                                                <label className={"text-[12px] flex items-center "} htmlFor={""}>
                                                    <input type={"checkbox"}/> 1-10
                                                </label>
                                                <label className={"text-[12px] py-2 flex items-center "} htmlFor={""}>
                                                    <input type={"checkbox"}/>
                                                    15-20
                                                </label>
                                                <label className={"text-[12px] flex items-center "} htmlFor={""}>
                                                    <input className={"block "} type={"checkbox"}/> 20-25
                                                </label>
                                                <label className={"text-[12px]  py-2  flex items-center "} htmlFor={""}>
                                                    <input className={"block  "} type={"checkbox"}/>
                                                    15-20
                                                </label>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Price</Accordion.Header>
                                        <Accordion.Body>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Category</Accordion.Header>
                                        <Accordion.Body>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>

            </div>
        </div>
    )
}

export default CourseFaq
