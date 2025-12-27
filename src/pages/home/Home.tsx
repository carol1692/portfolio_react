import IconesTootip from '../../components/iconesTooltip/IconesTootip';
import Layout from '../../components/layout/Layout'
import { DotOutlineIcon, MinusIcon, RectangleIcon, XIcon} from "@phosphor-icons/react";

export default function Home() {
	let	iconSize: Number = 50;
  	return (
    <Layout>
        <div className="flex flex-col justify-between content-around w-full">
			
			<div className='h-full'>
				<div className='flex justify-end pt-1 pb-1 gap-0.5 pe-1 border-2 text-(--color-desert-sand-800) border-s-2 border-end-2 border-t-2 x'>
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
				<section className='flex h-full md:h-4/6 text-(--color-desert-sand-800) border-s-2 border-e-2 border-b-2' >
					<div className='flex flex-col w-full gap-2'>
						<section className='flex flex-col w-full p-2 h-1/3 gap-3'>
							<h1 className="montserrat-font ps-8 pt-4 text-4xl md:text-2xl"> Hi, I'm Ana </h1>
							<h2 className="montserrat-font text-xl md:text-lg md:ps-8">An I.T professional with 8 years of experience</h2>
						</section>
						<div className='flex mt-auto h-full md:h-1/2 justify-center'>
							<section className='p-2 w-1/3' >
								<h1 className="montserrat-font pt-2 ps-8 ">Experienced as:</h1>
								<p className='ps-10 flex items-center gap-2 text-sm sm:text-base md:text-lg'> <DotOutlineIcon className="w-8 h-8 md:w-6 md:h-6"/> Web developer </p>
								<p className='ps-10 flex items-center gap-2 text-sm sm:text-base md:text-lg'> <DotOutlineIcon className="w-8 h-8 md:w-6 md:h-6"/>Integration tester</p>
								<p className='ps-10 flex items-center gap-2 text-sm sm:text-base md:text-lg'> <DotOutlineIcon className="w-8 h-8 md:w-6 md:h-6"/>Infrastructure Specialist</p>
							</section> 
							
							<section className="relative w-1/3 h-full overflow-hidden" >
								<img src="https://ik.imagekit.io/5vd9mfrfv/img/char_redimensionado.gif" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full" alt="cute girl waving" />
							</section>
						</div>
						
					</div>
						
				
					
					
				</section> 

				<section className='h-auto flex flex-col text-(--color-desert-sand-800) bg-white/70 mt-2'>
						<section>
							<h1 className="montserrat-font text-sm p-1">This web page was created using:</h1>
						</section>
						<section className='flex items-center justify-center overflow-hidden gap-6 pb-1'>
							{/* typescript */}
							<IconesTootip urlIcon={`https://img.icons8.com/?size=${iconSize}&id=uJM6fQYqDaZK&format=png&color=000000`} name={'Typescript'}/>
							<IconesTootip urlIcon={`https://img.icons8.com/?size=${iconSize}&id=123603&format=png&color=000000`} name={'React'} />
							<IconesTootip urlIcon={`https://img.icons8.com/?size=${iconSize}&id=x7XMNGh2vdqA&format=png&color=000000`} name={'Tailwind CSS'} />
							<IconesTootip urlIcon={`https://img.icons8.com/?size=${iconSize}&id=uY6QHPV8g5bd&format=png&color=000000`} name={'Google Fonts'} />
						</section>
				</section>
				</div>
		</div>
    </Layout>
    
  )
}
