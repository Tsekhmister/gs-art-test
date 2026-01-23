<template>
  <div class="layout">
    <AppHeader />
    <main class="layout__content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    flex: 1;
  }
}
</style>
