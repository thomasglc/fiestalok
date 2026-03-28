<script setup>
import { onMounted } from 'vue'
import SectionWrapper from './base/SectionWrapper.vue'

onMounted(() => {
  document.querySelectorAll('.fade-up').forEach(el => {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.classList.add('visible')
    }, { threshold: 0.15 }).observe(el)
  })
})
</script>

<template>
  <SectionWrapper id="about">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="fade-up text-coral text-sm font-semibold uppercase tracking-widest mb-3">À propos</p>
        <h2 class="fade-up font-display text-4xl md:text-5xl font-bold leading-tight mb-6" style="transition-delay:0.1s">
          L'événementiel alsacien,<br />avec le cœur.
        </h2>
        <p class="fade-up text-muted leading-relaxed mb-4" style="transition-delay:0.2s">
          Fiestalo k est née d'une passion simple : rendre chaque fête inoubliable. Basée à Strasbourg,
          notre équipe sillonne le Bas-Rhin et le Haut-Rhin pour apporter joie et animation partout où
          vous nous appelez.
        </p>
        <p class="fade-up text-muted leading-relaxed" style="transition-delay:0.3s">
          Que ce soit pour un anniversaire d'enfant, un mariage en plein air, une kermesse scolaire ou
          un team-building en entreprise — nous livrons, installons et récupérons. Vous profitez,
          on s'occupe du reste.
        </p>
      </div>
      <div class="fade-up grid grid-cols-2 gap-4" style="transition-delay:0.2s">
        <div class="bg-coral/8 rounded-2xl p-6 flex flex-col gap-2">
          <span class="text-3xl">🎪</span>
          <h3 class="font-display font-bold text-lg">Expérience</h3>
          <p class="text-muted text-sm">Des années d'animations festives en Alsace</p>
        </div>
        <div class="bg-coral/8 rounded-2xl p-6 flex flex-col gap-2 md:mt-6">
          <span class="text-3xl">🚐</span>
          <h3 class="font-display font-bold text-lg">Mobilité</h3>
          <p class="text-muted text-sm">Livraison sur tout le territoire alsacien</p>
        </div>
        <div class="bg-coral/8 rounded-2xl p-6 flex flex-col gap-2">
          <span class="text-3xl">🛡️</span>
          <h3 class="font-display font-bold text-lg">Sécurité</h3>
          <p class="text-muted text-sm">Matériel certifié et entretenu régulièrement</p>
        </div>
        <div class="bg-coral/8 rounded-2xl p-6 flex flex-col gap-2 md:mt-6">
          <span class="text-3xl">💬</span>
          <h3 class="font-display font-bold text-lg">Réactivité</h3>
          <p class="text-muted text-sm">Réponse rapide, devis sous 24h</p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
