import IconesTooltip from '../../components/iconesTooltip/IconesTootip';
import Layout from '../../components/layout/Layout'
import { DotOutlineIcon, MinusIcon, RectangleIcon, XIcon} from "@phosphor-icons/react";

export default function Home() {
	let	iconSize: Number = 50;
	// const width = window.innerWidth;
  	return (
    <Layout>
        <div className="w-full h-screen flex flex-col justify-between content-around">
				<div>
					<div className='flex justify-end pt-1 pb-1 gap-0.5 pe-1 border-2 text-(--color-desert-sand-800) border-s-2 border-end-2 border-t-2'>
						<div className='flex w-8 h-8 bg-white border-2 rounded justify-center items-baseline-last'>
							<MinusIcon size={22} />
						</div>
						<div className='flex w-8 h-8 bg-white border-2 rounded justify-center items-center'>
							<RectangleIcon size={22} />
						</div>
						
						<div className='flex w-8 h-8 bg-white border-2 rounded justify-center items-center'>
							<XIcon size={22} />
						</div>
					</div>
					
					{/* <hr className="w-full text-(--color-desert-sand-700) border"/> */}
				<section className='flex h-full bg-white text-(--color-desert-sand-800) border-s-2 border-e-2 border-b-2 overflow-hidden' >
					<div className='flex flex-col w-full xl:gap-4 xl:mt-4'>
						<section className='flex flex-col w-full xl:p-2 xl:h-1/3 xl:gap-3 lg:p-1 lg:h-1/4 lg:gap-2'>
							<h1 className="montserrat-font xl:ps-8 xl:pt-4 xl:text-4xl lg:ps-8 lg:pt-2 lg:text-xl"> Hi, I'm Ana </h1>
							<h2 className="montserrat-font xl:text-xl lg:text-lg lg:ps-8">An I.T professional with 8 years of experience</h2>
						</section>
						<div className='flex mt-auto xl:h-[90%] lg:h-[80%] justify-center'>
							<section className='xl:p-2 xl:w-1/3 lg:p-1 lg:w-1/2'>
								<h1 className="montserrat-font xl:pt-4 xl:text-2xl lg:pt-10 lg:ps-4 lg:text-xl">Experienced as:</h1>
								<p className='flex items-center xl:gap-2 xl:text-xl xl:ps-2 lg:gap-0.5 lg:text-md lg:ps-4'> <DotOutlineIcon className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"/> Web developer </p>
								<p className='flex items-center xl:gap-2 xl:text-xl xl:ps-2 lg:gap-0.5 lg:text-md lg:ps-4'> <DotOutlineIcon className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"/>Integration tester</p>
								<p className='flex  items-center xl:gap-2 xl:text-xl xl:ps-2 lg:gap-0.5 lg:text-md lg:ps-4'> <DotOutlineIcon className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"/>Infrastructure Specialist</p>
							</section> 
							<section className="relative xl:w-1/3 lg:w-1/2 overflow-hidden" >
								<img src="https://ik.imagekit.io/5vd9mfrfv/img/char_redimensionado.gif" className="absolute bottom-0 left-1/2 -translate-x-1/2 xl:h-full lg:h-[90%]" alt="cute girl waving" />
							</section>
						</div>
						
					</div>
				</section> 

				<section className='flex flex-col text-(--color-desert-sand-800) bg-white/70 xl:mt-6 lg:mt-4 '>
						<section>
							<h1 className="montserrat-font text-sm p-1">This web page was created using:</h1>
						</section>
						<section className='flex items-center justify-center gap-6 pb-4'>
							{/* typescript */}
							<IconesTooltip urlIcon={`https://img.icons8.com/?size=${iconSize}&id=uJM6fQYqDaZK&format=png&color=000000`} name={'Typescript'}/>
							<IconesTooltip urlIcon={`https://img.icons8.com/?size=${iconSize}&id=123603&format=png&color=000000`} name={'React'} />
							<IconesTooltip urlIcon={`https://img.icons8.com/?size=${iconSize}&id=x7XMNGh2vdqA&format=png&color=000000`} name={'TailwindCSS'} />
							<IconesTooltip urlIcon={`https://img.icons8.com/?size=${iconSize}&id=uY6QHPV8g5bd&format=png&color=000000`} name={'Google Fonts'} />
						</section>
				</section>
				</div>
			</div>
    </Layout>
    
  )
}
