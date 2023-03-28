<template>
  <header class="w-full lg:h-[102px] h-16 flex items-center py-2 absolute top-0 z-[60] bg-neutral-white border-b border-gray-100">
    <div class="w-full mx-auto flex items-center justify-between xl:px-14 px-10">
      <NuxtLink to="/">
        <figure>
          <img src='/img/logo-header.png' alt='Hispana Homes' class="lg:w-32 w-24 object-contain">
        </figure>
      </NuxtLink>
      <nav :class="{'hidden':!showMenu}" class="lg:block lg:static absolute lg:top-0 top-16 right-0 lg:h-full h-screen lg:w-max w-full md:max-w-sm lg:max-w-none max-w-full lg:p-0 p-6 z-[60] bg-neutral-white">
        <ul class="flex lg:items-center xl:gap-x-8 lg:gap-3 lg:flex-row flex-col">
          <li v-for='item in menu' :key='item.name' class="text-sm text-neutral-black font-normal hover:text-primary-100 mb-4 lg:mb-0 cursor-pointer">
            <NuxtLink :to='item.route'>{{item.name}}</NuxtLink>
          </li>
          <li class="mb-4 lg:mb-0">
            <AtomsButtons>Iniciar sesión</AtomsButtons>
          </li>
          <li v-show="userIn">
            <AtomsButtons icon-name="general/plus" :icon-size=14 btnStyle="btn-outline-primary">Publicar</AtomsButtons>
          </li>
        </ul>
      </nav>
      <!-- Open Menu -->
      <button v-show="viewport.isLessThan('desktop')" class="bg-primary-100 w-8 h-8 flex items-center justify-center" @click="showMenu = !showMenu">
        <AtomsIcon name="general/menu" class="text-neutral-white"></AtomsIcon>
      </button>
    </div>
  </header>
</template>

<script>
import menu from '~/assets/mocks/Header';

export default {
  name: 'AppHeader',
  data() {
    return {
      menu: menu.menu,
      viewport: useViewport(),
      showMenu: false,
      userIn: false
    }
  },
  watch: {
    showMenu: function() {
      if(this.showMenu) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-primary-100 font-semibold
}
</style>