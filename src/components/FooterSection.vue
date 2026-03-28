<script setup>
const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'Pourquoi nous', href: '#why-us' },
  { label: 'Zone d\'intervention', href: '#zone' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Facebook', href: '#', icon: 'f' },
  { label: 'Instagram', href: '#', icon: '⬡' },
]
</script>

<template>
  <footer class="bg-deep text-cream/60 pt-16 pb-8 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
        <div>
          <p class="font-display text-2xl font-bold text-cream mb-3">
            Fiestalo <span class="text-coral">k</span>
          </p>
          <p class="text-sm leading-relaxed max-w-xs">
            Location de matériel festif à Strasbourg et en Alsace. Livraison, montage et démontage inclus.
          </p>
        </div>

        <nav aria-label="Liens du site">
          <p class="text-cream text-sm font-semibold mb-4">Navigation</p>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.href">
              <a :href="link.href" class="text-sm hover:text-coral transition-colors">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <div>
          <p class="text-cream text-sm font-semibold mb-4">Contact</p>
          <address class="not-italic space-y-2 text-sm">
            <p>📍 Strasbourg, Alsace</p>
            <p>📞 <a href="tel:+33XXXXXXXXX" class="hover:text-coral transition-colors">+33 X XX XX XX XX</a></p>
            <p>✉️ <a href="mailto:contact@fiestalo-k.fr" class="hover:text-coral transition-colors">contact@fiestalo-k.fr</a></p>
          </address>
          <div class="flex gap-3 mt-5">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-coral transition-colors"
            >{{ social.icon }}</a>
          </div>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {{ new Date().getFullYear() }} Fiestalo k — Tous droits réservés</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-coral transition-colors">Mentions légales</a>
          <a href="#" class="hover:text-coral transition-colors">Politique de confidentialité</a>
          <a href="#" class="hover:text-coral transition-colors">CGV</a>
        </div>
      </div>
    </div>
  </footer>
</template>
