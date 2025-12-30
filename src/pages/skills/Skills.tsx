import { DotOutlineIcon, MinusIcon, RectangleIcon, XIcon } from '@phosphor-icons/react'
import Layout from '../../components/layout/Layout'
import { useState } from 'react'
import IconesTootip from '../../components/iconesTooltip/IconesTootip'

interface Icons{
	alt: string
	urlIcon: string
}

interface Habilidades{
	id:number
	nomeCategoria: string
	habilidades: Icons[],
}

const habilidades: Habilidades[] = [
  {
	id:0,
   	nomeCategoria:"Programming Languages",
	habilidades: [
		{alt:'python', urlIcon: 'https://img.icons8.com/?size=90&id=13441&format=png&color=000000'},
		{alt:'javascript', urlIcon:'https://img.icons8.com/?size=90&id=108784&format=png&color=000000'},
		{alt:'java', urlIcon:'https://img.icons8.com/?size=90&id=13679&format=png&color=000000'}
	]
  },
  {
	id:1,
   	nomeCategoria:"Front-end",
	habilidades: [
		{alt:'Javascript', urlIcon: 'https://img.icons8.com/?size=90&id=108784&format=png&color=000000bootstrap'},
		{alt:'Bootstrap', urlIcon:'https://img.icons8.com/?size=90&id=PndQWK6M1Hjo&format=png&color=000000'},
		{alt:'HTML', urlIcon:'https://img.icons8.com/?size=90&id=20909&format=png&color=000000'},
		{alt:'CSS', urlIcon:'https://img.icons8.com/?size=90&id=21278&format=png&color=000000'},
		{alt:'React', urlIcon:'https://img.icons8.com/?size=90&id=123603&format=png&color=000000'}
	]
  },
  {
	id:2,
   	nomeCategoria:"Frameworks & Libraries",
	habilidades: [
		{ alt: 'Flask', urlIcon: 'https://img.icons8.com/?size=90&id=MHcMYTljfKOr&format=png&color=000000' },
		{ alt: 'Django', urlIcon: 'https://img.icons8.com/?size=90&id=mUBILbYvUMq8&format=png&color=000000' },
		{ alt: 'Spring Boot', urlIcon: 'https://img.icons8.com/?size=90&id=A3Ulk2RcONKs&format=png&color=000000' },
		{ alt: 'Hibernate', urlIcon: 'https://ik.imagekit.io/5vd9mfrfv/Hibernate.png ' },
		{ alt: 'SQLAlchemy', urlIcon: 'https://icon.icepanel.io/Technology/png-shadow-512/SQLAlchemy.png' },
		{ alt: 'JPA', urlIcon: null }
	]
  },
  {
	id:3,
   	nomeCategoria:" Testing & Management Tools",
	habilidades:[
		{ alt: 'Pytest', urlIcon: 'https://icon.icepanel.io/Technology/svg/pytest.svg' },
		{ alt: 'JUnit', urlIcon: 'https://icon.icepanel.io/Technology/svg/JUnit.svg' },
		{ alt: 'SOAP UI', urlIcon: null },
		{ alt: 'Insomnia', urlIcon: 'https://icon.icepanel.io/Technology/svg/Insomnia.svg' },
		{ alt: 'IBM Tivoli Workload Scheduler (TWS)', urlIcon: null },
		{ alt: 'JIRA', urlIcon: 'https://icon.icepanel.io/Technology/svg/Jira.svg' }
	]

  },
  {
	id:4,
   	nomeCategoria:"Servers",
	habilidades: [
		{alt:'Linux', urlIcon: 'https://icon.icepanel.io/Technology/png-shadow-512/Linux.png'},
		{alt:'Windows', urlIcon:'https://img.icons8.com/?size=100&id=108792&format=png&color=000000'},
		{alt:'Red Hat', urlIcon:'https://icon.icepanel.io/Technology/svg/Red-Hat.svg'},
		{alt:'AIX', urlIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/IBM_AIX_logo_%28pre_2021%29.svg/960px-IBM_AIX_logo_%28pre_2021%29.svg.png?20240424014322'},
	]
  },
   {
	id:5,
   	nomeCategoria:"Databases",
	habilidades: [
		{alt:'SQL', urlIcon: 'https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000'},
		{alt:'MySQL', urlIcon:'https://img.icons8.com/?size=100&id=hYoELNwniGhi&format=png&color=000000'},
		{alt:'PostgreSQL', urlIcon:'https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000'},
		{alt:'IBM DB2', urlIcon: 'https://www.db2tutorial.com/wp-content/uploads/2019/03/db2-tutorial.png'},
	]
  },
  {
	id:6,
   	nomeCategoria:" Methodologies & Logic",
	habilidades: [
		{alt:'Agile', urlIcon: 'https://img.icons8.com/?size=100&id=RupzjxT3GmGw&format=png&color=000000'},
		{alt:'SaFe', urlIcon:'https://styles.redditmedia.com/t5_i5z8a/styles/communityIcon_qezdzuogm36a1.png'},
		{alt:'Scrum', urlIcon:'https://img.icons8.com/?size=100&id=knNqKYtdOBlU&format=png&color=000000'},
		{alt:'Logic Programming', urlIcon: 'https://img.icons8.com/?size=100&id=53381&format=png&color=000000'},
	]
  },
  {
	id:7,
   	nomeCategoria:"IDEs & Tools",
	habilidades: [
		{alt:'VSCode', urlIcon: 'https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg'},
		{alt:'Spring Tool Suite', urlIcon:'https://spring.io/img/projects/spring-tool.svg'},
		{alt:'Vi/Vim', urlIcon:'https://icon.icepanel.io/Technology/svg/Vim.svg'},
	]
  },
  {
	id:8,
   	nomeCategoria:"Version Control & DevOps",
	habilidades: [
		{alt:'Git', urlIcon: 'https://icon.icepanel.io/Technology/svg/Git.svg'},
		{alt:'GitHub', urlIcon:'https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png'},
		{alt:'GitLab', urlIcon:'https://icon.icepanel.io/Technology/svg/GitLab.svg'},
		{alt:'AWS EC2', urlIcon:'https://icon.icepanel.io/AWS/svg/Compute/EC2.svg'},
		{alt:'Jenkins', urlIcon:'https://icon.icepanel.io/Technology/svg/Jenkins.svg'},
	]
  },
]

export default function Skills() {
	
	const [skillsInfo, setSkillsInfo] = useState([])
	const [visivel, setVisivel] = useState(false);
	const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null);
	return (
	
	<Layout>
		<div className="w-full h-screen flex flex-col justify-between content-around">
			<div>
				<section className='flex flex-col text-(--color-desert-sand-800) gap-2'>
					{/* buttons */}
					<div className='xl:h-full lg:h-1/3 grid grid-cols-3 gap-3 bg-white/50 p-6'>
						{habilidades.map(
							(items)=>(
								<button
									key={items.id}
									onClick={() => {
										setVisivel(true);
										setSkillsInfo(items.habilidades);
										setCategoriaAtiva(items.nomeCategoria);
									}}
									className={`
										silkscreen-regular flex-wrap xl:text-sm lg:text-xs border-2 rounded-md xl:p-2
										transition-all hover:scale-105
										${
										categoriaAtiva === items.nomeCategoria
											? "bg-(--color-puce-300)"
											: "bg-transparent"
										}
										hover:bg-(--color-puce-300)
									`}
									>
									{items.nomeCategoria}
									</button>

							)
						)}
					</div>
					{/* icons */}
					{/* invisible until button clicked */}
					{visivel && (
						<div id='skillInfo'>
							{/* window header */}
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
							{/*  end window header */}

							{/* Icons window */}
							<section className='flex flex-wrap xl:h-100 lg:h-80 items-center justify-center text-(--color-desert-sand-800) border-s-2 border-e-2 border-b-2 overflow-hidden gap-6 bg-white' >
								{skillsInfo.map(
									(skills)=>(
										<div className='w-20'>
											<IconesTootip urlIcon={skills.urlIcon} name={skills.alt} /> 
										</div>
										
										
										
										
									)
								)}	
								
							</section> 

						</div>
					)}
				</section>
			</div>
		</div>
	</Layout>
	
    
  )
}
