<script lang="ts" setup>
import CrossIcon from '~/components/icons/CrossIcon.vue';
import FavoritesIcon from '~/components/icons/FavoritesIcon.vue';
import PersonIcon from '~/components/icons/PersonIcon.vue';

definePageMeta({
  layout: 'default',
});
</script>

<template>
  <div class="flex items-center justify-center gap-[48px] grow">
    <NuxtLink
      to="/favorites"
      class="flex flex-col items-center text-center hover:text-green-500 transition-all"
    >
      <span class="flex items-center justify-center w-[48px] h-[48px] mb-[12px]">
        <FavoritesIcon />
      </span>
      <span class="text-sm">Favorites</span>
    </NuxtLink>
    <NuxtLink
      to="/peoples"
      class="flex flex-col items-center text-center hover:text-green-500 transition-all"
    >
      <span class="flex items-center justify-center w-[48px] h-[48px] mb-[12px]">
        <PersonIcon />
      </span>
      <span class="text-sm">Peoples</span>
    </NuxtLink>
  </div>
</template>
