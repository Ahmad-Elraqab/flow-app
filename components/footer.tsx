import Link from "next/link";
import Image from "next/image";

const Footer: React.FunctionComponent = () => {

  return (

    <div className='h-[543px] bg-[#E2FAFC] z-40 w-full z-50'>

      <div className='h-[454px] w-full flex flex-row justify-between px-[135px]'>

        <div className='w-[33.33%] flex flex-row gap-[100px] justify-end items-center border-[#15BCCB] border-r-[1px] py-[84px] pr-[60px]'>
          <div className=''>
            <p className='font-bold text-[27px] mb-[70px]'>contact</p>
            <p className='font-regular text-[18px] mb-[20.7px]'>Saudi Arabai Jeddah</p>
            <p className='font-regular text-[18px] mb-[20.7px]'>King Abdjalazez</p>
            <p className='font-regular text-[18px] mb-[20.7px]'>123 street alhamdea</p>
            <p className='font-regular text-[18px] mb-[20.7px]'>+966 598828477</p>
          </div>
          <div className='flex flex-col gap-y-5 mt-[80px]'>
            <div className='flex flex-row justify-center items-center' style={{ width: "46px", height: "46px", backgroundColor: "#15BCCB", borderRadius: "30px" }}><Image src={"../../icons/logo-fb.svg"} alt='' width={13} height={46} /></div>
            <div className='flex flex-row justify-center items-center' style={{ width: "46px", height: "46px", backgroundColor: "#15BCCB", borderRadius: "30px" }}><Image src={"../../icons/logo-twitter.svg"} alt='' width={18} height={46} /></div>
            <div className='flex flex-row justify-center items-center' style={{ width: "46px", height: "46px", backgroundColor: "#15BCCB", borderRadius: "30px" }}><Image src={"../../icons/logo-instagram.svg"} alt='' width={18} height={46} /></div>
            <div className='flex flex-row justify-center items-center' style={{ width: "46px", height: "46px", backgroundColor: "#15BCCB", borderRadius: "30px" }}><Image src={"../../icons/logo-linkedin.svg"} alt='' width={18} height={46} /></div>
          </div>
        </div>

        <div className='w-[33.33%] flex flex-col justify-start items-stretch border-[#15BCCB] border-r-[1px] py-[84px] px-[119px]'>
          <p className='font-bold text-[27px] mb-[45px]'>services</p>
          <div className='grid grid-rows-5 grid-flow-col gap-[25px]'>
            <p className='font-regular text-[18px] text-[#777E90]'>Cloud</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Support</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Support</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Enterprise</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Login</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Contact sales</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Sing Up</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Mobile Apps</p>

          </div>
        </div>
        <div className='w-[33.33%] flex flex-col justify-start items-stretch py-[84px] px-[119px]'>
          <p className='font-bold text-[27px] mb-[45px]'>Solutions</p>
          <div className='grid grid-rows-5 grid-flow-col gap-[25px]'>
            <p className='font-regular text-[18px] text-[#777E90]'>Manufacturing</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Services</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Distribution</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Retail</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Education</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Healthcare</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Agriculture</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Non Profit</p>
            <p className='font-regular text-[18px] text-[#777E90]'>Whitepapers</p>

          </div>
        </div>
      </div>

      <div className='h-[87px] flex flex-col justify-center items-center border-[#15BCCB] border-t-[1px]'>
        <p className='font-regular text-[15px]'>Copyright © 2022 Flow Erp System</p>
      </div>

    </div>

  );
}

export default Footer