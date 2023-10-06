<script lang="ts" setup>
import LoaderBase from '~/components/atom/LoaderBase.vue';
import CrossIcon from '~/components/icons/CrossIcon.vue';
import FavoritesIcon from '~/components/icons/FavoritesIcon.vue';
import PersonIcon from '~/components/icons/PersonIcon.vue';
import { usePeoplesStore } from '~/stores/peoples';

definePageMeta({
  layout: 'default',
});

const store = usePeoplesStore();

const isLoading = computed(() => store.isLoading);
</script>

<template>
  <div class="flex items-center justify-center grow">
    <div class="flex flex-col items-center">
      <div v-if="!isLoading" class="mb-[48px] flex gap-[48px]">
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
      <div v-else>
        <LoaderBase :size="60" />
      </div>
    </div>
  </div>
</template>
