<script setup lang="ts">
import { experiences } from '@/components/portfolio/portfolio';
import RevealSection from '@/components/portfolio/RevealSection.vue';
import SectionHeading from '@/components/portfolio/SectionHeading.vue';
</script>

<template>
    <section id="experience" class="relative py-20 sm:py-28">
        <div class="mx-auto max-w-5xl px-4">
            <SectionHeading
                eyebrow="Experience"
                title="A journey of building & shipping"
                description="The roles that shaped me — from first production deploy to leading engineering teams."
            />

            <div class="relative mt-14 sm:mt-16">
                <div
                    class="absolute top-0 bottom-0 left-5 w-px bg-line sm:left-1/2 sm:-translate-x-1/2"
                    aria-hidden="true"
                />

                <ol class="space-y-8 sm:space-y-0">
                    <li
                        v-for="(item, index) in experiences"
                        :key="item.role"
                        class="relative sm:grid sm:grid-cols-2 sm:py-5"
                    >
                        <span
                            class="absolute top-6 left-5 z-10 flex size-4 -translate-x-1/2 items-center justify-center rounded-full bg-surface shadow-neu-sm"
                            aria-hidden="true"
                        >
                            <span
                                class="size-1.5 rounded-full bg-primary-accent"
                            />
                        </span>

                        <div
                            class="ml-12 sm:ml-0"
                            :class="
                                index % 2 === 0
                                    ? 'sm:col-start-1 sm:pr-10'
                                    : 'sm:col-start-2 sm:pl-10'
                            "
                        >
                            <RevealSection
                                :direction="index % 2 === 0 ? 'left' : 'right'"
                                :delay="80"
                            >
                                <div
                                    class="group rounded-3xl bg-surface p-6 shadow-neu transition-all duration-300 hover:-translate-y-1 hover:shadow-neu-lg sm:p-7"
                                >
                                    <span
                                        class="inline-block rounded-full bg-surface px-3.5 py-1.5 text-xs font-semibold text-primary-accent shadow-neu-inset-sm"
                                    >
                                        {{ item.period }}
                                    </span>

                                    <h3
                                        class="mt-4 text-lg font-semibold tracking-tight"
                                    >
                                        {{ item.role }}
                                    </h3>
                                    <p
                                        class="mt-0.5 text-sm font-medium text-ink-muted"
                                    >
                                        {{ item.company }}
                                    </p>
                                    <p
                                        class="mt-3 text-sm leading-relaxed text-ink-muted"
                                    >
                                        {{ item.description }}
                                    </p>

                                    <ul class="mt-4 flex flex-wrap gap-2">
                                        <li
                                            v-for="tech in item.technologies"
                                            :key="tech"
                                            class="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-muted shadow-neu-sm transition-colors duration-300 group-hover:text-primary-accent"
                                        >
                                            {{ tech }}
                                        </li>
                                    </ul>
                                </div>
                            </RevealSection>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>
