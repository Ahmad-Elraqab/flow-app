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


export default function FeaturePage() {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    const jobTitles = ["Manufacturing", "Services", "Retail", "Healthcare", "Education", "Agriculture", "Nonprofit"]
    const placeholders = ["Job titles", "Number of Employees", "Business Domain", "How can we help you ?", "Where did you hear about us ?"]

    const [title, setTitle] = useState("")
    const [country, setCountry] = useState(0)

    const info = [
        {
            title: "More integrations",
            desc: "Pay in more ways with integrations for m-pesa, Paytm, and taxjar. Voice call integrations and more."
        },
        {
            title: "Better issue metrics",
            desc: "See more data inside issues and filter them by day, week, and month in reports."
        },
        {
            title: "Social media post",
            desc: "Schedule posts directly to LinkedIn and Twitter right from your ERPNext account."
        },
        {
            title: "Putaway: get organized",
            desc: "With easy to configure putaway rules, organize your inventory and be in control of what goes where."
        },
        {
            title: "Multi currency payroll",
            desc: "With remote work and a global workforce, pay your employees regardless of their currency."
        },
        {
            title: "Employee self service",
            desc: "Not every user needs access to the whole system. Hence, introducing limited ‘ESS’ users."
        },
        {
            title: "Enhanced issue reporting",
            desc: "Get a readymade report of issues to see the important metrics at a glance under different time periods."
        },
        {
            title: "Assign leaves faster",
            desc: "Configurable leave assignments policies enables quick leave assigments."
        },
        {
            title: "Event streaming",
            desc: "Connect multiple ERPNext instances and even configure some to work offline!"
        },
    ]

    return <div className="pt-9 mx-auto z-10 flex flex-col justify-between items-center w-[1980px]" style={{ overflow: 'hidden' }}>

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

            <Navbar activeIndex={4} isDark={true} />

            <div className="w-full z-20 h-[1px] bg-[#707070] mt-[38px] mb-[57px]">.</div>

            <p className="f25 font-regular mb-[30px]">Home / Features</p>

            <p className="f56 font-extrabold mb-[18px]">Welcome to the future of ERP</p>

            <p className="f25 font-regular mb-[58px] text-[#3B3B3B] w-[858px] text-center">A complete redesign makeover changes the way you see everything. Also packed with 100+ new features and two new modules.</p>

            {/* <Image src={'../../icons/cube-12.svg'} className="absolute right-[250px] z-[5] bottom-[500px]" alt="" height={193} width={217} />
            <Image src={'../../icons/cube.svg'} className="absolute left-[250px] z-[5] bottom-[700px]" alt="" height={90} width={100} /> */}



            <div className="w-full flex flex-row justify-between items-center px-[138px] mb-[78px] relative overflow-visible">

                <div className="relative">
                    <p className="f37 font-semibold mb-[70px]">Form and function</p>
                    <p className="text-[189px] font-regular absolute text-[#3b3b3b10] top-[-100px]">01</p>
                    <p className="f20 font-medium w-[515px]">A new design, a new way to use ERPNext. Hundreds of careful UI adjustments to ensure you reach everything faster. See clearloutside and inside forms.</p>
                </div>

                {/* <img src="../../icons/feature1.png" alt="" /> */}
                <div className="w-[945px] h-[740px] z-[5]" style={{ backgroundImage: `url("../../icons/feature1.svg")`, backgroundRepeat: "no-repeat", backgroundPosition: "right -160px top 0px", overflow: "visible" }}>

                </div>

                <Image alt="" src={"../../icons/small_blue_cube.svg"} className="absolute left-[168px] top-[-100px] z-[15]" width={100} height={89} />
                <Image alt="" src={"../../icons/grey_cube.svg"} className="absolute right-[139px] top-[-80px] z-[15]" width={47} height={42} />


            </div>

            <div className="w-full flex flex-row justify-between items-center px-[138px] mb-[78px] relative overflow-visible">

                <div className="relative">
                    <p className="f37 font-semibold mb-[70px]">With dark mode</p>
                    <p className="text-[189px] font-regular absolute text-[#3b3b3b10] top-[-130px]">02</p>
                    <p className="f20 font-medium w-[515px]">For those late nights when the reports are due or you just prefer a dark theme. cmd + shift + g.</p>
                </div>

                {/* <img src="../../icons/feature1.png" alt="" /> */}
                <div className="w-[945px] h-[787px] z-[5]" style={{ backgroundImage: `url("../../icons/feature2.svg")`, backgroundRepeat: "no-repeat", backgroundPosition: "right -100px top 0px", overflow: "visible" }}>

                </div>

                <Image alt="" src={"../../icons/cube-12.svg"} className="absolute left-[-50px] bottom-[50px] z-[15]" width={197} height={175} />

            </div>

            <div className="w-full flex flex-row justify-between items-center px-[138px]">

                <div className="relative">
                    <p className="f37 font-semibold mb-[70px]">Accounting refreshed</p>
                    <p className="text-[189px] font-regular absolute text-[#3b3b3b10] top-[-130px]">03</p>
                    <p className="f20 font-medium w-[515px]">We accounted for the things that matter.</p>
                </div>

                {/* <img src="../../icons/feature1.png" alt="" /> */}
                <div className="w-[1022px] h-[740px] z-[5]" style={{ backgroundImage: `url("../../icons/feature3.svg")`, backgroundRepeat: "no-repeat", backgroundPosition: "right -160px top 0px", overflow: "visible" }}>

                </div>

            </div>

            <div className="w-full pl-[138px] mb-[78px] overflow-visible relative">
                <div
                    className="z-7 mx-auto absolute blur-2xl left-0 right-0 h-full"
                    style={{
                        width: "1980px",
                        zIndex: 1,
                        height: "2300px",
                        backgroundImage: `url("../../icons/bg_light.svg")`,
                        backgroundPosition: "right -1400px top -950px",
                        backgroundRepeat: "no-repeat"
                    }}>

                </div>

                <Image alt="" src={"../../icons/big_blue_cube.svg"} className="absolute right-[100px] top-[80px] z-[15]" width={197} height={175} />

                <p className="f42 font-bold mb-[70px] text-start">More Features</p>

                <div className="w-full flex flex-row">


                    <div className="w-[65%] flex gap-x-[100px] flex-wrap gap-y-[35px]">

                        {
                            info.map((e) => (

                                <div className="w-[515px]">
                                    <p className="f37 font-semibold mb-[30px] text-start">{e.title}</p>
                                    <p className="f20 font-medium text-start">{e.desc}</p>
                                </div>

                            ))
                        }

                    </div>

                    <div className="w-[35%] h-[660px] z-[5]" style={{ backgroundImage: `url("../../icons/moreFeatures.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "right -260px top 0px", overflow: "visible" }}>

                    </div>
                </div>

            </div>

            <div className="px-[138px] w-full mb-[146px] relative">

                <div className="h-[219px] w-full rounded-[25px] bg-[#F8F8FB] pl-[87px] pt-[62px] pb-[52px] pr-[110px] flex flex-row justify-between items-center">
                    <div>

                        <p className="f37 font-semibold mb-[14px] text-start">Ready to take a tour ?</p>
                        <p className="f20 pl-[5px] font-medium text-start">Available in new accounts now</p>

                    </div>

                    <FilledButton borderRadius="30px" fillColor="#FFE05F" fontSize="18px" fontWeight="600" textColor="black" title="Start Free Trial" py="19px" px="70px" />
                </div>

            </div>

        </div>



        <Footer />

    </div >


}