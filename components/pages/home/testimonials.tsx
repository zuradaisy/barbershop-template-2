"use client";

import { useState } from "react";
import { LuArrowLeft, LuArrowRight, LuStar } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";
import { testimonials, testimonialsUi } from "@/content/testimonials";

export function Testimonials() {
  const { testimonials: testiContent } = home;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  function showPrevious() {
    setActiveIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length,
    );
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  }

  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          kicker={testiContent.kicker}
          title={testiContent.title}
        />

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:mt-10 sm:gap-8">
          <button
            type="button"
            onClick={showPrevious}
            aria-label={testimonialsUi.previousLabel}
            className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:size-10"
          >
            <LuArrowLeft aria-hidden="true" className="size-5 sm:size-6" />
          </button>

          <div className="text-center">
            {activeTestimonial.rating ? (
              <div
                role="img"
                aria-label={`${activeTestimonial.rating} dari 5 bintang`}
                className="mb-4 flex justify-center gap-1 text-accent"
              >
                {Array.from(
                  { length: activeTestimonial.rating },
                  (_, index) => (
                    <LuStar
                      key={index}
                      aria-hidden="true"
                      className="size-4 fill-current"
                    />
                  ),
                )}
              </div>
            ) : null}
            <blockquote
              key={activeTestimonial.id}
              className="mx-auto max-w-3xl text-base leading-relaxed font-semibold text-foreground sm:text-lg lg:text-xl"
            >
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-5 text-sm text-muted-foreground">
              <p className="text-base font-semibold text-foreground">
                {activeTestimonial.name}
              </p>
              <p className="mt-1">{activeTestimonial.role}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label={testimonialsUi.nextLabel}
            className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:size-10"
          >
            <LuArrowRight aria-hidden="true" className="size-5 sm:size-6" />
          </button>
        </div>

        <div
          className="mt-6 flex justify-center gap-2"
          role="group"
          aria-label={testimonialsUi.paginationLabel}
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              aria-label={`${testimonialsUi.paginationLabel} ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full ${index === activeIndex ? "w-6 bg-accent" : "w-2 bg-muted-foreground/35 hover:bg-muted-foreground/60"}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
