import Link from "next/link";
import Image from "next/image";

type HostCardProps = {
    icon?: string;
    iconHeight: number,
    iconWidth: number,
    title?: string,
    subTitle?: string,
};

const HostCard: React.FunctionComponent<HostCardProps> = ({ title, subTitle, icon, iconHeight, iconWidth }) => {

    return (

        <div className='flex flex-col w-[357px] items-center justify-center rounded-[30px] bg-[white] pl-[32px] pt-[26px] pb-[33px] pr-[32px]' style={{ boxShadow: "0px 10px 50px #00000006", }}>

            <Image className='mb-[17px]' src={`../../icons/${icon}.svg`} alt='' width={iconWidth} height={iconHeight} />
            <p className='text-[18px] mb-[18px] font-semibold text-center'>{title}</p>
            <p className='text-[16px] mb-[25px] font-medium text-center text-[#676767]'>{subTitle}</p>

        </div>

    );
}

export default HostCard