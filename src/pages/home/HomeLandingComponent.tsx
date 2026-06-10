import { DotOutlineIcon, MinusIcon, RectangleIcon, XIcon} from "@phosphor-icons/react";

export default function HomeLandingComponent() {
  return (
    <section className="w-full flex flex-col justify-between content-around">
            {/* window header */}
            <section className='flex justify-end pt-1 pb-1 gap-0.5 pe-1 border-2 text-(--color-desert-sand-800) border-s-2 border-end-2 border-t-2'>
                <section className='flex w-8 h-8 bg-white border-2 rounded justify-center items-baseline-last'>
                    <MinusIcon size={22} />
                </section>
                <section className='flex w-8 h-8 bg-white border-2 rounded justify-center items-center'>
                    <RectangleIcon size={22} />
                </section>
                <section className='flex w-8 h-8 bg-white border-2 rounded justify-center items-center'>
                    <XIcon size={22} />
                </section>
            </section>
            {/* end window header */}
            {/* landing page */}
                <section className='flex flex-col h-full bg-white text-(--color-desert-sand-800) border-s-2 border-e-2 border-b-2 overflow-hidden' >
                    <section className='flex flex-col w-full'>
                        <section className="mt-4 flex sm:flex flex-col" >
                            <section className='w-1/3 m-6'>
                                <h1 className="montserrat-font ps-8 xl:text-4xl lg:ps-8 lg:text-xl"> Hi, I'm Ana </h1>
                                <h2 className="montserrat-font text-xl ps-8">An I.T professional with 8 years of experience</h2>
                            </section>

                            <section className='w-2/3 m-6 pt-10'>
                                <h1 className="montserrat-font xl:text-2xl lg:text-xl">Experienced as:</h1>
                                <p className='flex items-center xl:gap-2 xl:text-xl xl:ps-2 lg:gap-0.5 lg:text-md lg:ps-4'> <DotOutlineIcon className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"/> Web developer </p>
                                <p className='flex items-center xl:gap-2 xl:text-xl xl:ps-2 lg:gap-0.5 lg:text-md lg:ps-4'> <DotOutlineIcon className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"/>Integration tester</p>
                                <p className='flex  items-center xl:gap-2 xl:text-xl xl:ps-2 lg:gap-0.5 lg:text-md lg:ps-4'> <DotOutlineIcon className="xl:w-8 xl:h-8 lg:w-6 lg:h-6"/>Infrastructure Specialist</p>
                            </section> 
                    </section>
                </section>
        
                <section id='animation' className='flex justify-center'>
                        <img src="https://ik.imagekit.io/5vd9mfrfv/img/char_redimensionado.gif" className="bottom-0 h-60" alt="cute girl waving" />
                </section>
							
            </section>
        
	</section>
  )
}
