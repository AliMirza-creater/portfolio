<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import AboutSection from '@/components/portfolio/AboutSection.vue';
import AppNavbar from '@/components/portfolio/AppNavbar.vue';
import BackToTop from '@/components/portfolio/BackToTop.vue';
import ContactSection from '@/components/portfolio/ContactSection.vue';
import ExperienceSection from '@/components/portfolio/ExperienceSection.vue';
import FooterSection from '@/components/portfolio/FooterSection.vue';
import HeroSection from '@/components/portfolio/HeroSection.vue';
import LoadingScreen from '@/components/portfolio/LoadingScreen.vue';
import { profile } from '@/components/portfolio/portfolio';
import ProjectsSection from '@/components/portfolio/ProjectsSection.vue';
import ServicesSection from '@/components/portfolio/ServicesSection.vue';
import SkillsSection from '@/components/portfolio/SkillsSection.vue';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection.vue';

const loading = ref(true);

onMounted(() => {
    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
    ).matches;

    window.setTimeout(
        () => {
            loading.value = false;
        },
        reduceMotion ? 150 : 1900,
    );
});
</script>

<template>
    <Head :title="`${profile.name} — ${profile.role}`">
        <meta
            name="description"
            :content="`${profile.name} — ${profile.role}. ${profile.tagline}`"
        />
        <meta name="theme-color" content="#e7eaf0" />
    </Head>

    <div
        class="min-h-screen overflow-x-clip bg-surface font-sans text-ink antialiased"
    >
        <Transition name="loader">
            <LoadingScreen v-if="loading" />
        </Transition>

        <div
            :class="loading ? 'opacity-0' : 'opacity-100'"
            :aria-hidden="loading || undefined"
            class="transition-opacity duration-700 ease-out"
        >
            <AppNavbar />

            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ServicesSection />
                <ProjectsSection />
                <ExperienceSection />
                <TestimonialsSection />
                <ContactSection />
            </main>

            <FooterSection />

            <BackToTop />
        </div>
    </div>
</template>

<style scoped>
.loader-leave-active {
    transition:
        opacity 0.5s ease,
        transform 0.5s ease;
}

.loader-leave-to {
    opacity: 0;
    transform: scale(1.03);
}
</style>
