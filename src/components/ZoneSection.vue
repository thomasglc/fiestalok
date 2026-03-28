<script setup>
import { onMounted } from 'vue'
import SectionWrapper from './base/SectionWrapper.vue'

const zones = [
  { name: 'Strasbourg', highlight: true },
  { name: 'Schiltigheim' },
  { name: 'Illkirch-Graffenstaden' },
  { name: 'Haguenau' },
  { name: 'Sélestat' },
  { name: 'Saverne' },
  { name: 'Obernai' },
  { name: 'Molsheim' },
  { name: 'Colmar', highlight: true },
  { name: 'Mulhouse', highlight: true },
  { name: 'Guebwiller' },
  { name: 'Thann' },
  { name: 'Saint-Louis' },
  { name: 'Ribeauvillé' },
  { name: 'Soultz-Haut-Rhin' },
  { name: 'Et bien d\'autres…' },
]

onMounted(() => {
  document.querySelectorAll('.fade-up').forEach(el => {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.classList.add('visible')
    }, { threshold: 0.15 }).observe(el)
  })
})
</script>

<template>
  <SectionWrapper id="zone" dark>
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="fade-up text-coral text-sm font-semibold uppercase tracking-widest mb-3">Zone d'intervention</p>
        <h2 class="fade-up font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-6" style="transition-delay:0.1s">
          Toute l'Alsace,<br />à votre service.
        </h2>
        <p class="fade-up text-cream/60 leading-relaxed mb-8" style="transition-delay:0.2s">
          De Wissembourg à Saint-Louis, du Rhin aux Vosges — Fiestalo k intervient dans tout le
          Bas-Rhin (67) et le Haut-Rhin (68). Des frais de déplacement peuvent s'appliquer
          au-delà d'un certain rayon, précisés dans votre devis.
        </p>
        <div class="fade-up flex gap-4" style="transition-delay:0.3s">
          <div class="bg-white/10 rounded-xl px-5 py-3 text-center">
            <p class="font-display text-2xl font-bold text-coral">67</p>
            <p class="text-cream/50 text-xs">Bas-Rhin</p>
          </div>
          <div class="bg-white/10 rounded-xl px-5 py-3 text-center">
            <p class="font-display text-2xl font-bold text-coral">68</p>
            <p class="text-cream/50 text-xs">Haut-Rhin</p>
          </div>
        </div>
      </div>

      <div class="fade-up flex flex-wrap gap-2" style="transition-delay:0.2s">
        <span
          v-for="zone in zones"
          :key="zone.name"
          :class="[
            'px-3 py-1.5 rounded-full text-sm font-medium',
            zone.highlight
              ? 'bg-coral text-white'
              : 'bg-white/10 text-cream/70',
          ]"
        >{{ zone.name }}</span>
      </div>
    </div>
  </SectionWrapper>
</template>
