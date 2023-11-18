import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import '../../app/dropdown.css'
import '../../app/globals.css'
import ServiceCard from "@/components/service_card"
import HostCard from "@/components/host_card"
import Image from "next/image"

export default function ServicesPage() {


    return <div className="pt-9 mx-auto z-10 flex flex-col items-center w-[1980px] h-[3000px]" style={{ overflow: 'hidden' }}>

        <div
            className="z-7 mx-auto absolute left-0 right-0 h-full"
            style={{
                width: "1980px",
                height: "3000px",
                backgroundImage: `url("../../icons/bg_light_outline.svg")`,
                backgroundPosition: "right -1200px bottom -100px",
                backgroundRepeat: "no-repeat"
            }}>

        </div>

        <Navbar activeIndex={2} isDark={true} />

        <div className="w-full z-20 h-[1px] bg-[#707070] mt-[38px] mb-[57px]">.</div>

        <p className="text-[25px] font-regular mb-[30px]">Home / Services</p>

        <p className="text-[56px] font-extrabold mb-[18px]">We develop hardware devices using platform</p>

        <p className="text-[25px] font-regular mb-[90px]">. We have joined forces with team</p>


        <div className="h-full w-full flex flex-row justify-center items-start gap-[120px]">

            <div className="w-[35%] text-start flex flex-col justify-start items-stretch">

                <p className="text-[37px] font-semibold mb-[21.7px]">Our services</p>
                <p className="text-[20px] font-medium mb-[43.1px]">We develop and integrate hardware devices using platform . We have joined forces with team</p>

                {/* <Image className='w-[full]' src={"/icons/browser-shape.png"} alt='' width={670} height={533} /> */}

                <div className="relative">
                    <img className="" src="/icons/browser-shape.png" alt="" style={{ objectFit: "cover", width: "100%" }} />
                    <div className='absolute right-[100px] top-[400px] p-3 w-[265px] rounded-2xl text-start bg-white items-start px-[16px] py-[20px]' style={{ boxShadow: "0px 1px 50px #00000010" }}>

                        <p className='text-[16px] font-normal mb-[12px] text-[#364F65]'>Total Students</p>
                        <p className='text-[36px] font-medium mb-[10px] text-[#364F65]'>93</p>

                        <Image src={"/icons/grid_shape.svg"} alt='' width={265} height={46} />

                    </div>
                </div>

            </div>

            <div className="w-[45%] flex flex-wrap gap-[80px] justify-center">

                <HostCard iconHeight={218} iconWidth={218} icon='host1' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Support' />
                <HostCard iconHeight={218} iconWidth={218} icon='host2' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Enterprise' />
                <HostCard iconHeight={212} iconWidth={212} icon='host3' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Contact Us' />
                <HostCard iconHeight={225} iconWidth={225} icon='host4' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Frappe' />

            </div>

        </div>

        <Footer />

    </div>


}