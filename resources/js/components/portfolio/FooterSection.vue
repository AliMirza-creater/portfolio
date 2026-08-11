<script setup lang="ts">
import { ArrowUp, Code2, Heart, Mail } from '@lucide/vue';
import BrandIcon from '@/components/portfolio/BrandIcon.vue';
import { navLinks, profile } from '@/components/portfolio/portfolio';

const socials: Array<{
    label: string;
    href: string;
    brand?: 'github' | 'linkedin' | 'twitter';
    icon?: typeof Mail;
}> = [
    { label: 'GitHub', href: profile.github, brand: 'github' },
    { label: 'LinkedIn', href: profile.linkedin, brand: 'linkedin' },
    { label: 'Twitter', href: profile.twitter, brand: 'twitter' },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

const year = new Date().getFullYear();

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
    <footer class="relative mt-8 pb-10 sm:mt-12">
        <div class="mx-auto max-w-6xl px-4">
            <div
                class="rounded-[2rem] bg-surface px-6 py-10 shadow-neu sm:px-10"
            >
                <div
                    class="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between"
                >
                    <div class="text-center md:text-left">
                        <a
                            href="#home"
                            class="group inline-flex items-center gap-3"
                            @click.prevent="scrollToTop"
                        >
                            <span
                                class="flex size-10 items-center justify-center rounded-full bg-surface text-primary-accent shadow-neu-inset-sm"
                            >
                                <Code2 class="size-5" />
                            </span>
                            <span class="text-lg font-semibold tracking-tight">
                                {{ profile.name }}
                            </span>
                        </a>
                        <p
                            class="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted"
                        >
                            {{ profile.role }} crafting modern, scalable web
                            applications.
                        </p>
                    </div>

                    <nav aria-label="Footer">
                        <ul
                            class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end"
                        >
                            <li v-for="link in navLinks" :key="link.target">
                                <a
                                    :href="`#${link.target}`"
                                    class="text-sm text-ink-muted transition-colors duration-300 hover:text-primary-accent"
                                >
                                    {{ link.label }}
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div class="flex items-center gap-3">
                        <a
                            v-for="social in socials"
                            :key="social.label"
                            :href="social.href"
                            :target="
                                social.href.startsWith('http')
                                    ? '_blank'
                                    : undefined
                            "
                            rel="noopener noreferrer"
                            :aria-label="social.label"
                            class="flex size-10 items-center justify-center rounded-full bg-surface text-ink shadow-neu-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-accent hover:shadow-neu active:shadow-neu-inset-sm"
                        >
                            <BrandIcon
                                v-if="social.brand"
                                :name="social.brand"
                                class="size-4"
                            />
                            <component
                                v-else
                                :is="social.icon"
                                class="size-4"
                            />
                        </a>
                    </div>
                </div>

                <div
                    class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row"
                >
                    <p class="text-xs text-ink-muted">
                        © {{ year }} {{ profile.name }}. All rights reserved.
                    </p>
                    <p class="flex items-center gap-1.5 text-xs text-ink-muted">
                        Built with
                        <Heart
                            class="size-3.5 fill-primary-accent text-primary-accent"
                        />
                        using Vue & Laravel
                    </p>
                    <button
                        type="button"
                        aria-label="Back to top"
                        class="flex size-9 items-center justify-center rounded-full bg-surface text-ink shadow-neu-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-accent hover:shadow-neu active:shadow-neu-inset-sm"
                        @click="scrollToTop"
                    >
                        <ArrowUp class="size-4" />
                    </button>
                </div>
            </div>
        </div>
    </footer>
</template>
