<script lang="ts" setup="">
import LoaderBase from '~/components/atom/LoaderBase.vue';
import { IPeoples } from '~/interfaces/peoples';

interface Props {
  items: IPeoples[] | [];
  isLoading?: boolean;
  emptyResultText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  emptyResultText: 'Ничего не найдено',
});

function getUserUrl(url: string) {
  const urlParts = url.split('/');
  return `/peoples/${urlParts[urlParts.length - 2]}`;
}
</script>

<template>
  <div class="absolute top-[100%] left-[0] rounded-[10px] bg-white shadow-md p-[4px] z-10">
    <div v-if="isLoading" class="px-[12px] py-[6px]">
      <LoaderBase :size="20" />
    </div>
    <template v-else>
      <template v-if="items.length">
        <ul :class="[$style.container, 'flex flex-col gap-[8px]']">
          <li v-for="item in items" :key="item.name" :class="[$style.item, 'mb-[4px] px-[12px]']">
            <NuxtLink :to="getUserUrl(item.url)">
              <span class="flex flex-col gap-[4px]">
                <span class="font-semibold">
                  {{ item.name }}
                </span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </template>
      <div v-else class="py-[6px] px-[12px]">
        <span class="text-xs"> Нет подходящих результатов </span>
      </div>
    </template>
  </div>
</template>

<style module>
.container {
  padding: 4px;
  max-height: 150px;
  overflow: auto;
  scrollbar-width: none;
}

.container::-webkit-scrollbar {
  width: 7px;
}

.container::-webkit-scrollbar-track {
  background: transparent;
  margin: 4px 2px;
}

.container::-webkit-scrollbar-thumb {
  background-color: rgb(var(--ytme-color-grey-divider));
  border-radius: 20px;
  border: 2px solid rgb(var(--ytme-color-primary-white));
}
</style>
