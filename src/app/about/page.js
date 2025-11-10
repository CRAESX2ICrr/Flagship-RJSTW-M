export default function AboutPage() {
	return (
		<main className="min-h-screen py-12  text-gray-100">

					<section className="w-full max-w-2xl mx-auto text-center">
						<header className="mb-6">
							<h1 className="text-4xl font-bold text-white mb-2">About Flagship</h1>
							<p className="text-gray-300 mx-auto">A small demo site showcasing flagship phones, from each major company.</p>
						</header>

				<article className="space-y-8">

										<div className="mx-auto max-w-xl bg-white/3 border border-white/6 rounded-2xl p-4">
											<h3 className="text-xl font-semibold text-white mb-2">How to explore</h3>
											<p className="text-gray-300 leading-relaxed">
												Start on the Home page and scroll to see the latest phones, features and updates from various brands.
                                                explore the brands page to see the exact brands and phones on offer in the current year 
                                                <br />
											</p>
											<ul className="text-gray-300 list-disc list-inside mt-3">
												<li>Hover a brand card to reveal the phone preview on the right.</li>
												<li>Resize the window to see the responsive grid change from 1 - 2 - 3 columns.</li>
												<li>Click on the phone to take you to view the product more in depth.</li>
											</ul>
										</div>

										<div className="mx-auto max-w-xl bg-white/3 border border-white/6 rounded-2xl p-4 text-left">
											<h3 className="text-xl font-semibold text-white mb-2">Tech & notes</h3>
											<p className="text-gray-300">
												Stack: App is developed using React, Next.js (App Router), TailwindCSS, JavaScript. Data is backed by MongoDB (Mongoose)
											</p>
											<p className="text-gray-300 mt-3">
												Visuals: the ColorBends shader now uses a reduced noise value (~0.08) and tuned warp/frequency for subtle, realistic
												bands. The canvas renders opaque so colors sit on a dark base. the color palette of the rings was matched to the websites look and feel 
											</p>
											<p className="text-gray-300 mt-3">Key files: <code>src/app/layout.js</code>, <code>src/components/ColorBends.jsx</code>, <code>src/app/brands/page.js</code>, and <code>public/</code> for assets.</p>
										</div>

					<div className="mx-auto max-w-xl">
						<h3 className="text-xl font-semibold text-white mb-3">What we value</h3>
						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<li className="bg-white/3 border border-white/6 rounded-lg p-4">
								<strong className="block text-white">Design-driven</strong>
								<div className="text-gray-300 text-sm">Care about details, motion and clarity.</div>
							</li>
							<li className="bg-white/3 border border-white/6 rounded-lg p-4">
								<strong className="block text-white">Performance</strong>
								<div className="text-gray-300 text-sm">Optimized assets, smooth rendering and sensible defaults.</div>
							</li>
							<li className="bg-white/3 border border-white/6 rounded-lg p-4">
								<strong className="block text-white">Accessibility</strong>
								<div className="text-gray-300 text-sm">Inclusive by default.</div>
							</li>
							<li className="bg-white/3 border border-white/6 rounded-lg p-4">
								<strong className="block text-white">Maintained</strong>
								<div className="text-gray-300 text-sm">iterate quickly and efficiently.</div>
							</li>
						</ul>
					</div>

								<div>
									<h3 className="text-xl font-semibold text-white mb-3">About me</h3>
									<div className="mx-auto max-w-md bg-white/3 border border-white/6 rounded-2xl p-6 flex flex-col items-center gap-3">
										<div className="w-16 h-16 rounded-full bg-white/6 flex items-center justify-center font-semibold text-white text-lg">CP</div>
										<div className="text-white font-medium text-lg">Clayton Pereira</div>
										<div className="text-gray-300 text-sm">Creator of Flagship</div>
										<p className="text-gray-300 text-center mt-2">I build UI experiments, visuals, and components focused on clarity, motion and performance.</p>
										<a className="mt-3 text-white underline" href="mailto:hello@crsclayton@gmail.com">crsclayton@gmail.com</a>
									</div>
								</div>

				</article>
			</section>
		</main>
	);
}

