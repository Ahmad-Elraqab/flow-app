import Image from "next/image";
import Link from "next/link";
type NavbarProps = {
    isDark?: boolean;
    activeIndex: number,
};
const Navbar: React.FunctionComponent<NavbarProps> = ({ isDark = false, activeIndex }) => {

    let _color = isDark ? "#000000" : "#FFFFFF"

    let style = { color: _color };
    return (
        <div className="flex w-full flex-row z-40 justify-center">

            <div className="flex flex-row z-40" style={{ marginRight: "240px" }}>
                <Image className="mr-4" src={"../../icons/logo.svg"} alt="" width={65.4} height={105} />
                <div className="flex flex-col justify-end pb-3">
                    <p className="text-4xl" >Flow <b>ERP</b> </p>
                    <p style={{ fontSize: "9px" }} >Enterprise Resource Planning System</p>
                </div>
            </div>
            <div className="flex  flex-row z-40 justify-between pt-12" style={{ marginRight: "362px" }}>

                <Link href={'/'} className="text-lg mr-10" style={{ ...style, fontWeight: activeIndex == 0 ? 'bold' : '500px' }}><p>HOME</p></Link>
                <Link href={'/solutions/solutions_page'} className="text-lg mr-10" style={{ ...style, fontWeight: activeIndex === 1 ? 'bold' : '500px' }}><p>SOLUTIONS</p></Link>
                <Link href={'/services/services_page'} className="text-lg mr-10" style={{ ...style, fontWeight: activeIndex == 2 ? 'bold' : '500px' }}><p>SERVICES</p></Link>
                <Link href={'/'} className="text-lg" style={{ ...style, fontWeight: activeIndex == 3 ? 'bold' : '500px' }}><p>CONTACT US</p></Link>
            </div>
            <div className="flex flex-row z-40 items-center pt-4">

                <p className="text-white text-lg font-medium mr-9" style={style}>SIGN IN</p>

                <Link href={'/'} >
                    <div className="py-5 px-14" style={{ backgroundColor: "#FFE05F", borderRadius: "40px" }}>
                        <p className="text-lg font-semibold" style={{ color: "#675611" }}>Get Started</p>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Navbar