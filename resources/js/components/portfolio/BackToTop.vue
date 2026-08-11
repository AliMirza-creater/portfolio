<script setup lang="ts">
import { ArrowUp } from '@lucide/vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const visible = ref(false);

function onScroll() {
    visible.value = window.scrollY > 600;
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
    <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="translate-y-3 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-3 opacity-0"
    >
        <button
            v-if="visible"
            type="button"
            aria-label="Back to top"
            class="fixed right-5 bottom-5 z-40 flex size-12 items-center justify-center rounded-full bg-surface text-ink shadow-neu transition-all duration-300 hover:-translate-y-1 hover:text-primary-accent hover:shadow-neu-lg active:scale-95 active:shadow-neu-inset sm:right-8 sm:bottom-8"
            @click="scrollToTop"
        >
            <ArrowUp class="size-5" />
        </button>
    </Transition>
</template>
