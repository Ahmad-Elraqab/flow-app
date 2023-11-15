import Link from "next/link";

export default function OutlinedButton() {

    return (

        <div className="flex flex-row z-40 items-center" style={{ paddingTop: "19px", borderRadius: "30px" }}>

            <Link href={'/'} >
                <div className="py-5 px-14" style={{ border: "1px solid white", borderRadius: "40px" }}>
                    <p className="text-lg font-semibold" style={{ color: "white" }}>Get Started</p>
                </div>
            </Link>
        </div>

    );
}