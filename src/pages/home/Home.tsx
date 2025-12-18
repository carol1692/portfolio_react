import IconesTootip from '../../components/iconesTooltip/IconesTootip';
import Layout from '../../components/layout/Layout'
import { DotOutlineIcon, MinusIcon, RectangleIcon, XIcon} from "@phosphor-icons/react";

export default function Home() {
  return (
    <Layout>
        <div className="flex flex-col justify-between content-around w-full">
			
			<div className=' h-full'>
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
				<section className='flex h-5/6 bg-white text-(--color-desert-sand-800) border-s-2 border-e-2 border-b-2' >
					
					<section className='w-1/3 flex flex-col justify-center items-center'>
						<h1 className="montserrat-font p-4 text-4xl"> Hi, I'm Ana </h1>
						<h2 className="montserrat-font text-2xl">8 years as</h2>
						<h2 className="montserrat-font text-2xl">Tech professional</h2>
					</section>
					<section className='relative w-1/3 overflow-hidden'>
						<img src="https://ik.imagekit.io/5vd9mfrfv/img/char_redimensionado.gif" className="absolute bottom-0 left-1/2 -translate-x-1/2" alt="cute girl waving" />
					</section>
					<section className="montserrat-font p-4 flex flex-col justify-center items-center" >
						<h1 className="montserrat-font p-4 text-2xl">Worked as:</h1>
						
						<p className='pt-2 flex text-xl'> <DotOutlineIcon size={32}/> Web developer </p>
						<p className='pt-2 flex text-xl'> <DotOutlineIcon size={32}/>Integration tester</p>
						<p className='pt-2 flex text-xl'> <DotOutlineIcon size={32}/>Infrastructure Specialist</p>
					</section>
				</section> 

			</div>
				
			<section className='h-1/6 flex flex-col text-(--color-desert-sand-800) bg-white/70'>
					<section>
						<h1 className="montserrat-font text-sm p-1">This web page was created using:</h1>
					</section>
					<section className='flex items-center justify-center overflow-hidden gap-6 pb-1'>
						{/* typescript */}
						<IconesTootip urlIcon={'https://img.icons8.com/?size=50&id=uJM6fQYqDaZK&format=png&color=000000'} name={'Typescript'} />
						<IconesTootip urlIcon={'https://img.icons8.com/?size=50&id=123603&format=png&color=000000'} name={'React'} />
						<IconesTootip urlIcon={'https://img.icons8.com/?size=50&id=x7XMNGh2vdqA&format=png&color=000000'} name={'Tailwind CSS'} />
						<IconesTootip urlIcon={'https://img.icons8.com/?size=50&id=uY6QHPV8g5bd&format=png&color=000000'} name={'Google Fonts'} />
					</section>
			</section>
		</div>
    </Layout>
    
  )
}
