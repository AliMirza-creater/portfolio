<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { AlertCircle, Check, Loader2, Mail, MapPin, Send } from '@lucide/vue';
import { ref } from 'vue';
import BrandIcon from '@/components/portfolio/BrandIcon.vue';
import { profile } from '@/components/portfolio/portfolio';
import RevealSection from '@/components/portfolio/RevealSection.vue';
import { send } from '@/routes/contact';

const sent = ref(false);

const form = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const contactRows: Array<{
    label: string;
    value: string;
    href: string | null;
    icon?: typeof Mail;
    brand?: 'github' | 'linkedin';
}> = [
    {
        label: 'Email',
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: Mail,
    },
    { label: 'Location', value: profile.location, href: null, icon: MapPin },
    {
        label: 'GitHub',
        value: '@[YOUR-USERNAME]',
        href: profile.github,
        brand: 'github',
    },
    {
        label: 'LinkedIn',
        value: 'in/[YOUR-USERNAME]',
        href: profile.linkedin,
        brand: 'linkedin',
    },
];

const socials: Array<{
    label: string;
    href: string;
    icon?: typeof Mail;
    brand?: 'github' | 'linkedin' | 'twitter';
}> = [
    { label: 'GitHub', href: profile.github, brand: 'github' },
    { label: 'LinkedIn', href: profile.linkedin, brand: 'linkedin' },
    { label: 'Twitter', href: profile.twitter, brand: 'twitter' },
];

function submit() {
    form.post(send().url, {
        preserveScroll: true,
        onSuccess: () => {
            sent.value = true;
            form.reset();
        },
    });
}

function resetForm() {
    sent.value = false;
}
</script>

