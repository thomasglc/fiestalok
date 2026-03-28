<script setup>
import { onMounted } from 'vue'
import BaseButton from './base/BaseButton.vue'

onMounted(() => {
  document.querySelectorAll('.fade-up').forEach(el => {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.classList.add('visible')
    }, { threshold: 0.15 }).observe(el)
  })
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep px-4"
    aria-label="Section d'accueil Fiestalo k"
  >
    <!-- Accent décoratif -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-coral/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-coral/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

    <div class="relative max-w-4xl mx-auto text-center pt-24 pb-16">
      <p class="fade-up text-coral text-sm font-semibold uppercase tracking-widest mb-4">
        Location de matériel festif · Strasbourg &amp; Alsace
      </p>
      <h1 class="fade-up font-display text-cream text-5xl md:text-7xl font-bold leading-tight mb-6" style="transition-delay:0.1s">
        Vos événements,<br />
        <span class="text-coral">grandeur nature.</span>
      </h1>
      <p class="fade-up text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style="transition-delay:0.2s">
        Location de matériel festif en Alsace — livraison et installation incluses, vous n'avez qu'à profiter.
      </p>
      <div class="fade-up flex flex-col sm:flex-row items-center justify-center gap-4" style="transition-delay:0.3s">
        <BaseButton href="#contact" variant="primary" class="text-base px-8 py-4">
          Demander un devis gratuit
        </BaseButton>
        <BaseButton href="#catalogue" variant="outline" class="text-base px-8 py-4 border-cream/40 text-cream hover:bg-cream hover:text-deep">
          Voir le catalogue
        </BaseButton>
      </div>

      <div class="fade-up mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto" style="transition-delay:0.4s">
        <div class="text-center">
          <p class="font-display text-3xl font-bold text-coral">4</p>
          <p class="text-cream/50 text-xs mt-1">Châteaux gonflables</p>
        </div>
        <div class="text-center border-x border-white/10">
          <p class="font-display text-3xl font-bold text-coral">100%</p>
          <p class="text-cream/50 text-xs mt-1">Livraison incluse</p>
        </div>
        <div class="text-center">
          <p class="font-display text-3xl font-bold text-coral">Alsace</p>
          <p class="text-cream/50 text-xs mt-1">Bas &amp; Haut-Rhin</p>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
      <span class="text-cream text-xs tracking-widest uppercase">Scroll</span>
      <div class="w-px h-10 bg-gradient-to-b from-cream to-transparent" />
    </div>
  </section>
</template>
