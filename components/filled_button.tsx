import Link from "next/link";
import { AppProps } from 'next/app';

type FilledButtonProps = {
    title?: string;
    px?: string,
    py?: string,
    fillColor?: string,
    textColor?: string,
    fontSize?: string,
    fontWeight?: string,
    borderRadius?: string,
    width?: string,
};


const FilledButton: React.FunctionComponent<FilledButtonProps> = ({ title, px, py, fillColor, textColor, fontWeight, fontSize, borderRadius, width }) => {

    return (

        <div className="z-40 " style={{ minWidth: width ?? "0px", paddingTop: "19px", borderRadius: `${borderRadius ?? "30px"}` }}>

            <Link href={'/'} >
                <div style={{ textAlign: "center", paddingTop: `${py ?? "20px"}`, paddingBottom: `${py ?? "20px"}`, paddingRight: `${px ?? "80px"}`, paddingLeft: `${px ?? "80px"}`, backgroundColor: `${fillColor ? fillColor : "#FFE05F"}`, borderRadius: borderRadius ?? "40px" }}>
                    <p style={{ fontWeight: fontWeight ? fontWeight : "600", fontSize: fontSize ? fontSize : "18px", color: `${textColor ? textColor : "#675611"}` }}>{title ? title : "Get Started"} </p>
                </div>
            </Link >
        </div >

    );
};


export default FilledButton