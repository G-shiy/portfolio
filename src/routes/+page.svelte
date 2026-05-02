<script>
  import { onMount } from 'svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import ReadingsSection from '$lib/components/ReadingsSection.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';

  onMount(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
  });
</script>

<HeroSection />
<AboutSection />
<ProjectsSection />
<ReadingsSection />
<ContactSection />
