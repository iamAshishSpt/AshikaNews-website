import {
	ChevronLeft,
	ChevronRight,
	Facebook,
	Instagram,
	Linkedin,
	Search,
	Star,
	Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
	const movies = [
		{ id: 1, title: "स्पाइडरम्यान: नो वे होम" },
		{ id: 2, title: "फ्रोजन: सिङ-ए-लोङ" },
		{ id: 3, title: "सिङ" },
		{ id: 4, title: "टोय स्टोरी २" },
	];

	const topicSections = [
		{ id: 1, title: "मनोरञ्जन विषय", color: "purple", tag: "मनोरञ्जन" },
		{ id: 2, title: "राजनीतिक विषय", color: "red", tag: "राजनीति" },
		{ id: 3, title: "खेलकुद विषय", color: "green", tag: "खेलकुद" },
		{ id: 4, title: "स्वास्थ्य विषय", color: "purple", tag: "स्वास्थ्य" },
		{ id: 5, title: "वित्त विषय", color: "orange", tag: "वित्त" },
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Top Bar */}
			<div className="bg-gray-800 text-white py-2 px-4">
				<div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
					<div className="flex items-center space-x-4">
						<span>शनिबार, २१ जनवरी, २०२३</span>
						<div className="flex items-center space-x-1">
							<span>☀️</span>
							<span>२४°C</span>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-lg font-bold">AshikaNews</h1>
					</div>
					<div className="flex items-center space-x-4">
						<a href="/login" className="hover:text-red-400">
							लगइन
						</a>
						<a href="/register" className="hover:text-red-400">
							दर्ता
						</a>
						<button
							type="button"
							className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded"
						>
							सदस्यता
						</button>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<nav className="bg-gray-700 text-white py-4">
				<div className="max-w-7xl mx-auto flex justify-between items-center px-4">
					<div className="text-2xl font-bold">AshikaNews</div>
					<div className="flex items-center space-x-8">
						<a href="/" className="hover:text-red-400">
							गृह
						</a>
						<a href="/business" className="hover:text-red-400">
							व्यापार
						</a>
						<a href="/politics" className="hover:text-red-400">
							राजनीति
						</a>
						<a href="/sports" className="hover:text-red-400">
							खेलकुद
						</a>
						<a href="/entertainment" className="hover:text-red-400">
							मनोरञ्जन
						</a>
						<a href="/health" className="hover:text-red-400">
							स्वास्थ्य
						</a>
						<a href="/more" className="hover:text-red-400">
							अधिक
						</a>
					</div>
					<Search className="w-6 h-6 cursor-pointer hover:text-red-400" />
				</div>
			</nav>

			{/* Hero Section */}
			<section className="bg-gray-900 text-white">
				<div className="max-w-7xl mx-auto px-4 py-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Main Article */}
						<div className="lg:col-span-2 relative">
							<div className="relative rounded-lg overflow-hidden h-96">
								<Image
									src="/images/cricket.jpeg"
									alt="नेपाल राष्ट्रिय क्रिकेट टिम"
									fill
									priority
									unoptimized
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
								{/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
								<div className="absolute inset-0 p-8 flex flex-col justify-end">
									<div className="relative z-10">
										<h2 className="text-3xl font-bold mb-4">
											नेपाल राष्ट्रिय क्रिकेट टिमले म्याच जितेर अन्तिम चरणमा पुग्यो
										</h2>
										<p className="text-gray-300 mb-4">
											काठमाडौं, २१ जनवरी २०२३ - १०:०० बजे
										</p>
										<button
											type="button"
											className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded"
										>
											पूरा पढ्नुहोस्
										</button>
									</div>
								</div>
							</div>
						</div>

						{/* Side Articles */}
						<div className="space-y-4">
							<div className="bg-gray-800 rounded-lg p-4">
								<div className="flex space-x-3">
									<div className="relative w-16 h-16 rounded overflow-hidden">
										<Image
											src="/images/politics-real.jpg"
											alt="प्रधानमन्त्री"
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<h3 className="font-semibold text-sm">
											प्रधानमन्त्रीले नयाँ योजना घोषणा गर्नुभयो
										</h3>
										<p className="text-gray-400 text-xs">२ घण्टा अघि</p>
									</div>
								</div>
							</div>
							<div className="bg-gray-800 rounded-lg p-4">
								<div className="flex space-x-3">
									<div className="relative w-16 h-16 rounded overflow-hidden">
										<Image
											src="/images/sports-real.jpg"
											alt="मेट्रो रेल"
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<h3 className="font-semibold text-sm">
											काठमाडौंमा नयाँ मेट्रो रेल परियोजना
										</h3>
										<p className="text-gray-400 text-xs">३ घण्टा अघि</p>
									</div>
								</div>
							</div>
							<div className="bg-gray-800 rounded-lg p-4">
								<div className="flex space-x-3">
									<div className="relative w-16 h-16 rounded overflow-hidden">
										<Image
											src="/images/education-real.jpg"
											alt="शिक्षा"
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<h3 className="font-semibold text-sm">
											शिक्षा क्षेत्रमा नयाँ नीति लागू
										</h3>
										<p className="text-gray-400 text-xs">४ घण्टा अघि</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Latest Release Section */}
			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-2xl font-bold text-gray-800">ताजा समाचार</h2>
						<button
							type="button"
							className="text-red-600 hover:text-red-700 font-semibold"
						>
							सबै हेर्नुहोस्
						</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* News Cards */}
						<div className="bg-white rounded-lg shadow-md overflow-hidden">
							<div className="relative h-48">
								<Image
									src="/images/politics-real.jpg"
									alt="राजनीति"
									fill
									className="object-cover"
								/>
								<span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
									तातो विषय
								</span>
							</div>
							<div className="p-4">
								<h3 className="font-semibold text-gray-800 mb-2">
									राष्ट्रपतिले नयाँ मन्त्रिपरिषद गठन गर्नुभयो
								</h3>
								<p className="text-gray-600 text-sm mb-3">
									राजनीतिक क्षेत्रमा नयाँ परिवर्तनको सुरुवात भएको छ...
								</p>
								<button
									type="button"
									className="text-black hover:text-gray-700 font-semibold"
								>
									पढ्नुहोस्
								</button>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-md overflow-hidden">
							<div className="relative h-48">
								<Image
									src="/images/sports-real.jpg"
									alt="खेलकुद"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-4">
								<h3 className="font-semibold text-gray-800 mb-2">
									नेपाली एथलीटले अन्तर्राष्ट्रिय प्रतियोगितामा स्वर्ण पदक जिते
								</h3>
								<p className="text-gray-600 text-sm mb-3">
									खेलकुद क्षेत्रमा नेपालको गौरव बढाउने उपलब्धि...
								</p>
								<button
									type="button"
									className="text-black hover:text-gray-700 font-semibold"
								>
									पढ्नुहोस्
								</button>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-md overflow-hidden">
							<div className="relative h-48">
								<Image
									src="/images/environment.jpg"
									alt="पर्यावरण"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-4">
								<h3 className="font-semibold text-gray-800 mb-2">
									हिमाली क्षेत्रमा वन्यजन्तु संरक्षणको नयाँ योजना
								</h3>
								<p className="text-gray-600 text-sm mb-3">
									पर्यावरण संरक्षणको लागि सरकारले नयाँ नीति ल्याएको छ...
								</p>
								<button
									type="button"
									className="text-black hover:text-gray-700 font-semibold"
								>
									पढ्नुहोस्
								</button>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-md overflow-hidden">
							<div className="relative h-48">
								<Image
									src="/images/education-real.jpg"
									alt="शिक्षा"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-4">
								<h3 className="font-semibold text-gray-800 mb-2">
									शिक्षा क्षेत्रमा डिजिटल परिवर्तनको सुरुवात
								</h3>
								<p className="text-gray-600 text-sm mb-3">
									आधुनिक शिक्षा प्रणालीको विकासको लागि नयाँ योजना...
								</p>
								<button
									type="button"
									className="text-black hover:text-gray-700 font-semibold"
								>
									पढ्नुहोस्
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Entertainment Section */}
			<section className="py-12 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">
							दर्शकहरूको मनपर्ने चलचित्रहरू
						</h2>
						<div className="relative">
							<div className="relative h-64 rounded-lg overflow-hidden">
								<Image
									src="/images/movie-hero.svg"
									alt="मुख्य चलचित्र"
									fill
									className="object-cover"
								/>
							</div>
							<button
								type="button"
								className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
							>
								<ChevronLeft className="w-6 h-6" />
							</button>
							<button
								type="button"
								className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
							>
								<ChevronRight className="w-6 h-6" />
							</button>
						</div>
						<div className="flex justify-center space-x-2 mt-4">
							<div className="w-2 h-2 bg-red-600 rounded-full"></div>
							<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
							<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{movies.map((movie) => (
							<div
								key={movie.id}
								className="bg-white rounded-lg shadow-md overflow-hidden"
							>
								<div className="relative h-32">
									<Image
										src="/images/entertainment.svg"
										alt={movie.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<h3 className="font-semibold text-gray-800 mb-1">
										{movie.title}
									</h3>
									<p className="text-gray-600 text-xs mb-2">२ घण्टा अघि</p>
									<div className="flex">
										{[1, 2, 3, 4, 5].map((star) => (
											<Star
												key={star}
												className="w-4 h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="text-center mt-8">
						<button
							type="button"
							className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
						>
							सबै हेर्नुहोस्
						</button>
					</div>
				</div>
			</section>

			{/* Vacation Spot Section */}
			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2 relative">
							<div className="relative h-64 rounded-lg overflow-hidden">
								<Image
									src="/images/tourism.svg"
									alt="पोखरा पर्यटन"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-30"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="text-center text-white">
										<h2 className="text-2xl font-bold mb-4">
											पोखराको सर्वश्रेष्ठ पर्यटन स्थल
										</h2>
										<button
											type="button"
											className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded"
										>
											पूरा पढ्नुहोस्
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="space-y-4">
							{[1, 2, 3, 4, 5, 6].map((item) => (
								<div key={item} className="bg-gray-100 rounded-lg p-3">
									<div className="flex space-x-3">
										<div className="relative w-12 h-12 rounded overflow-hidden">
											<Image
												src="/images/tourism.svg"
												alt="पर्यटन"
												fill
												className="object-cover"
											/>
										</div>
										<div>
											<h3 className="font-semibold text-sm">
												पर्यटन क्षेत्रमा नयाँ विकास
											</h3>
											<p className="text-gray-600 text-xs">१ घण्टा अघि</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Topic Sections */}
			{topicSections.map((section) => (
				<section key={section.id} className="py-12 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4">
						<div className="flex justify-between items-center mb-8">
							<h2 className="text-2xl font-bold text-gray-800">
								{section.title}
							</h2>
							<button
								type="button"
								className="text-red-600 hover:text-red-700 font-semibold"
							>
								सबै हेर्नुहोस्
							</button>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{[1, 2, 3].map((item) => (
								<div
									key={item}
									className="bg-white rounded-lg shadow-md overflow-hidden"
								>
									<div className="relative h-32">
										<Image
											src={`/images/${
												section.tag === "मनोरञ्जन"
													? "entertainment"
													: section.tag === "राजनीति"
														? "politics-real"
														: section.tag === "खेलकुद"
															? "sports-real"
															: section.tag === "स्वास्थ्य"
																? "entertainment"
																: "education-real"
											}.jpg`}
											alt={section.tag}
											fill
											className="object-cover"
										/>
									</div>
									<div className="p-4">
										<span
											className={`inline-block px-2 py-1 rounded text-xs text-white mb-2 ${
												section.color === "purple"
													? "bg-purple-600"
													: section.color === "red"
														? "bg-red-600"
														: section.color === "green"
															? "bg-green-600"
															: "bg-orange-600"
											}`}
										>
											{section.tag}
										</span>
										<h3 className="font-semibold text-gray-800 mb-2">
											राष्ट्रपतिले नयाँ मन्त्रिपरिषद गठन गर्नुभयो
										</h3>
										<p className="text-gray-600 text-sm mb-3">
											राजनीतिक क्षेत्रमा नयाँ परिवर्तनको सुरुवात भएको छ...
										</p>
										<button
											type="button"
											className="text-black hover:text-gray-700 font-semibold"
										>
											पढ्नुहोस्
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			))}

			{/* Newsletter Section */}
			<section className="py-12 bg-gray-800 text-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						<div className="text-center lg:text-left">
							<h2 className="text-2xl font-bold mb-4">
								हामीबाट ताजा सूचना र जानकारी प्राप्त गर्नुहोस्
							</h2>
							<p className="text-gray-300 mb-6">
								तपाईंको इमेलमा ताजा समाचार र अपडेट प्राप्त गर्न सदस्यता लिनुहोस्
							</p>
							<button
								type="button"
								className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold"
							>
								अहिले सदस्यता लिनुहोस्
							</button>
						</div>
						<div className="flex justify-center">
							<div className="relative w-64 h-64 rounded-lg overflow-hidden">
								<Image
									src="/images/newsletter.svg"
									alt="समाचार"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-white py-12">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
						<div className="lg:col-span-2">
							<h3 className="text-2xl font-bold text-gray-800 mb-4">
								AshikaNews
							</h3>
							<p className="text-gray-600 mb-4">
								नेपालको प्रमुख समाचार वेबसाइट
								<br />
								काठमाडौं, नेपाल
								<br />
								फोन: +९७७-१-४२३४५६७
							</p>
						</div>

						<div>
							<h4 className="font-semibold text-gray-800 mb-4">समाचार</h4>
							<ul className="space-y-2 text-gray-600">
								<li>
									<a href="/" className="hover:text-red-600">
										गृह
									</a>
								</li>
								<li>
									<a href="/business" className="hover:text-red-600">
										व्यापार
									</a>
								</li>
								<li>
									<a href="/politics" className="hover:text-red-600">
										राजनीति
									</a>
								</li>
								<li>
									<a href="/sports" className="hover:text-red-600">
										खेलकुद
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold text-gray-800 mb-4">विषय</h4>
							<ul className="space-y-2 text-gray-600">
								<li>
									<a href="/entertainment" className="hover:text-red-600">
										मनोरञ्जन
									</a>
								</li>
								<li>
									<a href="/health" className="hover:text-red-600">
										स्वास्थ्य
									</a>
								</li>
								<li>
									<a href="/finance" className="hover:text-red-600">
										वित्त
									</a>
								</li>
								<li>
									<a href="/travel" className="hover:text-red-600">
										यात्रा
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold text-gray-800 mb-4">जीवन</h4>
							<ul className="space-y-2 text-gray-600">
								<li>
									<a href="/food" className="hover:text-red-600">
										खाना
									</a>
								</li>
								<li>
									<a href="/fashion" className="hover:text-red-600">
										फैशन
									</a>
								</li>
								<li>
									<a href="/readers" className="hover:text-red-600">
										पाठक
									</a>
								</li>
								<li>
									<a href="/about" className="hover:text-red-600">
										हाम्रो बारेमा
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold text-gray-800 mb-4">अन्य</h4>
							<ul className="space-y-2 text-gray-600">
								<li>
									<a href="/contact" className="hover:text-red-600">
										सम्पर्क
									</a>
								</li>
								<li>
									<a href="/privacy" className="hover:text-red-600">
										गोपनीयता नीति
									</a>
								</li>
								<li>
									<a href="/terms" className="hover:text-red-600">
										सर्तहरू र सर्तहरू
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-600 text-sm">
							कपीराइट AshikaNews २०२३। सर्वाधिकार सुरक्षित।
						</p>
						<div className="flex space-x-4 mt-4 md:mt-0">
							<a
								href="https://facebook.com"
								className="text-gray-600 hover:text-red-600"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="https://twitter.com"
								className="text-gray-600 hover:text-red-600"
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="https://instagram.com"
								className="text-gray-600 hover:text-red-600"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="https://linkedin.com"
								className="text-gray-600 hover:text-red-600"
							>
								<Linkedin className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
