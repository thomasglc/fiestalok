<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: v => ['primary', 'outline', 'ghost'].includes(v),
  },
  tag: {
    type: String,
    default: 'button',
  },
  href: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <component
    :is="href ? 'a' : tag"
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm tracking-wide px-6 py-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2',
      variant === 'primary' && 'bg-coral text-white hover:bg-coral-dark active:scale-95',
      variant === 'outline' && 'border-2 border-coral text-coral hover:bg-coral hover:text-white active:scale-95',
      variant === 'ghost' && 'text-deep hover:text-coral underline-offset-4 hover:underline',
    ]"
  >
    <slot />
  </component>
</template>
