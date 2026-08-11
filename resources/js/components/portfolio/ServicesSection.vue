<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue';
import { services } from '@/components/portfolio/portfolio';
import RevealSection from '@/components/portfolio/RevealSection.vue';
import SectionHeading from '@/components/portfolio/SectionHeading.vue';
</script>

<template>
    <section id="services" class="relative py-20 sm:py-28">
        <div class="mx-auto max-w-6xl px-4">
            <SectionHeading
                eyebrow="Services"
                title="What I can do for you"
                description="From a single page to a full platform — these are the services I bring to every engagement."
            />

            <div
                class="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                <RevealSection
                    v-for="(service, index) in services"
                    :key="service.title"
                    direction="up"
                    :delay="(index % 3) * 100"
                >
                    <div
                        class="group flex h-full flex-col rounded-[2rem] bg-surface p-7 shadow-neu transition-all duration-300 hover:-translate-y-1.5 hover:shadow-neu-lg"
                    >
                        <div class="flex items-start justify-between">
                            <span
                                class="flex size-13 items-center justify-center rounded-2xl bg-surface text-primary-accent shadow-neu-inset-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-primary-accent"
                            >
                                <component :is="service.icon" class="size-6" />
                            </span>
                            <ArrowUpRight
                                class="size-5 text-line transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-accent"
                            />
                        </div>
                        <h3 class="mt-5 text-lg font-semibold tracking-tight">
                            {{ service.title }}
                        </h3>
                        <p
                            class="mt-2 text-sm leading-relaxed text-pretty text-ink-muted"
                        >
                            {{ service.description }}
                        </p>
                    </div>
                </RevealSection>
            </div>
        </div>
    </section>
</template>
