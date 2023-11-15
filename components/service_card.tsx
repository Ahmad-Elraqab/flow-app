import Link from "next/link";
import Image from "next/image";

type ServiceCardProps = {
    icon?: string;
    iconHeight: number,
    iconWidth: number,
    title?: string,
    subTitle?: string,
};

const ServiceCard: React.FunctionComponent<ServiceCardProps> = ({ title, subTitle, icon, iconHeight, iconWidth }) => {

    return (

        <div className='w-[276px] items-start rounded-[30px] bg-[white] pl-[35px] pt-[46px] pb-[33px] pr-[46px]' style={{ boxShadow: "0px 10px 50px #00000006", }}>

            <Image className='mb-[17px]' src={`icons/${icon}.svg`} alt='' width={iconWidth} height={iconHeight} />
            <p className='text-[18px] mb-[18px] font-semibold text-start'>{title}</p>
            <p className='text-[18px] mb-[25px] font-medium text-start text-[#676767]'>{subTitle}</p>
            <Image className='' src={"icons/share.svg"} alt='' width={20} height={20} />

        </div>

    );
}

export default ServiceCard