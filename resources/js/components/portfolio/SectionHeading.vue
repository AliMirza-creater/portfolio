<script setup lang="ts">
import RevealSection from '@/components/portfolio/RevealSection.vue';

withDefaults(
    defineProps<{
        eyebrow?: string;
        title?: string;
        description?: string;
        align?: 'center' | 'left';
    }>(),
    {
        eyebrow: '',
        title: '',
        description: '',
        align: 'center',
    },
);
</script>

<template>
    <RevealSection
        class="mx-auto max-w-2xl"
        :class="align === 'center' ? 'text-center' : 'text-left'"
    >
        <div
            v-if="eyebrow"
            class="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-primary-accent uppercase shadow-neu-sm"
        >
            <span class="size-1.5 rounded-full bg-primary-accent" />
            {{ eyebrow }}
        </div>
        <h2
            class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
        >
            <slot name="title">{{ title }}</slot>
        </h2>
        <p
            v-if="description || $slots.description"
            class="mt-4 text-base leading-relaxed text-pretty text-ink-muted sm:text-lg"
        >
            <slot name="description">{{ description }}</slot>
        </p>
    </RevealSection>
</template>
