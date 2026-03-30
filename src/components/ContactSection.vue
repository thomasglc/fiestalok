<script setup>
import SectionWrapper from './base/SectionWrapper.vue'
import BaseButton from './base/BaseButton.vue'
</script>

<template>
  <SectionWrapper id="contact" narrow>
    <div class="text-center">
      <p class="fade-up text-coral text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
      <h2 class="fade-up font-display text-4xl md:text-5xl font-bold leading-tight mb-4" style="transition-delay:0.1s">
        Contactez-nous
      </h2>
      <p class="fade-up text-muted mb-8" style="transition-delay:0.2s">
        Pour toute demande de disponibilité ou de devis, écrivez-nous directement.
      </p>
      <BaseButton href="mailto:contact@fiestalok.fr" variant="primary" class="fade-up text-base px-8 py-4" style="transition-delay:0.3s">
        contact@fiestalok.fr
      </BaseButton>
    </div>
  </SectionWrapper>
</template>
