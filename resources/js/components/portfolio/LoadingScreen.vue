<script setup lang="ts">
import { Code2 } from '@lucide/vue';
import { profile } from '@/components/portfolio/portfolio';
</script>

<template>
    <div
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-surface"
        role="status"
        aria-label="Loading portfolio"
    >
        <div class="relative flex flex-col items-center">
            <div class="relative size-28 rounded-full shadow-neu">
                <span
                    class="absolute inset-0 rounded-full"
                    :style="{
                        background:
                            'conic-gradient(from 0deg, transparent 0 70%, var(--neu-accent) 90%, transparent 100%)',
                        mask: 'radial-gradient(farthest-side, transparent calc(100% - 7px), #000 calc(100% - 6px))',
                        WebkitMask:
                            'radial-gradient(farthest-side, transparent calc(100% - 7px), #000 calc(100% - 6px))',
                        animation: 'loader-rotate 1.1s linear infinite',
                    }"
                />
                <span
                    class="absolute inset-2 flex items-center justify-center rounded-full bg-surface shadow-neu-inset"
                >
                    <Code2 class="size-7 text-primary-accent" />
                </span>
            </div>

            <div class="mt-8 text-center">
                <p class="text-lg font-semibold tracking-tight">
                    {{ profile.name }}
                </p>
                <p class="mt-1 text-sm text-ink-muted">Loading portfolio</p>
            </div>
        </div>
    </div>
</template>
