export default function Footer() {
    let data = new Date().getFullYear();
  return (
     <>
       <div className="bottom-0 fixed w-full h-[5vh] flex items-center justify-center bg-white/20">
			<div className="text-(--color-almond-silk-700) silkscreen-regular">{data}, Ana Lemos - Autoral Content </div>
		</div>
    </>
  )
}
