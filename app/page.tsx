import Image from 'next/image'
import FilledButton from '@/components/filled_button'
import OutlinedButton from '@/components/outlined_button'
import ServiceCard from '@/components/service_card'
import HostCard from '@/components/host_card'
import Logos from '@/components/logos'
import '../app/dropdown.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="pt-9 mx-auto z-10 flex flex-col items-center"
      style={{
        maxWidth: "1980px",
        // height: "1121px",
        // overflow: 'visible',
      }}>
      <div
        className="z-0 mx-auto blur-2xl absolute left-0 right-0"
        style={{
          width: "1980px",
          height: "1121px",
          backgroundImage: `url("icons/bg_logo.svg")`,
          backgroundPosition: "right -650px bottom -550px",
        }}>

      </div>

      <Navbar activeIndex={0} />
      <div className='flex flex-col justify-start z-40 w-full h-full text-center relative'>

        <div className="flex flex-col px-32 mt-12 justify-start z-40 w-full h-[1080px] text-center relative">

          <p className='text-white z-40 text-semibold' style={{ fontSize: "56px" }}><b className='text-extrabold'>Most Agile ERP</b> on the Planet</p>
          <p className='text-white z-40 text-regular' style={{ fontSize: "25px" }}>ERPNext is the world’s best free and open source ERP</p>

          <div className='flex flex-row gap-x-6 justify-center mt-10'>
            <FilledButton px='57px' />
            <OutlinedButton />
          </div>

          <Logos />

          <Image className='position absolute bottom-[145px] left-[460px] z-40' src={"icons/cube-5.svg"} alt='' width={100} height={111} />
          <Image className='position absolute top-[150px] right-[180px] z-40' src={"icons/cube.svg"} alt='' width={323} height={288} />

          <div className='flex flex-col absolute right-[75px] bottom-[184px] items-start'>

            <div className='w-px h-20 bg-white mb-6 ml-3'></div>

            <div className='flex flex-row justify-center items-center'>
              <p className='text-white mr-3'>EN</p>
              <div className='w-2 h-2 bg-white rounded-lg'></div>
            </div>
            <p className='text-white mt-3 opacity-50'>AR</p>

          </div>


          <div className='w-[1288px] relative items-center ml-[auto] mr-[auto] mt-[63px]'>

            <div className='absolute left-0 right-0 p-3 mt-[3%] z-40 rounded-2xl flex flex-row justify-start text-start bg-white items-center' style={{ boxShadow: "0px 4px 60px #6C7E93", width: "350px" }}>

              <div className='rounded-md mr-3 p-3.5' style={{ backgroundColor: "#FEF8E7" }}>
                <Image className='' src={"icons/paint.svg"} alt='' width={32} height={32} />
              </div>

              <div className='mr-5'>
                <p className='text-black text-lg font-medium mb-1.5'>Basic design</p>
                <p className='text-sm font-regular' style={{ color: "#898C93" }}>Introduction to Graphic Design.</p>
              </div>

              <div className='w-6 h-6 rounded p-x-2.5 p-y-2 flex flex-row justify-center items-center' style={{ backgroundColor: "#FAFAFC" }}>
                <Image className='' src={"icons/right-arrow.svg"} alt='' width={8} height={4} />
              </div>
            </div>

            {/* 20 16 27 10 */}

            <div className='absolute left-0 right-0 p-3 ml-[15%] mt-[12%] z-50 p-3 rounded-2xl text-start bg-white items-center' style={{ boxShadow: "0px 5px 108px #6C7E93", width: "245px", paddingLeft: "20px", paddingTop: "16px", paddingRight: "27px", paddingBottom: "10px" }}>

              <p className='text-black text-md font-regular mb-3' >Courses</p>

              <div className='flex flex-row justify-start '>

                <p className='text-black text-4xl font-medium mr-8' >1</p>

                <Image className='' src={"icons/chart_2.svg"} alt='' width={147} height={97} />

              </div>

            </div>

            <div className='absolute left-0 right-0 p-3 ml-[auto] mr-[auto] p-3 rounded-2xl text-start bg-white items-center' style={{ boxShadow: "0px 4px 60px #6C7E93", width: "495px", paddingLeft: "26px", paddingTop: "36px", paddingRight: "28px", paddingBottom: "51px" }}>

              <Image className='mb-[61px]' src={"icons/Group 418.svg"} alt='' width={439} height={236} objectFit='contain' />

              <p className='text-[16px] w-[325px] font-normal' style={{ color: "#4A44C6" }}>You have saved 12% of your spending compared to the previous month.</p>

            </div>


            <div className='absolute z-30 right-0 p-3 mr-[15%] mt-[1%] w-[188px] rounded-2xl text-start bg-white items-start px-[16px] py-[20px]' style={{ boxShadow: "0px 4px 60px #6C7E93" }}>

              <div className='w-[46px] h-[46px] rounded mb-[8px]'>
                <Image src={"icons/Mask Group.svg"} alt='' width={46} height={46} />
              </div>
              <p className='text-[16px] font-normal mb-[14px] '>Mohammed Awad</p>
              <p className='text-[12px] font-normal mb-[7px] ' style={{ color: "#A6B1BB" }}>Assistant</p>
              <p className='text-[12px] font-normal mb-[13px] ' style={{ color: "#A6B1BB" }}>Dept of Graphic Design</p>
              <FilledButton textColor='white' fillColor='#17BCCB' px='40px' py='8px' title='View Profile' fontSize='12px' fontWeight='400' borderRadius='5px' width='100%' />
            </div>

            <div className='absolute right-0 p-3 mb-[10%] mt-[30%] mr-[28.5%] w-[245px] rounded-2xl text-start bg-white items-start px-[16px] py-[20px]' style={{ boxShadow: "0px 4px 60px #6C7E93" }}>

              <p className='text-[16px] font-normal mb-[12px] text-[#364F65]'>Total Students</p>
              <p className='text-[36px] font-medium mb-[10px] text-[#364F65]'>93</p>

              <Image src={"icons/grid_shape.svg"} alt='' width={245} height={46} />

            </div>

            <div className='absolute right-0 mb-[10%] mt-[18%] mr-[-2%] z-1 w-[375px] rounded-2xl text-start bg-[#FAFBFC] items-start px-[40px] py-[30px]' style={{ boxShadow: "0px 4px 60px #6C7E93" }}>

              <p className='text-[24px] font-medium mb-[12px] text-[#203B54]'>Termtest schedule</p>

              <div className='flex flex-row justify-between items-center mb-[13.5px]'>

                <p className='text-[14px] font-normal mb-[12px] text-[#76808D]'>15 march</p>
                <Image src={"icons/v.svg"} alt='' width={20} height={20} />

              </div>

              <div className='px-[24px] py-[24px] rounded-xl' style={{ boxShadow: "0px 4px 60px #A5AAB5" }}>

                <div className='flex flex-row justify-start items-center mb-[20px]'>

                  <p className='text-[18px] font-medium mr-[16px] text-[#898C93]'>09:00</p>
                  <div className='mr-[16px]' style={{ width: "3px", height: "40px", backgroundColor: "#FED554", borderRadius: "3px" }}></div>
                  <div className='flex flex-col gap-[2px] items-start'>

                    <p className='text-[11px] font-normal text-[#9A9DAA]'>GDM 2nd semester</p>
                    <p className='text-[13px] font-medium text-[#222222]'>One-line Drawing Method</p>

                  </div>

                </div>

                <div className='flex flex-row justify-start items-center '>

                  <p className='text-[18px] font-medium mr-[16px] text-[#898C93]'>09:00</p>
                  <div className='mr-[16px]' style={{ width: "3px", height: "40px", backgroundColor: "#FED554", borderRadius: "3px" }}></div>
                  <div className='flex flex-col gap-[2px] items-start'>

                    <p className='text-[11px] font-normal text-[#9A9DAA]'>GDM 2nd semester</p>
                    <p className='text-[13px] font-medium text-[#222222]'>One-line Drawing Method</p>

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

        <div className='flex flex-col justify-center items-center z-40 w-full h-[1080px] text-center relative'>

          <div
            className="z-0 mx-auto absolute blur-2xl left-0 right-0"
            style={{
              width: "1980px",
              height: "1884px",
              backgroundImage: `url("icons/yellow_bg_no_blur.png")`,
              backgroundPosition: "right -200px bottom -400px",
            }}>

          </div>

          <div
            className="z-0 mx-auto absolute left-0 right-0"
            style={{
              width: "1980px",
              height: "1675px",
              backgroundImage: `url("icons/outline_yellow_bg.svg")`,
              backgroundPosition: "right -100px bottom -250px",
            }}>

          </div>

          <div className="flex flex-row px-32 justify-between items-center z-40 w-full h-full text-center relative">

            <Image className='absolute top-[50px] right-[150px]' src={"icons/grey_cube.svg"} alt='' width={89} height={79} />

            <div className='pl-[131px] pt-[250px]'>
              <p className='text-[60px] font-semibold w-[431px] text-start leading-[70px] mb-[20px]'>Almost everything you need</p>
              <p className='text-[16px] font-medium text-[#676767] mb-[57px]'>ERPFlow comes with 1000+ objects to help you run your business</p>

              <div className='w-[278px] mb-[100px]'>
                <FilledButton py='19px' px='53px' fillColor='#15BCCB' title='MORE Solutions' textColor='white' fontWeight='700px' fontSize='18px' />
              </div>

              <Image className='ml-[150px] mb-[40px]' src={"icons/grey_cube.svg"} alt='' width={125} height={112} />
              {/* absolute bottom-[150px] left-[350px] */}
            </div>

            <div className='flex flex-wrap gap-[32px]'>

              <div className='gap-[32px] flex flex-col'>
                <ServiceCard iconHeight={62} iconWidth={62} icon='Settings' title='Services' subTitle='Run your services business better with ' />
                <ServiceCard iconHeight={56} iconWidth={44.8} icon='list' title='Distribution' subTitle='Run your services business better with ' />
              </div>

              <div className='mt-[67px] gap-[32px] flex flex-col'>
                <ServiceCard iconHeight={58} iconWidth={58} icon='PetriDish' title='Manufacturing' subTitle='Run your services business better with ' />
                <ServiceCard iconHeight={49} iconWidth={49} icon='Bank' title='Education' subTitle='Run your services business better with ' />
              </div>

              <div className='gap-[32px] flex flex-col'>
                <ServiceCard iconHeight={46} iconWidth={57.5} icon='Standings' title='Retail' subTitle='Run your services business better with ' />
                <ServiceCard iconHeight={48} iconWidth={48} icon='BankCard' title='Non Profit' subTitle='Run your services business better with ' />
              </div>


            </div>
          </div>

        </div>


        <div className='flex flex-col items-center justify-center w-full h-[1080px] text-center relative'>

          <div
            className="mx-auto z-1 absolute left-0 right-0"
            style={{
              width: "1980px",
              height: "1884px",
              backgroundImage: `url("icons/blue_bg.svg")`,
              backgroundPosition: "right -500px bottom -750px",
            }}>

          </div>

          <div
            className="mx-auto z-1 absolute left-0 right-0"
            style={{
              width: "1980px",
              height: "1800px",
              backgroundImage: `url("icons/outlined_blue_bg.svg")`,
              backgroundPosition: "right -250px bottom -250px",
            }}>

          </div>

          <Image className='absolute right-[200px] top-[120px]' src={"icons/cube-6.svg"} alt='' width={194} height={173} />
          <Image className='absolute left-[160px] bottom-[140px]' src={"icons/cube-5.svg"} alt='' width={97} height={86} />


          <p className='text-[60px] z-40 font-semibold text-[white] text-start leading-[70px] mb-[14px]'>Self Hosted Support</p>
          <p className='text-[16px] z-40 font-medium text-[white] text-start leading-[32px] mb-[32px]'>ERPFlow comes with 1000+ objects to help you run your business</p>

          <div className='flex flex-row w-full justify-center z-40 gap-[34px]'>

            <HostCard iconHeight={218} iconWidth={218} icon='host1' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Support' />
            <HostCard iconHeight={218} iconWidth={218} icon='host2' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Enterprise' />
            <HostCard iconHeight={212} iconWidth={212} icon='host3' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Contact Us' />
            <HostCard iconHeight={225} iconWidth={225} icon='host4' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Frappe' />

          </div>
        </div>

        <div className='flex flex-col items-center justify-center z-40 w-full h-[1080px] text-center relative'>

          <div
            className="mx-auto z-1 blur-xl absolute left-0 right-0"
            style={{
              width: "1980px",
              height: "1884px",
              backgroundImage: `url("icons/bg_light.svg")`,
              backgroundPosition: "right -500px bottom -650px",
            }}>

          </div>

          <Image className='absolute top-[220px] right-[170px]' src={"icons/big_blue_cube.svg"} alt='' width={197} height={175} />
          <Image className='absolute bottom-[400px] left-[150px]' src={"icons/small_blue_cube.svg"} alt='' width={100} height={89} />

          <div className='z-40 bg-gradient-to-b from-[white] to-[#FFFFFF30] h-[952px] w-[1022px] rounded-[75px] px-[70px] py-[109px]' style={{ boxShadow: "0px 10px 50px #00000006" }}>

            <p className='text-[60px] z-40 font-bold text-center leading-[70px] mb-[51px]'>Frequently asked questions</p>
            <nav className='px-[146px]'>
              <ul>
                {
                  ['How does it work?', 'How can i setup a new website?', 'How does it work?', 'How does it work?', 'How does it work?'].map(e => (
                    <li className='mb-[37px]'>
                      <a href="#nowhere">
                        <div className='flex flex-row justify-between items-start h-[71px] border-b-[2px] border-[#EFEFEF]' >
                          <div className='flex flex-row'>
                            <p className='text-[21px] z-40 font-medium text-center mr-[42px]'>01</p>
                            <p className='text-[18px] z-40 font-semibold text-center'>{e}</p>
                          </div>
                          <Image className='' src={"icons/arrow_down.svg"} alt='' width={12} height={7.33} />
                        </div>
                      </a>
                      <ul>
                        <li className='font-medium text-[16px] text-[#676767] text-start pl-[50px] pt-[36px]'>Suppose you produce t-shirts in different sizes and colors. You’ll need to track each type of t-shirt and its variants, known as item variants. In ERPNext, the primary item is stored as an item template, and each of the variations is stored as an item variant. You can store any attribute, such as color or shape, for each item variant.</li>
                      </ul>
                    </li>
                  ))

                }
              </ul>
            </nav>
          </div>


        </div>

        <div className='mt-[99px] flex flex-col justify-center items-center mb-[132px]'>
          <p className='text-[60px] z-40 font-bold text-center leading-[70px] mb-[14px]'>Loved by users</p>
          <p className='text-[16px] z-40 font-medium text-center leading-[70px] mb-[104px]'>Used by more than 5000 companies across the world</p>
          <Image className='w-[1643px] backdrop-grayscale-[.5]' src={"icons/sponsor.svg"} alt='' width={197} height={175} />
        </div>
      </div>
      <Footer />
    </div>

  )
}
