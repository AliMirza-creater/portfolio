<script setup lang="ts">
import { ExternalLink } from '@lucide/vue';
import { computed, ref } from 'vue';
import BrandIcon from '@/components/portfolio/BrandIcon.vue';
import type { ProjectCategory } from '@/components/portfolio/portfolio';
import { projectFilters, projects } from '@/components/portfolio/portfolio';
import RevealSection from '@/components/portfolio/RevealSection.vue';
import SectionHeading from '@/components/portfolio/SectionHeading.vue';

const activeFilter = ref<'all' | ProjectCategory>('all');

const filteredProjects = computed(() =>
    activeFilter.value === 'all'
        ? projects
        : projects.filter((project) => project.category === activeFilter.value),
);

const categoryLabel: Record<ProjectCategory, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'Full Stack',
};

function openLink(url: string, event: MouseEvent) {
    if (url === '#') {
        event.preventDefault();
    }
}
</script>

<template>
    <section id="projects" class="relative py-20 sm:py-28">
        <div class="mx-auto max-w-6xl px-4">
            <SectionHeading
                eyebrow="Projects"
                title="Selected work I'm proud of"
                description="A mix of full products, focused features and experiments — each one built with care."
            />

            <RevealSection direction="up" :delay="100">
                <div
                    class="mx-auto mt-10 flex w-fit max-w-full flex-wrap justify-center gap-1.5 rounded-full bg-surface p-1.5 shadow-neu"
                    role="tablist"
                    aria-label="Filter projects"
                >
                    <button
                        v-for="filter in projectFilters"
                        :key="filter.value"
                        type="button"
                        role="tab"
                        :aria-selected="activeFilter === filter.value"
                        class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5"
                        :class="
                            activeFilter === filter.value
                                ? 'bg-surface text-primary-accent shadow-neu-inset-sm'
                                : 'text-ink-muted hover:text-ink'
                        "
                        @click="activeFilter = filter.value"
                    >
                        {{ filter.label }}
                    </button>
                </div>
            </RevealSection>

            <RevealSection direction="up" :delay="200">
                <TransitionGroup
                    tag="div"
                    name="project"
                    appear
                    class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <article
                        v-for="project in filteredProjects"
                        :key="project.title"
                        class="group flex h-full flex-col rounded-[2rem] bg-surface shadow-neu transition-shadow duration-300 hover:shadow-neu-lg"
                    >
                        <div
                            class="relative m-3 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-3xl shadow-neu-inset-sm"
                        >
                            <div
                                class="absolute inset-0 bg-gradient-to-br"
                                :class="project.gradient"
                            />
                            <component
                                :is="project.icon"
                                class="relative size-14 text-ink/35 transition-transform duration-500 group-hover:scale-110"
                            />
                            <span
                                class="absolute top-3 right-3 rounded-full bg-surface/85 px-3 py-1 text-[0.65rem] font-semibold tracking-wider text-ink uppercase shadow-neu-sm backdrop-blur-sm"
                            >
                                {{ categoryLabel[project.category] }}
                            </span>
                        </div>

                        <div
                            class="flex flex-1 flex-col p-5 pt-2 sm:p-6 sm:pt-3"
                        >
                            <h3 class="text-lg font-semibold tracking-tight">
                                {{ project.title }}
                            </h3>
                            <p
                                class="mt-2 text-sm leading-relaxed text-ink-muted"
                            >
                                {{ project.description }}
                            </p>

                            <ul class="mt-4 flex flex-wrap gap-2">
                                <li
                                    v-for="tech in project.technologies"
                                    :key="tech"
                                    class="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-muted shadow-neu-sm"
                                >
                                    {{ tech }}
                                </li>
                            </ul>

                            <div class="mt-auto flex items-center gap-3 pt-5">
                                <a
                                    :href="project.liveUrl"
                                    :target="
                                        project.liveUrl === '#'
                                            ? undefined
                                            : '_blank'
                                    "
                                    rel="noopener noreferrer"
                                    class="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary-accent px-4 py-2.5 text-sm font-semibold text-white shadow-neu-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neu-lg active:translate-y-0 active:shadow-neu-inset-sm"
                                    @click="openLink(project.liveUrl, $event)"
                                >
                                    <ExternalLink class="size-4" />
                                    Live Demo
                                </a>
                                <a
                                    :href="project.sourceUrl"
                                    :target="
                                        project.sourceUrl === '#'
                                            ? undefined
                                            : '_blank'
                                    "
                                    rel="noopener noreferrer"
                                    aria-label="View source code"
                                    class="flex size-10 items-center justify-center rounded-full bg-surface text-ink shadow-neu transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-accent hover:shadow-neu-lg active:translate-y-0 active:shadow-neu-inset-sm"
                                    @click="openLink(project.sourceUrl, $event)"
                                >
                                    <BrandIcon name="github" class="size-4.5" />
                                </a>
                            </div>
                        </div>
                    </article>
                </TransitionGroup>
            </RevealSection>
        </div>
    </section>
</template>

<style scoped>
.project-move {
    transition:
        transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
        opacity 0.5s ease;
}

.project-enter-active {
    transition:
        opacity 0.5s ease,
        transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-leave-active {
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
    position: absolute;
    width: 100%;
}

@media (min-width: 640px) {
    .project-leave-active {
        width: calc((100% - 1.5rem) / 2);
    }
}

@media (min-width: 1024px) {
    .project-leave-active {
        width: calc((100% - 3rem) / 3);
    }
}

.project-enter-from {
    opacity: 0;
    transform: scale(0.92) translateY(12px);
}

.project-leave-to {
    opacity: 0;
    transform: scale(0.92);
}
</style>
