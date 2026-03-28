<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from './base/BaseButton.vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'Zone', href: '#zone' },
  { label: 'Contact', href: '#contact' },
]

const onScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
      <a href="#" :class="['font-display text-xl font-bold transition-colors', scrolled ? 'text-deep' : 'text-cream']">
        Fiestalo <span class="text-coral">k</span>
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="['text-sm font-medium hover:text-coral transition-colors', scrolled ? 'text-deep/70' : 'text-cream/80']"
        >{{ link.label }}</a>
        <BaseButton href="#contact" variant="primary">Devis gratuit</BaseButton>
      </nav>

      <button
        class="md:hidden p-2 rounded-lg hover:bg-coral/10 transition-colors"
        aria-label="Menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="block w-5 h-0.5 mb-1.5 transition-all" :class="[scrolled ? 'bg-deep' : 'bg-cream', menuOpen && 'rotate-45 translate-y-2']" />
        <span class="block w-5 h-0.5 mb-1.5 transition-all" :class="[scrolled ? 'bg-deep' : 'bg-cream', menuOpen && 'opacity-0']" />
        <span class="block w-5 h-0.5 transition-all" :class="[scrolled ? 'bg-deep' : 'bg-cream', menuOpen && '-rotate-45 -translate-y-2']" />
      </button>
    </div>

    <div
      v-if="menuOpen"
      class="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4"
    >
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="text-sm font-medium text-deep/70 hover:text-coral py-1"
        @click="menuOpen = false"
      >{{ link.label }}</a>
      <BaseButton href="#contact" variant="primary" @click="menuOpen = false">Devis gratuit</BaseButton>
    </div>
  </header>
</template>
