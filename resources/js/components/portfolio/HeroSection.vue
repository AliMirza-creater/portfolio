<script setup lang="ts">
import { ArrowRight, ChevronDown, Mail, MapPin, User } from '@lucide/vue';
import { heroTechBadges, profile } from '@/components/portfolio/portfolio';
import RevealSection from '@/components/portfolio/RevealSection.vue';

const badgePositions = [
    '-left-3 top-8 sm:-left-8',
    '-right-3 top-2 sm:-right-8',
    '-left-2 top-1/2 -translate-y-1/2 sm:-left-12',
    '-right-2 top-1/2 -translate-y-1/2 sm:-right-12',
    'left-6 -bottom-5 sm:left-0',
    '-bottom-8 right-4 sm:right-2',
];

function scrollTo(target: string) {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <section id="home" class="relative overflow-hidden">
        <div
            class="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
        >
            <div
                class="absolute -top-24 -left-24 size-96 rounded-full bg-primary-accent/10 blur-3xl"
            />
            <div
                class="absolute top-40 -right-32 size-[28rem] rounded-full bg-secondary-accent/10 blur-3xl"
            />
            <div
                class="absolute -bottom-40 left-1/3 size-96 rounded-full bg-primary-accent/5 blur-3xl"
            />
        </div>

        <div
            class="mx-auto max-w-6xl px-4 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-28"
        >
            <div class="grid items-center gap-16 lg:grid-cols-2 lg:gap-10">
                <div>
                    <RevealSection direction="up">
                        <div
                            class="inline-flex items-center gap-2.5 rounded-full bg-surface px-4 py-2 text-sm font-medium shadow-neu-sm"
                        >
                            <span class="relative flex size-2.5">
                                <span
                                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                                />
                                <span
                                    class="relative inline-flex size-2.5 rounded-full bg-emerald-500"
                                />
                            </span>
                            Available for work
                        </div>
                    </RevealSection>

                    <RevealSection direction="up" :delay="120">
                        <h1
                            class="mt-6 text-4xl leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
                        >
                            <span
                                class="block text-lg font-normal text-ink-muted sm:text-xl"
                            >
                                Hi, I'm
                            </span>
                            <span
                                class="mt-2 block bg-gradient-to-r from-primary-accent via-primary-accent to-secondary-accent bg-clip-text font-semibold text-transparent"
                            >
                                {{ profile.name }}
                            </span>
                            <span
                                class="mt-3 block text-2xl font-medium sm:text-3xl"
                            >
                                {{ profile.role
                                }}<span class="text-primary-accent">.</span>
                            </span>
                        </h1>
                    </RevealSection>

                    <RevealSection direction="up" :delay="240">
                        <p
                            class="mt-6 max-w-xl text-base leading-relaxed text-pretty text-ink-muted sm:text-lg"
                        >
                            {{ profile.tagline }} I turn ideas into reliable,
                            polished products that people love to use — built
                            with clean code, thoughtful design and a keen eye
                            for detail.
                        </p>
                    </RevealSection>

                    <RevealSection direction="up" :delay="360">
                        <div
                            class="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
                        >
                            <button
                                type="button"
                                class="group inline-flex items-center gap-2 rounded-full bg-primary-accent px-6 py-3.5 text-sm font-semibold text-white shadow-neu-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neu-lg active:translate-y-0 active:shadow-neu-inset-sm sm:text-base"
                                @click="scrollTo('projects')"
                            >
                                View My Work
                                <ArrowRight
                                    class="size-4.5 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                            <button
                                type="button"
                                class="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-3.5 text-sm font-semibold text-ink shadow-neu transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-accent hover:shadow-neu-lg active:translate-y-0 active:shadow-neu-inset-sm sm:text-base"
                                @click="scrollTo('contact')"
                            >
                                <Mail class="size-4.5" />
                                Contact Me
                            </button>
                        </div>
                    </RevealSection>

                    <RevealSection direction="up" :delay="480">
                        <div
                            class="mt-8 flex items-center gap-2 text-sm text-ink-muted"
                        >
                            <MapPin class="size-4 text-primary-accent" />
                            Based in {{ profile.location }}
                        </div>
                    </RevealSection>
                </div>

                <RevealSection
                    direction="up"
                    :delay="300"
                    class="relative mx-auto w-fit lg:justify-self-center"
                >
                    <div class="relative p-8 sm:p-12">
                        <div
                            class="absolute inset-4 -z-10 rounded-full bg-primary-accent/15 blur-3xl"
                            aria-hidden="true"
                        />
                        <div
                            class="absolute -inset-3 rounded-full border border-line/70 sm:-inset-5"
                            aria-hidden="true"
                        />
                        <div
                            class="absolute -inset-9 animate-spin-slow rounded-full border border-dashed border-line sm:-inset-12"
                            aria-hidden="true"
                        />

                        <div
                            class="relative flex size-64 items-center justify-center rounded-full bg-surface shadow-neu-lg sm:size-80 lg:size-96"
                        >
                            <div
                                class="absolute inset-3 rounded-full shadow-neu-inset-sm"
                                aria-hidden="true"
                            />
                            <div
                                class="relative flex size-44 items-center justify-center rounded-full bg-gradient-to-br from-surface-soft to-surface-deep shadow-neu-inset sm:size-60 lg:size-72"
                            >
                                <span
                                    class="absolute inset-2 rounded-full bg-gradient-to-br from-primary-accent-soft/80 to-secondary-accent/15"
                                    aria-hidden="true"
                                />
                                <User
                                    class="relative size-16 text-primary-accent/60 sm:size-20"
                                />
                                <span
                                    class="absolute inset-8 rounded-full border border-white/40"
                                    aria-hidden="true"
                                />
                            </div>

                            <div
                                v-for="(badge, index) in heroTechBadges"
                                :key="badge.label"
                                class="absolute flex animate-float items-center gap-2 rounded-2xl bg-surface px-3 py-2 text-xs font-semibold shadow-neu-sm"
                                :class="
                                    badgePositions[
                                        index % badgePositions.length
                                    ]
                                "
                                :style="{ animationDelay: `${index * 0.7}s` }"
                            >
                                <component
                                    :is="badge.icon"
                                    class="size-3.5 text-primary-accent"
                                />
                                {{ badge.label }}
                            </div>

                            <span
                                class="absolute -top-1 -right-2 size-3 rounded-full bg-secondary-accent shadow-neu-sm"
                                aria-hidden="true"
                            />
                            <span
                                class="absolute top-1/4 -left-4 size-2 rounded-full bg-primary-accent/70 shadow-neu-sm"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </RevealSection>
            </div>
        </div>

        <div
            class="flex flex-col items-center gap-2 pb-8 text-[0.65rem] font-semibold tracking-[0.25em] text-ink-muted uppercase"
        >
            Scroll
            <span
                class="flex size-9 animate-float items-center justify-center rounded-full bg-surface text-primary-accent shadow-neu-sm"
            >
                <ChevronDown class="size-4" />
            </span>
        </div>
    </section>
</template>
