<script setup lang="ts">
import { useVModel } from '@vueuse/core';
interface Props {
  placeholder?: string;
  label?: string;
  modelValue: string;
}

interface Emits {
  (e: 'update:modelValue', value: string): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const inputValue = useVModel(props, 'modelValue', emits);
</script>

<template>
  <label :class="[$style.container]">
    <input
      v-model="inputValue"
      type="text"
      :class="[$style.input]"
      :placeholder="placeholder || ''"
    />
    <span :class="$style.label">{{ label }}</span>
  </label>
</template>

<style module>
.input {
  width: 100%;
  padding: 0 26px 0 12px;
  height: 48px;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: var(--color-grey-default);
}

.input:focus {
  border: 1px solid var(--color-black-100);
  background: var(--color-white-0);
  box-shadow: var(--shadow-grey-100);
}

.input:disabled {
  color: var(--color-grey-150);
  cursor: auto;
  pointer-events: none;
  user-select: none;
}

.input::placeholder {
  opacity: 0;
}

.container {
  position: relative;
}

.container {
  display: block;
  position: relative;
  width: 100%;
  max-width: 323px;
}

.label {
  display: block;
  position: absolute;
  top: 50%;
  left: 13px;
  transform: translateY(-50%);
  color: var(--color-grey-200);
  transition: all 0.2s;
  font-size: 12px;
}

.input:not(:placeholder-shown) + .label,
.input:focus + .label {
  display: block;
  font-size: 10px;
  top: 4px;
  transform: none;
}

.input:not(:placeholder-shown),
.input:focus {
  display: block;
  transform: none;
  padding-top: 21px;
  padding-bottom: 9px;
}
</style>
