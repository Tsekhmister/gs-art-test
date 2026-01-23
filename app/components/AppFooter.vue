<template>
  <footer class="footer">
    <div class="footer__content">
      <p class="footer__text">
        © {{ currentYear }} Your Company. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer {
  padding: 2rem;
  background-color: var(--color-background);
  border-top: 1px solid var(--color-border);
  margin-top: auto;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  &__text {
    margin: 0;
    color: var(--color-text-secondary);
  }
}
</style>
