import type { ReactNode } from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

interface LayoutProps {
	children: ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
	<>
		<div className="h-screen bg-repeat flex flex-col justify-center items-center bg-[url('https://ik.imagekit.io/5vd9mfrfv/img/img_autoral_ana_lemos.jpg')]">
			<div className="w-2/4 h-4/6 rounded-xl shadow-md bg-(--color-almond-silk-100)  border-2 border-(--color-coffee-bean-700) border-e-10 border-b-10">
				<nav>
					<NavBar />
				</nav>
				<hr className="text-(--color-desert-sand-700) border"/>
					<div className="flex flex-col h-7/8 mt-4 ">
						<main className="flex p-4 h-screen">
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