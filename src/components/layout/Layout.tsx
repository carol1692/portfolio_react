import { useEffect, useState, type ReactNode } from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { MobileModalWarning } from "../modalWarning/MobileModalWarning";

interface LayoutProps {
	children: ReactNode;
}

function Layout({children}: LayoutProps) {
return (
	<>
		<MobileModalWarning />
		<div className="h-screen flex flex-col justify-center items-center bg-[url('https://ik.imagekit.io/5vd9mfrfv/img/img_autoral_ana_lemos.jpg')]">
			<div className="w-3/6 xl:h-[80%] lg:h-[90%] rounded-xl shadow-md bg-(--color-almond-silk-100)  border-2 border-(--color-coffee-bean-700) border-e-10 border-b-10 overflow-hidden">
				<nav>
					<NavBar />
				</nav>
				<hr className="text-(--color-desert-sand-700) border"/>
					<div className="flex flex-col h-[90%]">
						<main className="flex p-4 mb-8 ">
							{children}
						</main>
					</div>
			
			</div>
			<footer className="w-full">
				<Footer />
			</footer>
		</div>
	
	</>
  	

  )
}

export default Layout