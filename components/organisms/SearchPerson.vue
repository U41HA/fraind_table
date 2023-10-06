<script setup lang="ts">
import { onClickOutside, useDebounceFn } from '@vueuse/core';
import InputBase from '~/components/atom/InputBase.vue';
import LoaderIcon from '~/components/icons/LoaderIcon.vue';
import DropdownList from '~/components/molecules/DropdownList.vue';
import { usePeoplesStore } from '~/stores/peoples';

const store = usePeoplesStore();
const inputValue = ref();
const inputRef = ref();

const isLoading = computed(() => store.isLoading);
const isDropdownActive = ref(false);
const serchedPeople = computed(() => store.searchResult || []);
onClickOutside(inputRef, () => (isDropdownActive.value = false));

const debouncedFn = useDebounceFn(async () => {
  const searchValue = inputValue.value;
  if (searchValue) {
    await store.fetchSearch(searchValue);
  }
}, 500);

watch(inputValue, () => {
  debouncedFn();
});
</script>

<template>
  <div class="relative max-w-max">
    <InputBase
      ref="inputRef"
      v-model="inputValue"
      label="Введите имя пользователя"
      @click="isDropdownActive = true"
    />
    <DropdownList v-if="isDropdownActive" :items="serchedPeople" :isLoading="isLoading" />
  </div>
</template>

<style module></style>
