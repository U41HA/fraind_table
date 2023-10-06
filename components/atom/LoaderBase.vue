<script lang="ts" setup="">
import LoaderIcon from '~/components/icons/LoaderIcon.vue';

interface Props {
  size?: number;
}

withDefaults(defineProps<Props>(), {
  size: 30,
});
</script>

<template>
  <span
    :class="[$style.loader, 'text-green-500']"
    :style="{ width: size + 'px', height: size + 'px' }"
  >
    <LoaderIcon />
  </span>
</template>

<style module>
.loader {
  display: flex;
}

.loader svg {
  width: 100%;
  height: 100%;
  animation: rotate 0.8s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
