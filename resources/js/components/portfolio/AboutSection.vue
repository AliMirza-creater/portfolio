<script setup lang="ts">
import { CheckCircle2, GraduationCap, Briefcase, User } from '@lucide/vue';
import CountUp from '@/components/portfolio/CountUp.vue';
import {
    expertiseHighlights,
    profile,
    stats,
} from '@/components/portfolio/portfolio';
import RevealSection from '@/components/portfolio/RevealSection.vue';
import SectionHeading from '@/components/portfolio/SectionHeading.vue';
</script>

<template>
    <section id="about" class="relative py-20 sm:py-28">
        <div class="mx-auto max-w-6xl px-4">
            <SectionHeading
                eyebrow="About Me"
                title="Turning complex problems into elegant, reliable software."
                description="A short introduction to who I am, what I do and how I work."
            />

            <div
                class="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
            >
                <div>
                    <RevealSection direction="left">
                        <div
                            class="rounded-[2rem] bg-surface p-5 shadow-neu-lg"
                        >
                            <div
                                class="relative flex aspect-[4/4.4] items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-surface-soft to-surface-deep shadow-neu-inset-sm"
                            >
                                <span
                                    class="absolute inset-0 bg-gradient-to-br from-primary-accent-soft/70 to-secondary-accent/10"
                                    aria-hidden="true"
                                />
                                <User
                                    class="relative size-24 text-primary-accent/50 sm:size-28"
                                />
                                <div
                                    class="absolute inset-x-4 bottom-4 rounded-2xl bg-surface/80 px-4 py-3 text-center shadow-neu-sm backdrop-blur-sm"
                                >
                                    <p class="text-sm font-semibold">
                                        {{ profile.name }}
                                    </p>
                                    <p class="text-xs text-ink-muted">
                                        {{ profile.role }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealSection>

                    <div class="mt-6 grid grid-cols-2 gap-5">
                        <RevealSection direction="up" :delay="120">
                            <div
                                class="flex h-full flex-col gap-3 rounded-3xl bg-surface p-5 shadow-neu transition-all duration-300 hover:-translate-y-1 hover:shadow-neu-lg"
                            >
                                <span
                                    class="flex size-11 items-center justify-center rounded-2xl bg-surface text-primary-accent shadow-neu-inset-sm"
                                >
                                    <GraduationCap class="size-5" />
                                </span>
                                <div>
                                    <p class="text-sm font-semibold">
                                        Education
                                    </p>
                                    <p
                                        class="mt-1 text-xs leading-relaxed text-ink-muted"
                                    >
                                        B.Sc. in Computer Science, [YOUR
                                        UNIVERSITY]
                                    </p>
                                </div>
                            </div>
                        </RevealSection>
                        <RevealSection direction="up" :delay="240">
                            <div
                                class="flex h-full flex-col gap-3 rounded-3xl bg-surface p-5 shadow-neu transition-all duration-300 hover:-translate-y-1 hover:shadow-neu-lg"
                            >
                                <span
                                    class="flex size-11 items-center justify-center rounded-2xl bg-surface text-primary-accent shadow-neu-inset-sm"
                                >
                                    <Briefcase class="size-5" />
                                </span>
                                <div>
                                    <p class="text-sm font-semibold">
                                        Experience
                                    </p>
                                    <p
                                        class="mt-1 text-xs leading-relaxed text-ink-muted"
                                    >
                                        8+ years across agencies, startups and
                                        product teams
                                    </p>
                                </div>
                            </div>
                        </RevealSection>
                    </div>
                </div>

                <div>
                    <RevealSection direction="right">
                        <h3
                            class="text-2xl font-semibold tracking-tight sm:text-3xl"
                        >
                            A developer who cares about the whole product
                        </h3>
                        <div
                            class="mt-5 space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg"
                        >
                            <p>
                                [YOUR BIO] I'm a {{ profile.role }} who enjoys
                                working across the entire stack — from database
                                schema and API design to pixel-perfect
                                interfaces and deployment.
                            </p>
                            <p>
                                I care about maintainable code, measurable
                                performance and honest communication. Every
                                project gets the same treatment: a clear plan,
                                careful execution and quality I'm proud to ship.
                            </p>
                        </div>
                    </RevealSection>

                    <RevealSection direction="right" :delay="150">
                        <ul class="mt-7 grid gap-3 sm:grid-cols-2">
                            <li
                                v-for="highlight in expertiseHighlights"
                                :key="highlight"
                                class="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3.5 text-sm font-medium shadow-neu-sm"
                            >
                                <CheckCircle2
                                    class="size-4.5 shrink-0 text-primary-accent"
                                />
                                {{ highlight }}
                            </li>
                        </ul>
                    </RevealSection>

                    <RevealSection direction="right" :delay="300">
                        <div
                            class="mt-8 flex flex-col gap-4 rounded-3xl bg-surface p-6 shadow-neu sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <p
                                    class="text-xs font-semibold tracking-widest text-ink-muted uppercase"
                                >
                                    Based in
                                </p>
                                <p class="mt-1 text-base font-semibold">
                                    {{ profile.location }}
                                </p>
                            </div>
                            <a
                                href="mailto:hello@example.com"
                                class="inline-flex w-fit items-center rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-primary-accent shadow-neu-sm transition-all duration-300 hover:shadow-neu-lg active:shadow-neu-inset-sm"
                            >
                                {{ profile.email }}
                            </a>
                        </div>
                    </RevealSection>
                </div>
            </div>

            <div class="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                <RevealSection
                    v-for="(stat, index) in stats"
                    :key="stat.label"
                    direction="up"
                    :delay="index * 100"
                >
                    <div
                        class="group rounded-3xl bg-surface px-4 py-8 text-center shadow-neu transition-all duration-300 hover:-translate-y-1.5 hover:shadow-neu-lg"
                    >
                        <p
                            class="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl"
                        >
                            <CountUp
                                :value="stat.value"
                                :suffix="stat.suffix"
                            />
                        </p>
                        <p class="mt-2 text-sm font-medium text-ink-muted">
                            {{ stat.label }}
                        </p>
                    </div>
                </RevealSection>
            </div>
        </div>
    </section>
</template>
