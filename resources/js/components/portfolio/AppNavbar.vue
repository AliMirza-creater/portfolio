<script setup lang="ts">
import { Code2, Menu, Moon, Sun, X } from '@lucide/vue';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { navLinks, profile } from '@/components/portfolio/portfolio';
import { useAppearance } from '@/composables/useAppearance';

const menuOpen = ref(false);
const activeSection = ref('home');

const { resolvedAppearance, updateAppearance } = useAppearance();

const isDark = computed(() => resolvedAppearance.value === 'dark');

function toggleTheme() {
    updateAppearance(isDark.value ? 'light' : 'dark');
}

const sectionTargets = navLinks.map((link) => link.target);

function onScroll() {
    const probe = 160;
    let current = sectionTargets[0];

    for (const target of sectionTargets) {
        const el = document.getElementById(target);

        if (el && el.getBoundingClientRect().top <= probe) {
            current = target;
        }
    }

    activeSection.value = current;
}

function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        menuOpen.value = false;
    }
}

function closeMenu() {
    menuOpen.value = false;
    document.body.style.overflow = '';
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeydown);
    onScroll();
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('keydown', onKeydown);
});

function toggleMenu() {
    menuOpen.value = !menuOpen.value;
    document.body.style.overflow = menuOpen.value ? 'hidden' : '';
}
</script>

<template>
    <header class="fixed inset-x-0 top-4 z-50 sm:top-6">
        <nav class="mx-auto w-full max-w-6xl px-4" aria-label="Primary">
            <div
                class="flex items-center justify-between gap-3 rounded-full bg-surface py-2.5 pr-2.5 pl-5 shadow-neu sm:gap-4 sm:pl-6"
            >
                <a
                    href="#home"
                    class="group flex items-center gap-3"
                    aria-label="Back to top"
                    @click="closeMenu"
                >
                    <span
                        class="flex size-9 items-center justify-center rounded-full bg-surface text-primary-accent shadow-neu-inset-sm transition-colors duration-300 group-hover:text-primary-accent"
                    >
                        <Code2 class="size-4.5" />
                    </span>
                    <span
                        class="text-sm font-semibold tracking-tight sm:text-base"
                    >
                        {{ profile.name }}
                    </span>
                </a>

                <ul class="hidden items-center gap-1 lg:flex">
                    <li v-for="link in navLinks" :key="link.target">
                        <a
                            :href="`#${link.target}`"
                            class="relative block rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300"
                            :class="
                                activeSection === link.target
                                    ? 'bg-surface text-primary-accent shadow-neu-inset-sm'
                                    : 'text-ink-muted hover:text-ink'
                            "
                        >
                            {{ link.label }}
                        </a>
                    </li>
                </ul>

                <div class="flex items-center gap-2">
                    <button
                        type="button"
                        :aria-label="
                            isDark
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        "
                        class="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-surface text-ink transition-all duration-300 hover:text-primary-accent hover:shadow-neu-sm active:scale-95 active:shadow-neu-inset-sm"
                        @click="toggleTheme"
                    >
                        <Sun
                            class="absolute size-5 transition-all duration-500"
                            :class="
                                isDark
                                    ? 'translate-y-0 rotate-0 opacity-100'
                                    : '-translate-y-6 rotate-90 opacity-0'
                            "
                        />
                        <Moon
                            class="absolute size-5 transition-all duration-500"
                            :class="
                                isDark
                                    ? 'translate-y-6 -rotate-90 opacity-0'
                                    : 'translate-y-0 rotate-0 opacity-100'
                            "
                        />
                    </button>

                    <button
                        type="button"
                        class="flex size-10 items-center justify-center rounded-full bg-surface text-ink transition-all duration-300 hover:text-primary-accent hover:shadow-neu-sm active:scale-95 active:shadow-neu-inset-sm lg:hidden"
                        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
                        :aria-expanded="menuOpen"
                        @click="toggleMenu"
                    >
                        <Transition
                            enter-active-class="transition duration-200"
                            enter-from-class="rotate-90 scale-50 opacity-0"
                            enter-to-class="rotate-0 scale-100 opacity-100"
                            leave-active-class="transition duration-150"
                            leave-from-class="opacity-100"
                            leave-to-class="rotate-90 scale-50 opacity-0"
                        >
                            <X v-if="menuOpen" class="size-5" />
                            <Menu v-else class="size-5" />
                        </Transition>
                    </button>
                </div>
            </div>
        </nav>

        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="menuOpen"
                class="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm lg:hidden"
                @click="closeMenu"
            />
        </Transition>

        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="-translate-y-3 scale-[0.98] opacity-0"
            enter-to-class="translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="translate-y-0 scale-100 opacity-100"
            leave-to-class="-translate-y-3 scale-[0.98] opacity-0"
        >
            <div
                v-if="menuOpen"
                class="fixed inset-x-4 top-20 z-50 mx-auto max-w-6xl rounded-3xl bg-surface p-4 shadow-neu-lg sm:top-24 lg:hidden"
                role="dialog"
                aria-label="Navigation menu"
            >
                <ul class="flex flex-col gap-1">
                    <li v-for="(link, index) in navLinks" :key="link.target">
                        <a
                            :href="`#${link.target}`"
                            class="flex items-center justify-between rounded-2xl px-5 py-3.5 text-base font-medium transition-all duration-300"
                            :class="
                                activeSection === link.target
                                    ? 'bg-surface text-primary-accent shadow-neu-inset-sm'
                                    : 'text-ink hover:text-primary-accent'
                            "
                            :style="{ transitionDelay: `${index * 30}ms` }"
                            @click="closeMenu"
                        >
                            {{ link.label }}
                            <span
                                class="size-1.5 rounded-full"
                                :class="
                                    activeSection === link.target
                                        ? 'bg-primary-accent'
                                        : 'bg-line'
                                "
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </Transition>
    </header>
</template>
