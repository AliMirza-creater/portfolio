<script setup lang="ts">
import { ChevronLeft, ChevronRight, Quote, Star, User } from '@lucide/vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { testimonials } from '@/components/portfolio/portfolio';
import RevealSection from '@/components/portfolio/RevealSection.vue';
import SectionHeading from '@/components/portfolio/SectionHeading.vue';

const current = ref(0);
let timer: number | undefined;

function goTo(index: number) {
    current.value = (index + testimonials.length) % testimonials.length;
}

function next() {
    goTo(current.value + 1);
}

function prev() {
    goTo(current.value - 1);
}

function startAuto() {
    stopAuto();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    timer = window.setInterval(next, 6000);
}

function stopAuto() {
    if (timer !== undefined) {
        window.clearInterval(timer);
        timer = undefined;
    }
}

onMounted(startAuto);
onBeforeUnmount(stopAuto);
</script>

<template>
    <section id="testimonials" class="relative py-20 sm:py-28">
        <div class="mx-auto max-w-5xl px-4">
            <SectionHeading
                eyebrow="Testimonials"
                title="Kind words from people I've worked with"
                description="A few things colleagues and clients have said along the way."
            />

            <RevealSection direction="up" :delay="150">
                <div
                    class="relative mt-14 sm:mt-16"
                    @mouseenter="stopAuto"
                    @mouseleave="startAuto"
                >
                    <button
                        type="button"
                        aria-label="Previous testimonial"
                        class="absolute top-1/2 -left-2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-ink shadow-neu transition-all duration-300 hover:text-primary-accent hover:shadow-neu-lg active:scale-95 active:shadow-neu-inset-sm sm:-left-6 sm:flex lg:-left-14"
                        @click="prev"
                    >
                        <ChevronLeft class="size-5" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next testimonial"
                        class="absolute top-1/2 -right-2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-ink shadow-neu transition-all duration-300 hover:text-primary-accent hover:shadow-neu-lg active:scale-95 active:shadow-neu-inset-sm sm:-right-6 sm:flex lg:-right-14"
                        @click="next"
                    >
                        <ChevronRight class="size-5" />
                    </button>

                    <div class="overflow-hidden px-1 py-2 sm:px-10">
                        <div
                            class="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                            :style="{
                                transform: `translateX(-${current * 100}%)`,
                            }"
                        >
                            <div
                                v-for="testimonial in testimonials"
                                :key="testimonial.name + testimonial.role"
                                class="w-full shrink-0"
                            >
                                <div
                                    class="relative mx-auto flex max-w-2xl flex-col items-center rounded-[2rem] bg-surface px-6 py-10 text-center shadow-neu sm:px-12"
                                >
                                    <span
                                        class="absolute -top-5 flex size-10 items-center justify-center rounded-full bg-surface text-primary-accent shadow-neu"
                                    >
                                        <Quote class="size-4.5" />
                                    </span>

                                    <div
                                        class="flex items-center gap-1.5"
                                        aria-label="Rated 5 out of 5"
                                    >
                                        <Star
                                            v-for="star in testimonial.rating"
                                            :key="star"
                                            class="size-4 fill-primary-accent text-primary-accent"
                                        />
                                    </div>

                                    <blockquote
                                        class="mt-5 text-base leading-relaxed text-pretty text-ink sm:text-lg"
                                    >
                                        “{{ testimonial.quote }}”
                                    </blockquote>

                                    <div class="mt-8 flex items-center gap-4">
                                        <span
                                            class="flex size-12 items-center justify-center rounded-full bg-surface text-primary-accent shadow-neu-inset-sm"
                                        >
                                            <User class="size-5" />
                                        </span>
                                        <span class="text-left">
                                            <span
                                                class="block text-sm font-semibold"
                                            >
                                                {{ testimonial.name }}
                                            </span>
                                            <span
                                                class="block text-xs text-ink-muted"
                                            >
                                                {{ testimonial.role }}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 flex items-center justify-center gap-2">
                        <button
                            v-for="(testimonial, index) in testimonials"
                            :key="testimonial.role"
                            type="button"
                            :aria-label="`Go to testimonial ${index + 1}`"
                            class="h-2.5 rounded-full transition-all duration-300"
                            :class="
                                current === index
                                    ? 'w-7 bg-primary-accent shadow-neu-sm'
                                    : 'w-2.5 bg-surface shadow-neu-inset-sm hover:bg-primary-accent/50'
                            "
                            @click="goTo(index)"
                        />
                    </div>

                    <div
                        class="mt-6 flex items-center justify-center gap-3 sm:hidden"
                    >
                        <button
                            type="button"
                            aria-label="Previous testimonial"
                            class="flex size-11 items-center justify-center rounded-full bg-surface text-ink shadow-neu transition-all duration-300 hover:text-primary-accent active:shadow-neu-inset-sm"
                            @click="prev"
                        >
                            <ChevronLeft class="size-5" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next testimonial"
                            class="flex size-11 items-center justify-center rounded-full bg-surface text-ink shadow-neu transition-all duration-300 hover:text-primary-accent active:shadow-neu-inset-sm"
                            @click="next"
                        >
                            <ChevronRight class="size-5" />
                        </button>
                    </div>
                </div>
            </RevealSection>
        </div>
    </section>
</template>
