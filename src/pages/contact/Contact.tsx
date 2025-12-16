import { MinusIcon, RectangleIcon, XIcon } from "@phosphor-icons/react";
import Layout from "../../components/layout/Layout";

export default function Contact() {
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
                <section className='flex h-9/10 bg-white text-(--color-desert-sand-800) border-s-2 border-e-2 border-b-2' >
                  <section className='relative w-2/3 overflow-hidden'>
                   <img src=" https://ik.imagekit.io/5vd9mfrfv/img/char_working.gif?updatedAt=1765651663342" className="absolute bottom-0 left-1/2 -translate-x-1/2" alt="cute girl waving" />
                  </section>
                  <section className="montserrat-font p-4 flex flex-col justify-center items-center" >
                    <p className='pt-2 flex text-xl'>Working to build</p>
                    <p className='pt-2 flex text-xl'> this page..</p>
                  </section>
                
               
               
                </section>
              </div>
          </div>
    </Layout>
    

  )
}
