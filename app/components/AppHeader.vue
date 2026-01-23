<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__logo">Logo</div>
      <ul class="header__menu">
        <li class="header__menu-item">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="header__menu-item">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 1rem 2rem;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__menu {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__menu-item {
    a {
      text-decoration: none;
      color: inherit;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
