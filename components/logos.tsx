import Link from "next/link";
import Image from "next/image";

const Logos: React.FunctionComponent = () => {

    return (

        <div className='position absolute bottom-[87px] left-[138px] flex flex-col gap-y-5'>
            <div className='flex flex-row justify-center items-center' style={{ width: "46px", height: "46px", backgroundColor: "#15BCCB", borderRadius: "30px" }}><Image src={"icons/logo-fb.svg"} alt='' width={13} height={46} /></div>
            <div className='flex flex-row justify-center items-center' style={{ width: "46px", height: "46px", backgroundColor: "#15BCCB", borderRadius: "30px" }}><Image src={"icons/logo-twitter.svg"} alt='' width={18} height={46} /></div>
            <div className='flex flex-row justify-center items-center' style={{ width: "46px", height: "46px", backgroundColor: "#15BCCB", borderRadius: "30px" }}><Image src={"icons/logo-instagram.svg"} alt='' width={18} height={46} /></div>
            <div className='flex flex-row justify-center items-center' style={{ width: "46px", height: "46px", backgroundColor: "#15BCCB", borderRadius: "30px" }}><Image src={"icons/logo-linkedin.svg"} alt='' width={18} height={46} /></div>
        </div>


    );
}

export default Logos