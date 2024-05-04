<script>
	import svgIcons from '$lib/svgIcons';
  import PriceTag from '$lib/components/PriceTag.svelte';
</script>

<section class="we-do-section" id="diploma">
	<div class="auto-container">
		<div class="row clearfix">
			<div class="left-col col-lg-6 col-md-12 col-sm-12">
				<div class="inner pr-20">
					<div class="featured-block pl-0 clearfix">
						<div class="image w-100">
							<enhanced:img src="$lib/images/resource/nazee-consult-best-graduating-student.jpg" alt="nazee consult best graduating student"/>
						</div>
						<div class="text p-10">
							Meet Miss Bushra Lawal

							<span class="d-block">BEST GRADUATING STUDENT 2023/2024 COHORT</span>
						</div>
					</div>
				</div>
			</div>
			<div class="right-col col-lg-6 col-md-12 col-sm-12">
				<div class="inner">
					<div class="sec-title">
						<h2>
							Dimplma in Project <br />
							Management <span class="dot">.</span>
						</h2>
					</div>
					<div class="faq-box">
						<ul class="accordion-box clearfix">
							<li class="accordion block active-block">
								<div class="acc-btn active">
									<span class="count">1.</span> Module One <span class="chevron">{@html svgIcons.chevronDown()}</span>
								</div>
								<div class="acc-content current">
									<div class="content">
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Introduction to Project Management</span>
										</div>
										<div class="text">
											{@html svgIcons.check()}
											<span class="pl-10">Real-life Project Management solution scenarios</span>
										</div>
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Essential roles of Project managers</span>
										</div>
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Basic Project Management Tools</span>
										</div>
										<div class="text">
											{@html svgIcons.check()}
											<span class="pl-10">Project Management Methodologies (Agile, Waterfall & Hybrid)</span>
										</div>
										<div class="text">
											{@html svgIcons.check()}
											<span class="pl-10">Project Management Estimation (Duration, Cost and Resources)</span>
										</div>
									</div>
								</div>
							</li>

							<li class="accordion block">
								<div class="acc-btn">
									<span class="count">2.</span> Module Two <span class="chevron">{@html svgIcons.chevronDown()}</span>
								</div>
								<div class="acc-content">
									<div class="content">
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Project Management Life-cycle</span>
										</div>
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Building WBS (Work Breakdown Structure)</span>
										</div>
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Creating a Project Management Schedule</span>
										</div>
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Project Management Documentation</span>
										</div>
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Extensive Agile Project Management</span>
										</div>
									</div>
								</div>
							</li>

							<li class="accordion block">
								<div class="acc-btn">
									<span class="count">3.</span> Module Three <span class="chevron">{@html svgIcons.chevronDown()}</span>
								</div>
								<div class="acc-content">
									<div class="content">
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Team Building and Leadership</span>
										</div>
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Risk Assessment and Monitoring</span>
										</div>
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Communication and Stakeholder Engagement</span>
										</div>
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Budgeting and Finances in Project Management</span>
										</div>
										<div class="text">{@html svgIcons.check()} <span class="pl-10">Stakehokder Management</span></div>
									</div>
								</div>
							</li>

							<li class="accordion block">
								<div class="acc-btn">
									<span class="count">4.</span> Module Four <span class="chevron">{@html svgIcons.chevronDown()}</span>
								</div>
								<div class="acc-content">
									<div class="content">
										<div class="text">{@html svgIcons.check()} <span class="pl-10">Project Closing</span></div>
										<div class="text">
											{@html svgIcons.check()}
											<span class="pl-10">Customer Satisfaction and Lesson-Learned Register</span>
										</div>
										<div class="text">
											{@html svgIcons.check()}
											<span class="pl-10">How to land entry roles in Project Management and Interview Prep</span>
										</div>
										<div class="text">
											{@html svgIcons.check()} <span class="pl-10">Building a Project Management Portfolio</span>
										</div>
										<div class="text">
											{@html svgIcons.check()}
											<span class="pl-10">Overview of Global Certifications & Requirements</span>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div class="text-column col-12 text-center mt-50">
						<div class="inner">
							<div class="link-box d-flex justify-content-around">
								<a class="theme-btn btn-style-one" href="https://paystack.com/pay/Diplomainpm" target="_blank" referrerpolicy="no-referrer">
									<i class="btn-curve"></i> <span class="btn-title">Sign Up Now</span>
								</a>

                <PriceTag price='$200' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.we-do-section {
		.featured-block {
			min-height: auto;

			.image {
				position: relative;
			}

			.text {
				position: absolute;
				color: white;
				background: black;
				padding-left: 20px;
				margin-bottom: 10px;
				right: 0;
				bottom: 0;
				left: 0;
				top: unset;
			}
		}

		.acc-btn {
			display: flex;

			&:before {
				content: unset !important;
			}

			.count {
				margin-right: 5px;
			}

			.chevron {
				margin-left: auto;
				transition: transform 300ms ease-in-out;
			}
		}
	}

	.active-block .chevron {
		transform: rotate3D(1, 0, 0, 0.5turn);
	}

	.we-do-section {
		.image-column .image-block img {
			filter: none;
		}

		.text-column .text {
			ul li {
				padding-left: 0;

				&::before {
					content: '';
				}

				:global(svg) {
					margin-right: 10px;
				}
			}

			.since {
				float: none;
				margin-top: 0 !important;

				&::before {
					position: absolute;
					right: 13px;
					left: auto;
					top: -26px;
				}

				&::after {
					right: 100px;
					top: -32px;
					left: auto;
					height: 110px;
				}

				.txt {
					position: absolute;
					right: 0;
					top: -22px;
					font-family: var(--thm-b-font);
				}

				@media (max-width: 575px) {
					&::before {
						top: -25px;
						right: 13px;
					}

					&::after {
						top: -25px;
						right: 100px;
					}

					.txt {
						top: -20px;
						right: 0;
					}
				}

				@media (max-width: 435px) {
					&::before {
						top: -15px;
						right: 15px;
					}

					&::after {
						top: -25px;
						right: 100px;
					}

					.txt {
						top: -15px;
						right: 0;
					}
				}

				@media (max-width: 435px) and (-webkit-min-device-pixel-ratio: 2) {
					.ios & {
						&::before {
							right: 13px;
							top: -18px;
						}

						&::after {
							right: 100px;
							top: -25px;
						}

						.txt {
							right: 0;
							top: -15px;
						}
					}
				}
			}
		}
	}
</style>
