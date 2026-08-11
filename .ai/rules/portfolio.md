---
paths:
  - 'resources/js/components/portfolio/**'
---

# Portfolio

## No lucide brand icons — use BrandIcon.vue
The installed @lucide/vue version does not export brand icons (Github, Linkedin, Twitter are missing and break the build with MISSING_EXPORT). For GitHub/LinkedIn/X use the inline-SVG BrandIcon.vue component in resources/js/components/portfolio/ with a `name` prop ('github' | 'linkedin' | 'twitter'); it inherits currentColor via fill. Do not re-import brand names from @lucide/vue.
