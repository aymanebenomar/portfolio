import React from 'react'
import { words } from '../constants'
import { words2 } from '../constants'
import Button from '../components/Button'

const hero = () => {
  return (
	<section id="hero" className="relative overflow-hidden" >
		<div className="absolute top-0 left-0 z-10">
			<img src='/images/bg.png' alt="Background" />
		</div>

		<div className='hero-layout'>
		{/* LEFT HERO CONTENT */}

		<header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
			<div className='flex flex-col gap-7'>
				<div className='hero-text'>
					<h1>
						Turning Coffee Into 
						<span className="slide">
							<span className="wrapper">
								{words.map((word, index) => (
								<span
									key={index}
									className="flex items-center md:gap-3 gap-1 pb-2"
								>
									<img
									src={word.imgPath}
									alt="person"
									className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
									/>
									<span>{word.text}</span>
								</span>
								))}
							</span>
							</span>
						</h1>
					<h1>
						And Data Into
						<span className="slide">
							<span className="wrapper">
								{words2.map((word, index) => (
								<span
									key={index}
									className="flex items-center md:gap-3 gap-1 pb-2"
								>
									<img
									src={word.imgPath}
									alt="person"
									className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
									/>
									<span>{word.text}</span>
								</span>
								))}
							</span>
							</span>
					</h1>
				</div>
				<p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Benomar Aymane - Moroccan full-stack developer | data engineering student. I build things that work, fix things that don't, and yes, I actually read the documentation. Your project is safe with me.
            </p>
			<Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
			</div>
			</header>

		{/* RIGHT 3D MODEL */}
		<figure>

		</figure>
		
		</div>
	</section>
  )
}

export default hero