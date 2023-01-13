import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>Fashion</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className='flex items-center justify-center lg:justify-between px-28 py-12'>
				<div className='relative min-h-[60px] min-w-[236px]'>
					<Image
						src='/assets/Logo.png'
						alt=''
						fill
						className='object-fit'
					/>
				</div>
				<nav className='hidden lg:flex items-center gap-8 PoppinMedium  uppercase'>
					<Link href=''>
						<p>Catalogue</p>
					</Link>
					<Link href=''>
						<p>Fashion</p>
					</Link>
					<Link href='#Favorites'>
						<p>Favorites</p>
					</Link>
					<Link href=''>
						<p>LifeStyle</p>
					</Link>
					<Link href=''>
						<p className='bg-black text-white px-5 py-3 rounded-lg'>
							SIGN UP
						</p>
					</Link>
				</nav>
			</header>

			<main>
				<section className='md:px-28'>
					<div className='flex flex-col lg:flex-row px-28 pt-14 bg-[#F4F6F5] rounded-[60px]'>
						<div>
							<h1 className='PoppinBlack uppercase text-[4rem] md:text-8xl'>
								let's
								<br />
								explore <br />
								unique <br />
								clothes.
							</h1>
							<p className='mt-10 PoppinRegular text-[1.5rem]'>
								Live for Influential and Innovative fashion!
							</p>
							<div className='flex items-center mt-10 mb-16'>
								<div className='hidden lg:inline-block relative min-w-[190px] min-h-[32px]'>
									<Image
										src='/assets/YellowBrush.png'
										alt=''
										fill
										className='object-contain'
									/>
								</div>
								<Link
									href='/'
									className='inline-block lg:ml-8 px-10 py-2.5 text-white PoppinMedium bg-black rounded-[10px]'>
									<p>Shop Now</p>
								</Link>
							</div>
						</div>
						<Image
							src='/assets/HeroImage.png'
							alt=''
							width='400'
							height='0'
							className='object-fit min-w-[300px] max-w-[871px]'
						/>
					</div>
				</section>

				<section className='hidden md:block my-16'>
					<div className='flex justify-between px-28 py-16 bg-[#EBD96B]'>
						<div className='relative w-24 h-12'>
							<Image src='/assets/HNMLogo.png' alt='' fill />
						</div>
						<div className='relative w-24 h-12'>
							<Image src='/assets/ObeyLogo.png' alt='' fill />
						</div>
						<div className='relative w-24 h-12'>
							<Image src='/assets/ShopifyLogo.png' alt='' fill />
						</div>
						<div className='relative w-24 h-12'>
							<Image src='/assets/LacosteLogo.png' alt='' fill />
						</div>
						<div className='relative w-24 h-12'>
							<Image src='/assets/LevisLogo.png' alt='' fill />
						</div>
						<div className='relative w-24 h-12'>
							<Image src='/assets/AmazonLogo.png' alt='' fill />
						</div>
					</div>
				</section>

				<section className='px-28 my-24'>
					<h2 className='PoppinBlack text-5xl'>NEW ARRIVALS</h2>
					<div className='mt-28'>
						<div className='flex flex-col md:flex-row justify-between items-center gap-8'>
							<div>
								<Image
									src='/assets/HoodiesAndSweatShirt.png'
									alt=''
									width='400'
									height='0'
								/>
								<div className='flex justify-between items-center mt-6 md:mt-12'>
									<div>
										<h3>Hoodies & Sweetshirt</h3>
										<Link href=''>
											<p className='PoppinMedium text-[#7F7F7F]'>
												Explore Now!
											</p>
										</Link>
									</div>
									<div>
										<Image
											src='/assets/Arrow 1.png'
											alt=''
											width='32'
											height='1'
											className='object-contain'
										/>
									</div>
								</div>
							</div>
							<div>
								<Image
									src='/assets/CoatsAndParkas.png'
									alt=''
									width='400'
									height='0'
								/>
								<div className='flex justify-between items-center mt-6 md:mt-12'>
									<div>
										<h3 className='PoppinMedium'>
											Coats & Parkas
										</h3>
										<Link href=''>
											<p className='PoppinMedium text-[#7F7F7F]'>
												Explore Now!
											</p>
										</Link>
									</div>
									<div>
										<Image
											src='/assets/Arrow 1.png'
											alt=''
											width='32'
											height='1'
											className='object-contain'
										/>
									</div>
								</div>
							</div>
							<div>
								<Image
									src='/assets/Tees&Tshirts.png'
									alt=''
									width='400'
									height='0'
								/>
								<div className='flex justify-between items-center mt-6 md:mt-12'>
									<div>
										<h3 className='PoppinMedium'>
											Tees & T-Shirts
										</h3>
										<Link href=''>
											<p className='PoppinMedium text-[#7F7F7F]'>
												Explore Now!
											</p>
										</Link>
									</div>
									<div>
										<Image
											src='/assets/Arrow 1.png'
											alt=''
											width='32'
											height='1'
											className='object-contain'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='flex bg-gradient-to-t from-[#E0C340] via-[#DFC23E] via-[#E1C441] via-[#E3C743] via-[#E4C542] via-[#E6C744] via-[#E7C845] via-[#E5C643] via-[#E6C945] via-[#E3C743] via-[#E9CA48] via-[#EDCE49] via-[#F0D44C] via-[#F4D84F] via-[#F6DA52] via-[#F7DB53] via-[#F9DD55] via-[#F9DF56] via-[#FAE157] to-[#F9DF56]'>
					<div>
						<Image
							src='/assets/PayDaySale.png'
							alt=''
							width={700}
							height={1}
							className='hidden md:block object-fit min-h-full min-w-[500px] max-w-[700px]'
						/>
					</div>
					<div className='pt-24 px-12 pb-8'>
						<h2 className='PoppinBlack text-[4rem]'>
							PAYDAY <br />
							SALE NOW
						</h2>
						<p className='text-[1.4rem]'>
							Spend minimal $100 get 30% off voucher code for your
							next purchase
						</p>
						<p className='PoppinBlack text-[3rem]'>
							1 January - 10 January 2023
						</p>
						<p>*Terms & Conditions apply</p>
						<Link
							href='/'
							className='inline-block mt-8 px-10 py-2.5 text-white PoppinMedium bg-black rounded-[10px]'>
							<p>Shop Now</p>
						</Link>
					</div>
				</section>

				<section className='mt-24 px-24'>
					<h2 className='my-8 PoppinBlack text-5xl'>
						Young's Favorite
					</h2>
					<div className='flex flex-col md:flex-row gap-8'>
						<div>
							<div>
								<Image
									src='/assets/TrendingOnInstagram.png'
									alt=''
									width={835}
									height='0'
									className='object-fit'
								/>
							</div>
							<div className='flex justify-between items-center mt-6'>
								<div>
									<h3 className='PoppinBlack text-[2rem]'>
										Trending on Instagram
									</h3>
									<Link href=''>
										<p className='PoppinMedium text-[#7F7F7F]'>
											Explore Now !
										</p>
									</Link>
								</div>
								<div>
									<Image
										src='/assets/Arrow 1.png'
										alt=''
										width='32'
										height='1'
										className='object-contain'
									/>
								</div>
							</div>
						</div>
						<div>
							<div>
								<Image
									src='/assets/Under40Favorites.png'
									alt=''
									width={835}
									height='0'
									className='object-fit'
								/>
							</div>
							<div className='flex justify-between items-center mt-6'>
								<div>
									<h3 className='PoppinBlack text-[2rem]'>
										Trending on Instagram
									</h3>
									<Link href=''>
										<p className='PoppinMedium text-[#7F7F7F]'>
											Explore Now !
										</p>
									</Link>
								</div>
								<div>
									<Image
										src='/assets/Arrow 1.png'
										alt=''
										width='32'
										height='1'
										className='object-contain'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='flex items-center flex-col md:flex-row justify-between px-28 mt-52'>
					<div className='p-8'>
						<h2 className='text-[3rem] uppercase'>
							Download app & <br />
							get the voucher
						</h2>
						<p className='text-6 text-[#7C7C7C]'>
							Get 30% off for first transaction using <br />
							Rondovision mobile app for now.
						</p>
						<div className='flex gap-4 mt-8'>
							<Link href=''>
								<div>
									<Image
										src='/assets/AppleAppStore.png'
										alt=''
										width='200'
										height='0'
										className='object-fit'
									/>
								</div>
							</Link>
							<Link href=''>
								<div>
									<Image
										src='/assets/GooglePlay.png'
										alt=''
										width='200'
										height='0'
										className='object-fit'
									/>
								</div>
							</Link>
						</div>
					</div>
					<div>
						<Image
							src='/assets/MobileAppFrame.png'
							alt=''
							width='400'
							height='0'
							className='object-fit max-w-[671px]'
						/>
					</div>
				</section>
				<section className='flex flex-col justify-center items-center px-24 mt-64 min-h-[623px] text-center text-white bg-[#E5C643]'>
					<h2 className='PoppinBlack text-[55px] uppercase'>
						Join shopping community to <br />
						get monthly promo
					</h2>
					<p className='my-6 text-[2rem]'>
						Type your email down below and be a young, wild
						generation
					</p>
					<form
						className='relative min-w-[500px] mt-8'
						onSubmit={(e) => {
							e.preventDefault();
						}}>
						<div className='relative flex items-center px-8 py-6 bg-white text-black rounded-[10px]'>
							<input
								type='email'
								placeholder='Add your email here...'
								className='bg-transparent b-none focus:outline-none'
							/>
							<button
								className='absolute right-[10px] px-8 py-3 bg-black text-white rounded-lg'
								type='submit'>
								SEND
							</button>
						</div>
					</form>
				</section>
			</main>
			<footer className='flex justify-between min-h-[545px] p-24 bg-black text-[#8E8E8E]'>
				<div>
					<h4 className='text-[2rem]  uppercase text-white'>
						fashion
					</h4>
					<p className='mt-8'>
						Complete your style with awesome <br /> clothes from us.
					</p>
					<div>
						<div className='flex  gap-8 pt-8'>
							<Link href='/'>
								<div>
									<Image
										src='/assets/Facebook.png'
										alt=''
										width='52'
										height='52'
										className='object-fit'
									/>
								</div>
							</Link>
							<Link href='/'>
								<div>
									<Image
										src='/assets/InstaGram.png'
										alt=''
										width='52'
										height='52'
										className='object-fit'
									/>
								</div>
							</Link>
							<Link href='/'>
								<div>
									<Image
										src='/assets/Twitter.png'
										alt=''
										width='52'
										height='52'
										className='object-fit'
									/>
								</div>
							</Link>
							<Link href='/'>
								<div>
									<Image
										src='/assets/LinkedIn.png'
										alt=''
										width='52'
										height='52'
										className='object-fit'
									/>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className='flex gap-x-44'>
					<div className='flex flex-col'>
						<h4 className='text-[#D9D9D9]'>Company</h4>
						<Link href='/' className='mt-8'>
							<p className='text-6'>About</p>
						</Link>
						<Link href='/' className='mt-8'>
							<p className='text-6'>Contact us</p>
						</Link>
						<Link href='/' className='mt-8'>
							<p className='text-6'>Support</p>
						</Link>
						<Link href='/' className='mt-8'>
							<p className='text-6'>Careers</p>
						</Link>
					</div>
					<div className='flex flex-col'>
						<h4 className='text-[#D9D9D9]'>Quick Link</h4>
						<Link href='/' className='mt-8'>
							<p className='text-6'>Share Location</p>
						</Link>
						<Link href='/' className='mt-8'>
							<p className='text-6'>Orders Tracking</p>
						</Link>
						<Link href='/' className='mt-8'>
							<p className='text-6'>Size Guide</p>
						</Link>
						<Link href='/' className='mt-8'>
							<p className='text-6'>FAQs</p>
						</Link>
					</div>
					<div className='flex flex-col'>
						<h4 className='text-[#D9D9D9]'>Company</h4>
						<Link href='/' className='mt-8'>
							<p className='text-6'>Terms & conditions</p>
						</Link>
						<Link href='/' className='mt-8'>
							<p className='text-6'>Privacy Policy</p>
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
