<script setup>
import { ref, reactive, onMounted } from 'vue'
import SectionWrapper from './base/SectionWrapper.vue'
import BaseButton from './base/BaseButton.vue'
import { products } from '../data/products.js'

const submitted = ref(false)
const form = reactive({ name: '', date: '', article: '', message: '' })

const submit = () => {
  if (!form.name || !form.date || !form.article) return
  submitted.value = true
}

onMounted(() => {
  document.querySelectorAll('.fade-up').forEach(el => {
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.classList.add('visible')
    }, { threshold: 0.15 }).observe(el)
  })
})
</script>

<template>
  <SectionWrapper id="contact" narrow>
    <div class="text-center mb-10">
      <p class="fade-up text-coral text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
      <h2 class="fade-up font-display text-4xl md:text-5xl font-bold leading-tight mb-4" style="transition-delay:0.1s">
        Demandez votre devis
      </h2>
      <p class="fade-up text-muted" style="transition-delay:0.2s">Gratuit, sans engagement, réponse sous 24h.</p>
    </div>

    <div v-if="submitted" class="fade-up visible text-center py-16">
      <span class="text-6xl block mb-4">🎉</span>
      <h3 class="font-display text-2xl font-bold text-deep mb-2">Demande envoyée !</h3>
      <p class="text-muted">Nous vous recontactons sous 24h pour confirmer votre réservation.</p>
    </div>

    <form
      v-else
      class="fade-up bg-white rounded-2xl shadow-sm p-8 space-y-5"
      style="transition-delay:0.3s"
      novalidate
      @submit.prevent="submit"
    >
      <div class="grid sm:grid-cols-2 gap-5">
        <div>
          <label for="name" class="block text-sm font-medium text-deep mb-1.5">Nom / Prénom <span class="text-coral">*</span></label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            placeholder="Marie Dupont"
            class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition"
          />
        </div>
        <div>
          <label for="date" class="block text-sm font-medium text-deep mb-1.5">Date de l'événement <span class="text-coral">*</span></label>
          <input
            id="date"
            v-model="form.date"
            type="date"
            required
            class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition"
          />
        </div>
      </div>

      <div>
        <label for="article" class="block text-sm font-medium text-deep mb-1.5">Article souhaité <span class="text-coral">*</span></label>
        <select
          id="article"
          v-model="form.article"
          required
          class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition bg-white"
        >
          <option value="" disabled selected>Choisissez un article…</option>
          <option v-for="p in products" :key="p.id" :value="p.name">{{ p.name }}</option>
          <option value="Plusieurs articles">Plusieurs articles</option>
        </select>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-deep mb-1.5">Message (optionnel)</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          placeholder="Lieu, nombre d'invités, questions particulières…"
          class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral transition"
        />
      </div>

      <BaseButton type="submit" variant="primary" class="w-full text-base py-4">
        Envoyer ma demande
      </BaseButton>
    </form>
  </SectionWrapper>
</template>
