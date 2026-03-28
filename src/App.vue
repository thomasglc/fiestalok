<script setup>
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import CatalogSection from './components/CatalogSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import ZoneSection from './components/ZoneSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <CatalogSection />
    <WhyUsSection />
    <ZoneSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>
