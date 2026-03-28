<script setup>
import { ref, computed, onMounted } from 'vue'
import SectionWrapper from './base/SectionWrapper.vue'
import ProductCard from './base/ProductCard.vue'
import { products, categories } from '../data/products.js'

const activeCategory = ref('Tous')
const allCategories = ['Tous', ...categories]

const filtered = computed(() =>
  activeCategory.value === 'Tous'
    ? products
    : products.filter(p => p.category === activeCategory.value)
)

onMounted(() => {
  document.querySelectorAll('.fade-up').forEach(el => {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.classList.add('visible')
    }, { threshold: 0.1 }).observe(el)
  })
})
</script>

<template>
  <SectionWrapper id="catalogue" dark>
    <div class="text-center mb-12">
      <p class="fade-up text-coral text-sm font-semibold uppercase tracking-widest mb-3">Catalogue</p>
      <h2 class="fade-up font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-4" style="transition-delay:0.1s">
        Ce que nous proposons
      </h2>
      <p class="fade-up text-cream/60 max-w-xl mx-auto" style="transition-delay:0.2s">
        Location de matériel festif de qualité professionnelle, livré et installé en Alsace pour animation fête, mariage ou événement d'entreprise.
      </p>
    </div>

    <!-- Filtres catégories -->
    <div class="fade-up flex flex-wrap justify-center gap-2 mb-10" style="transition-delay:0.3s">
      <button
        v-for="cat in allCategories"
        :key="cat"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition-all',
          activeCategory.value === cat
            ? 'bg-coral text-white'
            : 'bg-white/10 text-cream/70 hover:bg-white/20',
        ]"
        @click="activeCategory = cat"
      >{{ cat }}</button>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in filtered" :key="product.id">
        <ProductCard v-bind="product" />
      </div>
    </div>
  </SectionWrapper>
</template>
