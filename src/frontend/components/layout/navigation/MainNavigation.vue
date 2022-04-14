<template>
  <nav class="main-navigation">
      <div class="main-navigation__logo-container">
          <img src="" alt="" />
      </div>
      <ul class="main-navigation__site-list">
          <li class="main-navigation__site-item">Тесты</li>
          <li class="main-navigation__site-item">Репетиторы</li>
          <li class="main-navigation__site-item">Учебники</li>
      </ul>
      <div class="main-navigation__mobile-controls">
          <button class="main-navigation__button-toggle" aria-label="Открыть меню"></button>
      </div>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    .main-navigation {
        display: flex;
        align-items: center;

        &__site-list {
            display: flex;
            margin: 0 0 0 20px;
            padding: 0;

            list-style: none;
        }

        &__site-item {
            color: $clr-main;
        }

        &__site-item:not(:last-child) {
            margin-right: 20px;
        }

        &__mobile-controls {
            margin-left: auto;
            display: flex;
            align-items: center;
        }

        &__button-toggle {
            position: relative;
            width: 30px;
            height: 30px;

            background-color: transparent;
            border: none;
            cursor: pointer;
        }

        &__button-toggle::before,
        &__button-toggle::after {
            content: '';

            position: absolute;
            top: 9px;
            left: 5px;

            width: 20px;
            height: 2px;

            background-color: #fff;
        }

        &__button-toggle::before {
            box-shadow: 0 5px 0 0 #fff;
        }

        &__button-toggle::after {
            top: 19px;
        }
    }
</style>