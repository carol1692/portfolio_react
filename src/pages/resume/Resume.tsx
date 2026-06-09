import { MinusIcon, RectangleIcon, XIcon } from "@phosphor-icons/react";
import Layout from "../../components/layout/Layout";
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from "react";
import pdfFile from "../../assets/Ana Lemos_EN-updated_-2.pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
	const [numPages, setNumPages] = useState<number | null>(null);
 	const [pageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    	setNumPages(numPages);
  	}
  return (
     <Layout>
        <div className="w-full h-screen flex flex-col justify-between content-around ">
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
							
								<section
									className="

										montserrat-font
										flex
										bg-white 
										text-(--color-desert-sand-800)
										justify-center
										overflow-y-auto
										max-h-[60vh]
										border-s-2 border-e-2 border-b-2
									"
									>
									<Document
										file={pdfFile}
										onLoadSuccess={onDocumentLoadSuccess}
									>
										{Array.from(
										{ length: numPages || 0 },
										(_, index) => (
											<Page
											key={index}
											pageNumber={index + 1}
											
											/>
										)
										)}
									</Document>
									</section>
					
				{/* <section className='flex xl:h-130 lg:h-100 bg-white text-(--color-desert-sand-800) border-s-2 border-e-2 border-b-2' >
					<div className='flex flex-col w-full xl:gap-4 xl:mt-4'>
						<div className='flex mt-auto xl:h-[90%] lg:h-[80%] justify-center'>
							
							<section className="relative w-1/2 overflow-hidden" >
								<img src=" https://ik.imagekit.io/5vd9mfrfv/img/char_working.gif?updatedAt=1765651663342" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%]" alt="cute girl waving" />
								

							</section>
							<section className='montserrat-font flex flex-col justify-evenly items-center xl:p-2 xl:w-1/3 lg:w-1/2 xl:text-4xl lg:p-1 lg:text-2xl '>
								<p>Working to build this page.. </p>
								 
								<p>
									Página {pageNumber} de {numPages ?? "-"}
								</p>
							</section> 
							
						</div>
					</div>
				</section>  */}
			</div>
        </div>
    </Layout>
    

  )
}
