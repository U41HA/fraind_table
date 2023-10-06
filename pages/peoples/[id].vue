<script setup lang="ts">
import type { Header } from 'vue3-easy-data-table';
import ButtonSquare from '~/components/atom/ButtonSquare.vue';
import FavoritesActiveIcon from '~/components/icons/FavoritesActiveIcon.vue';
import FavoritesIcon from '~/components/icons/FavoritesIcon.vue';
import { IPeoples } from '~/interfaces/peoples';
import { usePeoplesStore } from '~/stores/peoples';
const store = usePeoplesStore();
const route = useRoute();

if (!store.peoples?.length) {
  await store.fetchPeoples();
}
await store.fetchPeople(route.params.id.toString());

const people = computed(() => [store.currentPeople]);

const columns = ref(['name', 'height', 'mass', 'hair_color', 'url', 'actions']);

const headers: Header[] = columns.value.map((column) => ({
  text: column,
  value: column,
  width: 140,
  sortable: column !== 'actions',
}));

function toggleFavorite(item: IPeoples) {
  store.toggleFavorite(item);
}

onBeforeMount(() => {
  store.checkFavorites();
});
</script>

<template>
  <div class="py-[48px]">
    <EasyDataTable :headers="headers" :items="people">
      <template #item-actions="item">
        <ButtonSquare @click="toggleFavorite(item)">
          <span v-if="!item.isFavorite" class="flex items-center justify-center w-[20px] h-[20px]">
            <FavoritesIcon />
          </span>
          <span v-else class="flex items-center justify-center w-[20px] h-[20px] text-green-600">
            <FavoritesActiveIcon />
          </span>
        </ButtonSquare>
      </template>
    </EasyDataTable>
  </div>
</template>

<style module></style>
