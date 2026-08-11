<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const props = withDefaults(
    defineProps<{
        direction?: 'up' | 'down' | 'left' | 'right' | 'none';
        delay?: number;
        duration?: number;
        as?: string;
        once?: boolean;
    }>(),
    {
        direction: 'up',
        delay: 0,
        duration: 700,
        as: 'div',
        once: true,
    },
);

const el = ref<HTMLElement | null>(null);
const visible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        visible.value = true;

        return;
    }

    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                visible.value = true;

                if (props.once) {
                    observer?.disconnect();
                }
            } else if (!props.once) {
                visible.value = false;
            }
        },
        { threshold: 0.12 },
    );

    if (el.value) {
        observer.observe(el.value);
    }
});

onBeforeUnmount(() => {
    observer?.disconnect();
});

const hiddenClass = computed(() => {
    switch (props.direction) {
        case 'down':
            return '-translate-y-8';
        case 'left':
            return 'translate-x-10';
        case 'right':
            return '-translate-x-10';
        case 'none':
            return '';
        default:
            return 'translate-y-8';
    }
});
</script>

<template>
    <component
        :is="as"
        ref="el"
        class="will-change-transform"
        :class="[
            visible
                ? 'translate-x-0 translate-y-0 opacity-100'
                : `opacity-0 ${hiddenClass}`,
        ]"
        :style="{
            transitionProperty: 'opacity, transform',
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: `${delay}ms`,
        }"
    >
        <slot />
    </component>
</template>
