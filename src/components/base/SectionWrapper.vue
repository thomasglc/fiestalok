<script setup>
defineProps({
  id: { type: String, default: null },
  dark: { type: Boolean, default: false },
  narrow: { type: Boolean, default: false },
})
</script>

<template>
  <section
    :id="id"
    :class="['py-20 px-4 md:px-8', dark ? 'bg-deep text-cream' : 'bg-cream text-deep']"
  >
    <div :class="['mx-auto', narrow ? 'max-w-3xl' : 'max-w-6xl']">
      <slot />
    </div>
  </section>
</template>
