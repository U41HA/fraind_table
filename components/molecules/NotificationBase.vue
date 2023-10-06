<script lang="ts" setup="">
import ButtonSquare from '~/components/atom/ButtonSquare.vue';
import CrossIcon from '~/components/icons/CrossIcon.vue';

interface Props {
  theme: 'gray' | 'red';
  id: number;
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'gray',
});

interface Emits {
  (e: 'closeNotification', value: number): void;
}

const colors = ['bg-gray-700', 'bg-red-700'];
const emits = defineEmits<Emits>();
</script>

<template>
  <div
    :class="[`flex items-center w-fit p-[8px] pl-[16px] rounded-[10px] bg-${theme}-700 text-white`]"
  >
    <span class="mr-[8px]">
      <slot />
    </span>

    <ButtonSquare @click="emits('closeNotification', id)">
      <CrossIcon class="text-white" />
    </ButtonSquare>
  </div>
</template>

<style scoped></style>
