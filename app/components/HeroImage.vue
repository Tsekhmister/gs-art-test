<template>
  <div class="hero">
    <NuxtImg
      src="/hero-1.webp"
      class="hero-img"
      alt="Hero Image"
      quality="95"
      fill
      sizes="sm:100vw md:100vw lg:100vw"
      preload
    />
  </div>

  <div class="test2">
    <h1>Test</h1>
  </div>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;

  .hero-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
