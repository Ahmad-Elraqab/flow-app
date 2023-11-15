import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    return (
        <div className="flex w-full flex-row z-40 justify-center">

            <div className="flex flex-row z-40" style={{ marginRight: "240px" }}>
                <Image className="mr-4" src={"icons/logo.svg"} alt="" width={65.4} height={105} />
                <div className="flex flex-col justify-end pb-3">
                    <p className="text-4xl" >Flow <b>ERP</b> </p>
                    <p style={{ fontSize: "9px" }} >Enterprise Resource Planning System</p>
                </div>
            </div>
            <div className="flex  flex-row z-40 justify-between pt-12" style={{ marginRight: "362px" }}>

                <Link href={'/'} className="text-white text-lg font-semibold mr-10"><p>HOME</p></Link>
                <Link href={'/'} className="text-white text-lg font-medium mr-10"><p>SOLUTIONS</p></Link>
                <Link href={'/'} className="text-white text-lg font-medium mr-10"><p>SERVICES</p></Link>
                <Link href={'/'} className="text-white text-lg font-medium"><p>CONTACT US</p></Link>
            </div>
            <div className="flex flex-row z-40 items-center pt-4">

                <p className="text-white text-lg font-medium mr-9">SIGN IN</p>

                <Link href={'/'} >
                    <div className="py-5 px-14" style={{ backgroundColor: "#FFE05F", borderRadius: "40px" }}>
                        <p className="text-lg font-semibold" style={{ color: "#675611" }}>Get Started</p>
                    </div>
                </Link>
            </div>

        </div>
    );
}