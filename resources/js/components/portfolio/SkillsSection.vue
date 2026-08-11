<script setup lang="ts">
import { skillCategories } from '@/components/portfolio/portfolio';
import RevealSection from '@/components/portfolio/RevealSection.vue';
import SectionHeading from '@/components/portfolio/SectionHeading.vue';
</script>

<template>
    <section id="skills" class="relative py-20 sm:py-28">
        <div class="mx-auto max-w-6xl px-4">
            <SectionHeading
                eyebrow="Skills"
                title="A toolkit built for modern web development"
                description="The technologies I reach for most often — organised by the layer of the stack they belong to."
            />

            <div class="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-2">
                <RevealSection
                    v-for="(category, index) in skillCategories"
                    :key="category.title"
                    direction="up"
                    :delay="(index % 2) * 120"
                >
                    <div
                        class="h-full rounded-[2rem] bg-surface p-6 shadow-neu transition-shadow duration-300 hover:shadow-neu-lg sm:p-8"
                    >
                        <div class="flex items-start gap-4">
                            <span
                                class="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-surface text-primary-accent shadow-neu-inset-sm"
                            >
                                <component :is="category.icon" class="size-6" />
                            </span>
                            <div>
                                <h3
                                    class="text-xl font-semibold tracking-tight"
                                >
                                    {{ category.title }}
                                </h3>
                                <p
                                    class="mt-1 text-sm leading-relaxed text-ink-muted"
                                >
                                    {{ category.description }}
                                </p>
                            </div>
                        </div>

                        <ul class="mt-6 grid gap-3 sm:grid-cols-2">
                            <li
                                v-for="skill in category.skills"
                                :key="skill.name"
                            >
                                <div
                                    class="group flex h-full flex-col gap-2.5 rounded-2xl bg-surface p-4 shadow-neu-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-neu"
                                >
                                    <div class="flex items-center gap-2.5">
                                        <span
                                            class="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface text-primary-accent shadow-neu-inset-sm transition-transform duration-300 group-hover:scale-105"
                                        >
                                            <component
                                                :is="skill.icon"
                                                class="size-4"
                                            />
                                        </span>
                                        <p class="text-sm font-semibold">
                                            {{ skill.name }}
                                        </p>
                                    </div>
                                    <p
                                        class="text-xs leading-relaxed text-ink-muted"
                                    >
                                        {{ skill.description }}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </RevealSection>
            </div>
        </div>
    </section>
</template>
