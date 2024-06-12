// HomePage.js
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Check, Mountain } from "lucide-react"
import "./Home.css"

export function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#1E3A8A] text-gray-50 px-4 lg:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 animate-bounce" />
          <span className="text-xl font-bold animate-fadeIn">Nazee Consult</span>
        </a>
        <nav
          className={`flex flex-col gap-4 lg:flex-row lg:gap-4 ${
            isNavOpen
              ? "fixed top-0 left-0 w-full h-full bg-[#1E3A8A] z-10 p-6 pt-20 transition-all duration-300 ease-in-out"
              : "hidden lg:flex"
          }`}
        >
          <a href="#what-is-project-management" className="hover:underline underline-offset-4 transition-colors duration-300 ease-in-out animate-fadeIn">
            What is Project Management?
          </a>
          <a href="#who-are-project-managers" className="hover:underline underline-offset-4 transition-colors duration-300 ease-in-out animate-fadeIn">
            Who Are Project Managers?
          </a>
          <a href="#about-nazee" className="hover:underline underline-offset-4 transition-colors duration-300 ease-in-out animate-fadeIn">
            About Nazee Consult
          </a>
          <a href="#featured-products" className="hover:underline underline-offset-4 transition-colors duration-300 ease-in-out animate-fadeIn">
            Featured Products
          </a>
          <a href="#testimonials" className="hover:underline underline-offset-4 transition-colors duration-300 ease-in-out animate-fadeIn">
            Testimonials
          </a>
          <a href="#" className="hover:underline underline-offset-4 transition-colors duration-300 ease-in-out animate-fadeIn">
            Services
          </a>
          <Button variant="outline" className="lg:hidden animate-fadeIn" onClick={() => setIsNavOpen(false)}>
            Close
          </Button>
        </nav>
        <Button variant="outline" className="lg:hidden animate-fadeIn" onClick={() => setIsNavOpen(true)} aria-label="Open menu">
          Menu
        </Button>
        <Button variant="outline" className="hidden lg:flex animate-fadeIn">
          Contact Us
        </Button>
      </header>
      <main className="flex-1 relative">
        <section className="w-full h-[80vh] bg-[url('/hero-image.jpg')] bg-cover bg-center flex items-center justify-center parallax">
          <div className="text-center space-y-4 text-gray-50 animate-fadeIn">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Unlock the Power of Project Management</h1>
            <p className="max-w-[700px] mx-auto text-xl">
              Transform your ideas into reality with Nazee Consult's expert guidance.
            </p>
            <div className="flex justify-center gap-4 animate-fadeIn">
              <Button variant="solid" className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-gray-50">
                Get Started
              </Button>
              <Button variant="outline" className="text-gray-50 border-gray-50 hover:bg-gray-50 hover:text-[#1E3A8A]">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section id="what-is-project-management" className="py-12 md:py-24 lg:py-32 bg-[#4F46E5] text-gray-50 parallax">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="text-center space-y-4 animate-fadeIn">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What is Project Management?</h2>
              <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl">
                Project management is the art and science of transforming ideas into reality. At its core, project
                management is a roadmap that guides a project from start to finish, ensuring it stays on track, on time,
                and within budget. It provides the structure and direction needed to coordinate efforts, manage
                resources, lead teams, solve problems, and achieve goals.
              </p>
              <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl">
                Without project management, even the simplest tasks can become chaotic. Everything would be disorganized
                and inefficient.
              </p>
            </div>
          </div>
        </section>
        <section id="who-are-project-managers" className="py-12 md:py-24 lg:py-32 bg-[#0EA5E9] parallax">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="text-center space-y-4 animate-fadeIn">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-50">
                Who Are Project Managers?
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl">
                Project managers are the driving force behind successful projects. They are skilled professionals who
                ensure that projects run smoothly from inception to completion. Their unique blend of skills and
                abilities makes them essential to any project's success, PMI says that without project managers over 70%
                of endeavors are likely to crash, this makes this skill and profession extremely relevant in every
                industry and field.
              </p>
              <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl">
                Are you ready to embark on your project management journey? Our platform is designed to make learning
                project management engaging, practical, and fun. We ensure that you get all the right resources you need
                to become highly skilled and efficient in this profession.
              </p>
            </div>
          </div>
        </section>
        <section id="about-nazee" className="py-12 md:py-24 lg:py-32 bg-[#4F46E5] text-gray-50 parallax">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="text-center space-y-4 animate-fadeIn">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Nazee Consult</h2>
              <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl">
                Nazee Consult is a leading project management consulting firm that has been helping organizations and
                individuals achieve their goals for over a decade. Our team of experienced professionals is dedicated to
                providing innovative solutions and personalized support to our clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
              <div className="bg-[#0EA5E9] rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-bold">Our Milestones</h3>
                <ul className="space-y-2 text-gray-50">
                  <li>
                    <div className="flex items-center gap-2">
                    
                      <Check className="h-4 w-4 text-[#4F46E5] animate-bounce" />
                      <span>Established in 2010</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#4F46E5] animate-bounce" />
                      <span>Served over 500 clients worldwide</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#4F46E5] animate-bounce" />
                      <span>Trained over 10,000 project managers</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#4F46E5] animate-bounce" />
                      <span>Awarded for excellence in project management</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-[#0EA5E9] rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-bold">Our Vision, Mission, and Values</h3>
                <div className="space-y-2 text-gray-50">
                  <div>
                    <h4 className="font-bold">Vision:</h4>
                    <p>
                      To be the premier provider of project management solutions and services, empowering organizations
                      and individuals to achieve their goals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Mission:</h4>
                    <p>
                      To deliver innovative and tailored project management solutions that drive success, foster
                      collaboration, and create lasting impact.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Values:</h4>
                    <ul className="space-y-1">
                      <li>Integrity</li>
                      <li>Excellence</li>
                      <li>Collaboration</li>
                      <li>Innovation</li>
                      <li>Client-centricity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="featured-products" className="py-12 md:py-24 lg:py-32 bg-[#0EA5E9] parallax">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="text-center space-y-4 animate-fadeIn">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-50">Featured Products</h2>
              <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl">
                Nazee Consult offers a range of project management solutions to help organizations and individuals
                achieve their goals. Our flagship product, "Our Book", is a comprehensive guide to effective project
                management.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
              <div className="bg-[#1E3A8A] rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="120"
                    height="180"
                    alt="Our Book Cover"
                    className="rounded-lg animate-pulse"
                  />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Our Book</h3>
                    <p className="text-gray-50">
                      A comprehensive guide to effective project management, covering topics such as planning,
                      execution, and risk management.
                    </p>
                    <a
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#4F46E5]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4F46E5] disabled:pointer-events-none disabled:opacity-50 animate-bounce"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#1E3A8A] rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-50">Other Products</h3>
                <ul className="space-y-2 text-gray-50">
                  <li>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#0EA5E9] animate-bounce" />
                      <span>Project Management Workshops</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#0EA5E9] animate-bounce" />
                      <span>Project Management Consulting Services</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#0EA5E9] animate-bounce" />
                      <span>Project Management Software Solutions</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#0EA5E9] animate-bounce" />
                      <span>Project Management Certification Programs</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-[#4F46E5] text-gray-50 parallax">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="text-center space-y-4 animate-fadeIn">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl">
                Our clients have experienced the benefits of our project management solutions firsthand. Here's what
                they have to say:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                  <div className="bg-[#0EA5E9] rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="Sofia Davis" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">Sofia Davis</h4>
                    <p className="text-gray-200">CEO, Acme Inc.</p>
                  </div>
                </div>
                <p className="text-gray-50">
                  "Nazee Consult's project management expertise has been invaluable to our organization. Their team's
                  guidance and support have helped us deliver complex projects on time and within budget."
                </p>
              </div>
              <div className="bg-[#0EA5E9] rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="John Smith" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">John Smith</h4>
                    <p className="text-gray-200">Project Manager, TechCo</p>
                  </div>
                </div>
                <p className="text-gray-50">
                  "The insights from Nazee Consult's book have transformed our project management approach. Their practical advice has made a significant impact on our team's efficiency."
                </p>
              </div>
              <div className="bg-[#0EA5E9] rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="Emily Wong" />
                    <AvatarFallback>EW</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">Emily Wong</h4>
                    <p className="text-gray-200">Startup Founder, GreenTech</p>
                  </div>
                </div>
                <p className="text-gray-50">
                  "As a startup, we needed a solid foundation in project management. Nazee Consult's workshops were a game-changer. They've given us the tools to scale effectively."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1E3A8A] text-gray-50 px-4 lg:px-6 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; 2024 Nazee Consult. All rights reserved.</p>
          <nav className="flex gap-4">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Terms of Service</a>
            <a href="#" className="text-sm hover:underline">Contact Us</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
