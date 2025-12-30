import { MinusIcon, RectangleIcon, XIcon } from "@phosphor-icons/react";
import Layout from "../../components/layout/Layout";

export default function Contact() {
  return (
      <Layout>
        <div className="w-full h-screen flex flex-col justify-between content-around lg:pt-10">
			<div>
			{/* window header */}
				<section className='flex justify-end pt-1 pb-1 gap-0.5 pe-1 border-2 text-(--color-desert-sand-800) border-s-2 border-end-2 border-t-2'>
					<div className='flex w-8 h-8 bg-white border-2 rounded justify-center items-baseline-last'>
					<MinusIcon size={22} />
					</div>
					<div className='flex w-8 h-8 bg-white border-2 rounded justify-center items-center'>
					<RectangleIcon size={22} />
					</div>
					
					<div className='flex w-8 h-8 bg-white border-2 rounded justify-center items-center'>
					<XIcon size={22} />
					</div>
				</section>
			{/* end window header */}
			{/* content */}
				<section className='flex xl:h-130 lg:h-100 bg-white text-(--color-desert-sand-800) border-s-2 border-e-2 border-b-2 overflow-hidden' >
					<div className='flex flex-col w-full xl:gap-4 xl:mt-4'>
						<div className='flex mt-auto xl:h-[90%] lg:h-[80%] justify-center'>
							<section className="relative w-1/2 overflow-hidden" >
								<img src=" https://ik.imagekit.io/5vd9mfrfv/img/char_working.gif?updatedAt=1765651663342" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%]" alt="cute girl waving" />
							</section>
							<section className='montserrat-font flex flex-col justify-evenly items-center xl:p-2 xl:w-1/3 lg:w-1/2 xl:text-4xl lg:p-1 lg:text-2xl'>
								<p>Working to build this page.. </p>
							</section> 
							
						</div>
					</div>
				</section> 
			</div>
        </div>
    </Layout>
    
  )
}