<template>
    <section id="contact" class="relative overflow-hidden py-20 sm:py-28">
        <div
            class="pointer-events-none absolute -top-32 right-0 -z-10 size-96 rounded-full bg-primary-accent/10 blur-3xl"
            aria-hidden="true"
        />

        <div class="mx-auto max-w-6xl px-4">
            <div class="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
                <div>
                    <RevealSection direction="left">
                        <div
                            class="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-xs font-semibold tracking-widest text-primary-accent uppercase shadow-neu-sm"
                        >
                            <span
                                class="size-1.5 rounded-full bg-primary-accent"
                            />
                            Contact
                        </div>
                        <h2
                            class="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
                        >
                            Let's work
                            <span
                                class="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent"
                            >
                                together
                            </span>
                        </h2>
                        <p
                            class="mt-4 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg"
                        >
                            Have a project in mind, a role to fill or just want
                            to say hello? My inbox is always open — I'll get
                            back to you within a day or two.
                        </p>
                    </RevealSection>

                    <RevealSection direction="left" :delay="150">
                        <ul class="mt-8 space-y-3">
                            <li v-for="row in contactRows" :key="row.label">
                                <a
                                    v-if="row.href"
                                    :href="row.href"
                                    :target="
                                        row.href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    "
                                    rel="noopener noreferrer"
                                    class="group flex items-center gap-4 rounded-3xl bg-surface p-4 shadow-neu transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neu-lg"
                                >
                                    <span
                                        class="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-surface text-primary-accent shadow-neu-inset-sm transition-transform duration-300 group-hover:scale-105"
                                    >
                                        <BrandIcon
                                            v-if="row.brand"
                                            :name="row.brand"
                                            class="size-5"
                                        />
                                        <component
                                            v-else
                                            :is="row.icon"
                                            class="size-5"
                                        />
                                    </span>
                                    <span>
                                        <span
                                            class="block text-xs font-semibold tracking-widest text-ink-muted uppercase"
                                        >
                                            {{ row.label }}
                                        </span>
                                        <span
                                            class="mt-0.5 block text-sm font-medium"
                                        >
                                            {{ row.value }}
                                        </span>
                                    </span>
                                </a>
                                <div
                                    v-else
                                    class="flex items-center gap-4 rounded-3xl bg-surface p-4 shadow-neu"
                                >
                                    <span
                                        class="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-surface text-primary-accent shadow-neu-inset-sm"
                                    >
                                        <BrandIcon
                                            v-if="row.brand"
                                            :name="row.brand"
                                            class="size-5"
                                        />
                                        <component
                                            v-else
                                            :is="row.icon"
                                            class="size-5"
                                        />
                                    </span>
                                    <span>
                                        <span
                                            class="block text-xs font-semibold tracking-widest text-ink-muted uppercase"
                                        >
                                            {{ row.label }}
                                        </span>
                                        <span
                                            class="mt-0.5 block text-sm font-medium"
                                        >
                                            {{ row.value }}
                                        </span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </RevealSection>

                    <RevealSection direction="left" :delay="300">
                        <div class="mt-8 flex items-center gap-3">
                            <a
                                v-for="social in socials"
                                :key="social.label"
                                :href="social.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                :aria-label="social.label"
                                class="flex size-11 items-center justify-center rounded-full bg-surface text-ink shadow-neu transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-accent hover:shadow-neu-lg active:translate-y-0 active:shadow-neu-inset-sm"
                            >
                                <BrandIcon
                                    v-if="social.brand"
                                    :name="social.brand"
                                    class="size-4.5"
                                />
                                <component
                                    v-else
                                    :is="social.icon"
                                    class="size-4.5"
                                />
                            </a>
                        </div>
                    </RevealSection>
                </div>

                <RevealSection direction="right" :delay="150">
                    <div
                        class="rounded-[2rem] bg-surface p-6 shadow-neu-lg sm:p-8"
                    >
                        <div
                            v-if="sent"
                            class="flex flex-col items-center py-10 text-center"
                        >
                            <span
                                class="flex size-16 items-center justify-center rounded-full bg-surface text-primary-accent shadow-neu"
                            >
                                <Check class="size-7" />
                            </span>
                            <h3
                                class="mt-6 text-xl font-semibold tracking-tight"
                            >
                                Message sent
                            </h3>
                            <p
                                class="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted"
                            >
                                Thanks for reaching out. I'll read your message
                                and reply as soon as I can.
                            </p>
                            <button
                                type="button"
                                class="mt-6 rounded-full bg-surface px-6 py-2.5 text-sm font-semibold text-primary-accent shadow-neu-sm transition-all duration-300 hover:shadow-neu-lg active:shadow-neu-inset-sm"
                                @click="resetForm"
                            >
                                Send another message
                            </button>
                        </div>

                        <form
                            v-else
                            class="space-y-5"
                            @submit.prevent="submit"
                            novalidate
                        >
                            <div class="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        for="contact-name"
                                        class="mb-2 block text-sm font-medium"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        v-model="form.name"
                                        type="text"
                                        autocomplete="name"
                                        placeholder="Your name"
                                        class="w-full rounded-2xl bg-surface px-4 py-3 text-sm text-ink shadow-neu-inset-sm transition-all duration-300 outline-none placeholder:text-ink-muted/60 focus:ring-2 focus:ring-primary-accent/40"
                                        :class="
                                            form.errors.name
                                                ? 'ring-2 ring-destructive/40'
                                                : ''
                                        "
                                    />
                                    <p
                                        v-if="form.errors.name"
                                        class="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
                                    >
                                        <AlertCircle class="size-3.5" />
                                        {{ form.errors.name }}
                                    </p>
                                </div>
                                <div>
                                    <label
                                        for="contact-email"
                                        class="mb-2 block text-sm font-medium"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        v-model="form.email"
                                        type="email"
                                        autocomplete="email"
                                        placeholder="you@example.com"
                                        class="w-full rounded-2xl bg-surface px-4 py-3 text-sm text-ink shadow-neu-inset-sm transition-all duration-300 outline-none placeholder:text-ink-muted/60 focus:ring-2 focus:ring-primary-accent/40"
                                        :class="
                                            form.errors.email
                                                ? 'ring-2 ring-destructive/40'
                                                : ''
                                        "
                                    />
                                    <p
                                        v-if="form.errors.email"
                                        class="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
                                    >
                                        <AlertCircle class="size-3.5" />
                                        {{ form.errors.email }}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <label
                                    for="contact-subject"
                                    class="mb-2 block text-sm font-medium"
                                >
                                    Subject
                                </label>
                                <input
                                    id="contact-subject"
                                    v-model="form.subject"
                                    type="text"
                                    placeholder="What's this about?"
                                    class="w-full rounded-2xl bg-surface px-4 py-3 text-sm text-ink shadow-neu-inset-sm transition-all duration-300 outline-none placeholder:text-ink-muted/60 focus:ring-2 focus:ring-primary-accent/40"
                                    :class="
                                        form.errors.subject
                                            ? 'ring-2 ring-destructive/40'
                                            : ''
                                    "
                                />
                                <p
                                    v-if="form.errors.subject"
                                    class="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
                                >
                                    <AlertCircle class="size-3.5" />
                                    {{ form.errors.subject }}
                                </p>
                            </div>

                            <div>
                                <label
                                    for="contact-message"
                                    class="mb-2 block text-sm font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    v-model="form.message"
                                    rows="5"
                                    placeholder="Tell me about your project…"
                                    class="w-full resize-none rounded-2xl bg-surface px-4 py-3 text-sm text-ink shadow-neu-inset-sm transition-all duration-300 outline-none placeholder:text-ink-muted/60 focus:ring-2 focus:ring-primary-accent/40"
                                    :class="
                                        form.errors.message
                                            ? 'ring-2 ring-destructive/40'
                                            : ''
                                    "
                                />
                                <p
                                    v-if="form.errors.message"
                                    class="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
                                >
                                    <AlertCircle class="size-3.5" />
                                    {{ form.errors.message }}
                                </p>
                            </div>

                            <button
                                type="submit"
                                :disabled="form.processing"
                                class="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-accent px-6 py-3.5 text-sm font-semibold text-white shadow-neu-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neu-lg active:translate-y-0 active:shadow-neu-inset-sm disabled:pointer-events-none disabled:opacity-70 sm:text-base"
                                :aria-busy="form.processing"
                            >
                                <Loader2
                                    v-if="form.processing"
                                    class="size-4.5 animate-spin"
                                />
                                <Send
                                    v-else
                                    class="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                                {{
                                    form.processing
                                        ? 'Sending…'
                                        : 'Send Message'
                                }}
                            </button>
                        </form>
                    </div>
                </RevealSection>
            </div>
        </div>
    </section>
</template>
