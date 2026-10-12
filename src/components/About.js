

import React, { useState } from "react";
import {
  Code2,MapPin,Mail,UtensilsCrossed,Layers,ChevronDown,ChevronUp,Sparkles,Heart,
} from "lucide-react";

import { TechStack,Features } from "../utils/constants";


function Section({ id, title, subtitle, icon: Icon, children, expanded, onToggle }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`about-content-${id}`}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
            <Icon size={24} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
              {title}
            </h2>
            <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
          </div>
        </div>

        <div className="shrink-0 rounded-full bg-gray-100 p-2 text-gray-600">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {expanded && (
        <div
          id={`about-content-${id}`}
          className="border-t border-orange-50 px-5 py-6 sm:px-6"
        >
          {children}
        </div>
      )}
    </section>
  );
}

function About() {
  const [openSections, setOpenSections] = useState({
    developer: true,
    stack: true,
    features: true,
  });

  const toggleSection = (id) => {
    setOpenSections((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero section */}
      
        <header className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 px-5 py-14 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-28 -left-12 h-64 w-64 rounded-full bg-white/10" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur">
            <UtensilsCrossed size={34} />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-100">
            Welcome to FoodFest
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Good food, made simple.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-orange-50 sm:text-lg">
            A food ordering web application built to make discovering
            restaurants, exploring menus, and managing orders a smooth
            experience.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm">
              <Code2 className="mr-2 inline" size={16} />
              Built with React
            </span>
            <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm">
              <Heart className="mr-2 inline" size={16} />
              Made with passion
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:px-6 sm:py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Get to know FoodFest
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Learn about the developer, the technologies behind the project,
            and the features you can explore.
          </p>
        </div>

        {/* 1. Developer */}
        <Section
          id="developer"
          title="Meet the Developer"
          subtitle="The person behind the project"
          icon={Code2}
          expanded={openSections.developer}
          onToggle={() => toggleSection("developer")}
        >
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-4xl font-extrabold text-white shadow-lg ring-4 ring-orange-100 md:mx-0">
              S
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                Frontend Developer
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-800">
                Sravani
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                I developed FoodFest as a project to explore React development
                and build an interactive food ordering experience. It brings
                together reusable components, state management, routing,
                forms, and responsive styling in one application.
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap">
                <span className="flex items-center gap-2">
                  <MapPin size={17} className="text-orange-500" />
                  Vizianagaram, Andhra Pradesh, India
                </span>

                <a
                  href="mailto:nalamsravani2016@gmail.com"
                  className="flex items-center gap-2 text-orange-600 transition hover:text-orange-800 hover:underline"
                >
                  <Mail size={17} />
                  nalamsravani2016@gmail.com
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Tech stack */}
        <Section
          id="stack"
          title="Technology Stack"
          subtitle="Tools and technologies used to build FoodFest"
          icon={Layers}
          expanded={openSections.stack}
          onToggle={() => toggleSection("stack")}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TechStack.map((tech) => {
              const TechIcon = tech.icon;

              return (
                <article
                  key={tech.name}
                  className="group rounded-xl border border-gray-100 bg-gray-50 p-4 transition duration-200 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50/50"
                >
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${tech.color}`}
                  >
                    <TechIcon size={23} />
                  </div>

                  <h3 className="font-bold text-gray-800">{tech.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {tech.description}
                  </p>
                </article>
              );
            })}
          </div>

          <p className="mt-5 rounded-xl bg-orange-50 p-4 text-sm leading-6 text-gray-600">
            <span className="font-semibold text-orange-700">
              How it fits together:
            </span>{" "}
            React builds the UI, React Router handles navigation, Redux Toolkit
            manages shared state, and Tailwind CSS styles the interface.
          </p>
        </Section>

        {/* 3. Features */}
        <Section
          id="features"
          title="Features of FoodFest"
          subtitle="Explore what you can do in the application"
          icon={Sparkles}
          expanded={openSections.features}
          onToggle={() => toggleSection("features")}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {Features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="flex gap-4 rounded-xl border border-orange-100 p-4 transition hover:bg-orange-50/70"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <FeatureIcon size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-6 text-amber-900">
              <span className="font-bold">Project note:</span> Login, signup,
              and order data use browser storage in this demo. Checkout
              simulates payment; it does not process a real transaction.
            </p>
          </div>
        </Section>

        {/* Footer note */}
        <div className="pt-4 text-center">
          <p className="text-sm text-gray-500">
            Crafted with <Heart className="mx-1 inline text-red-500" size={15} />{" "}
            and lots of code.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            FoodFest · A React food ordering project
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
