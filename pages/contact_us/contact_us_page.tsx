import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import '../../app/dropdown.css'
import '../../app/globals.css'
import ServiceCard from "@/components/service_card"
import HostCard from "@/components/host_card"
import Image from "next/image"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn } from "@nextui-org/react";
import { AddNoteIcon } from "../../components/addNoteIcon.jsx";
import { useState } from "react"
import FilledButton from "@/components/filled_button"
// const data = require("./data.json")

import data from "./data.json"

export default function ContactUsPage() {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    const jobTitles = ["Manufacturing", "Services", "Retail", "Healthcare", "Education", "Agriculture", "Nonprofit"]
    const placeholders = ["Job titles", "Number of Employees", "Business Domain", "How can we help you ?", "Where did you hear about us ?"]

    const [title, setTitle] = useState("")
    const [country, setCountry] = useState(0)


    return <div className="pt-9 mx-auto z-10 flex flex-col justify-between items-center w-[1980px] h-[2300px]" style={{ overflow: 'hidden' }}>

        <div
            className="z-7 mx-auto absolute left-0 right-0 h-full"
            style={{
                width: "1980px",
                zIndex: 1,
                height: "2300px",
                backgroundImage: `url("../../icons/bg_light_outline.svg")`,
                backgroundPosition: "right -350px top -200px",
                backgroundRepeat: "no-repeat"
            }}>

        </div>
        <div
            className="z-7 mx-auto absolute blur-2xl left-0 right-0 h-full"
            style={{
                width: "1980px",
                zIndex: 1,
                height: "2300px",
                backgroundImage: `url("../../icons/bg_light.svg")`,
                backgroundPosition: "right -550px top -500px",
                backgroundRepeat: "no-repeat"
            }}>

        </div>

        <div className="flex flex-col items-center relative w-full h-full">

            <Navbar activeIndex={3} isDark={true} />

            <div className="w-full z-20 h-[1px] bg-[#707070] mt-[38px] mb-[57px]">.</div>

            <p className="f25 font-regular mb-[30px]">Home / Contact Us</p>

            <p className="f56 font-extrabold mb-[18px]">How can we help you?</p>

            <p className="f25 font-regular mb-[58px] text-[#3B3B3B]">Fill in the form and get it touch with us</p>

            <Image src={'../../icons/cube-12.svg'} className="absolute right-[250px] z-[5] bottom-[500px]" alt="" height={193} width={217} />
            <Image src={'../../icons/cube.svg'} className="absolute left-[250px] z-[5] bottom-[700px]" alt="" height={90} width={100} />

            <div className="rounded-[75px] bg-[white] py-[90px] flex flex-col justify-center items-center z-30 overflow-visible">
                <input type="text" placeholder="Name" className="focus:outline-none focus:border-[#15BCCB] focus:border-[2px] px-[40px] mx-[90px] py-[20px] rounded-[30px] border-[#B2B2B2] border-[1px] w-[676px] f18 text-[#B2B2B2] font-regular mb-[12px]" />
                <input type="text" placeholder="Email" className="focus:outline-none focus:border-[#15BCCB] focus:border-[2px] px-[40px] mx-[90px] py-[20px] rounded-[30px] border-[#B2B2B2] border-[1px] w-[676px] f18 text-[#B2B2B2] font-regular mb-[12px]" />
                <div className="w-full px-[90px] flex">
                    <Dropdown className="" placeholder="ahmad">
                        <DropdownTrigger className="w-[200px] rounded-l-[30px]" >
                            <div className="flex flex-row justify-center gap-[12.3px] items-center py-[12px] border-[#B2B2B2] border-[1px] w-[676px] f18 text-[black] font-regular mb-[12px]">

                                <Image src={'../../icons/arrow_down.svg'} alt="" height={7.57} width={12.25} />
                                <p className="text-[24px]">{data[country].flag}</p>
                                <p className="f18 text-[#000000] font-regular">({data[country].dial_code})</p>
                            </div>
                        </DropdownTrigger>
                        <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" className="h-[310px] overflow-scroll">
                            {
                                data.map((e) => (

                                    <DropdownItem
                                        className="w-[147px]"
                                        key={""}
                                        shortcut=""
                                        onClick={() => {
                                            // setTitle(e)
                                            setCountry(data.indexOf(e))
                                        }}
                                        startContent={<div className="flex flex-row gap-[12.3px]"><p className="text-[24px]">{e.flag}</p> <p className="f18 text-[#000000] font-regular">({e.dial_code})</p></div>}
                                    >
                                    </DropdownItem>
                                ))
                            }
                        </DropdownMenu>
                    </Dropdown>
                    <input type="text" placeholder="(345)1234 456" className="focus:outline-none focus:border-[#15BCCB] focus:border-[2px] px-[20px] py-[20px] rounded-r-[30px] border-[#B2B2B2] border-[1px] w-full f18 text-[#B2B2B2] font-regular mb-[12px]" />

                </div>
                {
                    placeholders.map((z) => (

                        <Dropdown className="w-[290px] mx-[90px]" placeholder="ahmad">
                            <DropdownTrigger className="" >
                                <div className="flex flex-row justify-between items-center px-[40px] py-[20px] rounded-[30px] border-[#B2B2B2] border-[1px] w-[676px] f18 text-[black] font-regular mb-[12px]">
                                    <p>{title == "" ? z : title}</p>
                                    {/* <p>icon</p> */}
                                    <Image src={'../../icons/arrow_down.svg'} alt="" height={7.57} width={12.25} />
                                </div>
                            </DropdownTrigger>
                            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" className="px-[39px] py-[24px] w-[290px]">
                                {jobTitles.map((e) =>
                                    <DropdownItem
                                        key={e}
                                        shortcut=""
                                        onClick={() => {
                                            setTitle(e)
                                        }}
                                        startContent={<p className="f18 text-[#000000] font-regular">{e}</p>}
                                    >
                                    </DropdownItem>
                                )
                                }
                            </DropdownMenu>
                        </Dropdown>
                    ))

                }

                < textarea placeholder="Message" rows={5} className="focus:outline-none focus:border-[#15BCCB] focus:border-[2px] px-[40px] mx-[90px] py-[20px] rounded-[30px] border-[#B2B2B2] border-[1px] w-[676px] f18 text-[black] font-regular mb-[12px]" ></textarea>
                <FilledButton borderRadius="30px" fillColor="#15BCCB" fontSize="18px" textColor="white" fontWeight="700px" py="19px" title="send" px="314px" />
                <div className="bg-[#70707014] mt-[46.5px] w-full h-[1px] mb-[42px ]">

                </div>

                <div className="flex flex-row justify-between items-center gap-[115px] mt-[42px]">
                    <div className="flex items-end">
                        <div className="w-[80px] mr-[23px] h-[80px] bg-[#4A44C6] rounded-[15px] flex justify-center items-center">
                            <Image alt="" className="" src={"/icons/email.png"} width={28.5} height={22.5} />
                        </div>

                        <p className="f18 font-regular mb-[18px]">FlowERP@exmample.com</p>
                    </div>
                    <div className="flex items-end">
                        <div className="w-[80px] mr-[23px] h-[80px] bg-[#FF6500] rounded-[15px] flex justify-center items-center">
                            <Image alt="" className="" src={"/icons/phone-call.png"} width={28.5} height={22.5} />
                        </div>

                        <p className="f18 font-regular mb-[18px]">+134 2111 2452</p>
                    </div>
                </div>
            </div>

        </div>



        <Footer />

    </div>


}