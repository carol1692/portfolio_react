import Layout from '../../components/layout/Layout'
import { DotOutlineIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <Layout>
        <div className="flex flex-col justify-between content-around p-4 w-full gap-1">
				<section className='h-4/6 flex text-(--color-desert-sand-800) bg-white rounded-2xl border-4 border-dotted overflow-hidden'>
						<section className='w-1/3 flex flex-col justify-center items-center m-4'>
							<h1 className="montserrat-font p-4 text-4xl"> Hi, I'm Ana </h1>
							<h2 className="montserrat-font text-2xl w-2/3">8 years as I.T professional</h2>
						</section>
						<section className='w-1/3 bg-white flex items-center justify-center overflow-hidden'>
							<img src="https://ik.imagekit.io/5vd9mfrfv/img/char_redimensionado.gif" className="p-2" alt="cute girl waving" />
						</section>
						<section className="montserrat-font p-4" >
						<h1 className="montserrat-font p-4 text-2xl">Worked as:</h1>
						{/* <hr className="text-(--color-desert-sand-700) border"/> */}
						<p className='pt-2 flex text-xl'> <DotOutlineIcon size={32}/> Web developer </p>
						<p className='pt-2 flex text-xl'> <DotOutlineIcon size={32}/>Integration tester</p>
						<p className='pt-2 flex text-xl'> <DotOutlineIcon size={32}/>Infrastructure Specialist</p>
						</section>
				</section> 
				{/* <hr className="text-(--color-desert-sand-700) border"/> */}
				<section className='h-2/6 flex flex-col text-(--color-desert-sand-800) rounded-2xl bg-white/50'>
						<section className='p-2'>
							<h1 className="montserrat-font text-xl">This web page was created using:</h1>
						</section>
						<section className='flex items-center justify-center overflow-hidden gap-6 pt-4'>
							{/* typescript */}
							<div className="group relative w-12 h-12">
								<img
									src="https://img.icons8.com/?size=50&id=uJM6fQYqDaZK&format=png&color=000000"
									alt="Tailwind"
									className="w-full h-full object-contain"
								/>

								<div
									className="
										absolute inset-0
										flex items-center justify-center
										text-(--color-desert-sand-800) text-xs font-semibold
										opacity-0 scale-95
										group-hover:opacity-100 group-hover:scale-100
										transition-all duration-200
										bg-white/80 rounded
									"
								>
									Typescript
								</div>
							</div>
							{/* react */}
							<div className="group relative w-12 h-12">
								<img src="https://img.icons8.com/?size=50&id=123603&format=png&color=000000" alt="" className="w-full h-full object-contain"/>
								<div
									className="absolute inset-0
									flex items-center justify-center
									text-(--color-desert-sand-800) text-xs font-semibold
									opacity-0 scale-95
									group-hover:opacity-100 group-hover:scale-100
									transition-all duration-200
									bg-white/80 rounded">
									React JS
								</div>
							</div>
							{/* tailwind */}
							<div className="group relative w-12 h-12">
								<img src="https://img.icons8.com/?size=50&id=x7XMNGh2vdqA&format=png&color=000000" alt="" className="w-full h-full object-contain"/>
								<div
									className="absolute inset-0
									flex items-center justify-center
									text-(--color-desert-sand-800) text-xs font-semibold
									opacity-0 scale-95
									group-hover:opacity-100 group-hover:scale-100
									transition-all duration-200
									bg-white/80 rounded">
									Tailwind CSS
								</div>
							</div>
							{/* google fonts */}
							<div className="group relative w-12 h-12 ">
								<img src="https://img.icons8.com/?size=50&id=uY6QHPV8g5bd&format=png&color=000000" alt="" className="w-full h-full object-contain"/>
								<div
									className="absolute inset-0
									flex items-center justify-center
									text-(--color-desert-sand-800) text-xs font-semibold
									opacity-0 scale-95
									group-hover:opacity-100 group-hover:scale-100
									transition-all duration-200
									bg-white/80 rounded">
									Google Fonts
								</div>
							</div>
						</section>
				</section>
		</div>
    </Layout>
    
  )
}
