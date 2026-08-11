<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = withDefaults(
    defineProps<{
        value: number;
        duration?: number;
        decimals?: number;
        suffix?: string;
        prefix?: string;
    }>(),
    {
        duration: 1800,
        decimals: 0,
        suffix: '',
        prefix: '',
    },
);

const el = ref<HTMLElement | null>(null);
const displayValue = ref(0);

let observer: IntersectionObserver | null = null;
let frame = 0;

const easeOutExpo = (t: number): number =>
    t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

function animate() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        displayValue.value = props.value;

        return;
    }

    const start = performance.now();

    const tick = (now: number) => {
        const progress = Math.min((now - start) / props.duration, 1);
        displayValue.value = props.value * easeOutExpo(progress);

        if (progress < 1) {
            frame = requestAnimationFrame(tick);
        } else {
            displayValue.value = props.value;
        }
    };

    frame = requestAnimationFrame(tick);
}

onMounted(() => {
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                animate();
                observer?.disconnect();
            }
        },
        { threshold: 0.4 },
    );

    if (el.value) {
        observer.observe(el.value);
    }
});

onBeforeUnmount(() => {
    observer?.disconnect();
    cancelAnimationFrame(frame);
});

watch(
    () => props.value,
    () => {
        displayValue.value = 0;
    },
);
</script>

<template>
    <span ref="el">
        {{ prefix }}{{ displayValue.toFixed(decimals) }}{{ suffix }}
    </span>
</template>
