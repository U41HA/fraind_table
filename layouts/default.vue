<script lang="ts" setup="">
import LogoIcon from '~/components/icons/LogoIcon.vue';

const route = useRoute();

const routerName = computed(() => {
  switch (route.name) {
    case 'favorites':
      return 'Избранное';
    case 'peoples':
      return 'Пользователи';
  }
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="h-[64px] bg-white shadow-md flex items-center px-[20px]">
      <div class="flex items-center justify-between max-w-[1176px] w-full mx-auto">
        <div class="flex items-center gap-[12px] max-w-[200px] w-full">
          <NuxtLink to="/">
            <LogoIcon />
          </NuxtLink>
          <span class="text-gray-500">
            {{ routerName }}
          </span>
        </div>
        <nav v-if="route.name !== 'index'">
          <ul class="flex items-center gap-[12px]">
            <li>
              <NuxtLink to="/favorites" class="hover:text-green-500 transition-all">
                <span>Favorites</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/peoples" class="hover:text-green-500 transition-all">
                <span>Peoples</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <p class="hidden md:block">
          <span class="mr-1 text-gray-900 font-bold">Фрайнд Александр</span>
          <span class="text-gray-600">, 2023</span>
        </p>
      </div>
    </header>
    <main class="max-w-[1176px] w-full mx-auto grow basis-auto flex flex-col px-[20px]">
      <slot />
    </main>
  </div>
</template>

<style module></style>
