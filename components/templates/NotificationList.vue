<script lang="ts" setup="">
import NotificationBase from '~/components/molecules/NotificationBase.vue';

const { $notifications } = useNuxtApp();

function closeNotification(value: number) {
  $notifications.closeNotification(value);
}
</script>

<template>
  <TransitionGroup
    name="list"
    tag="ul"
    :class="['flex flex-col items-center fixed gap-[12px] w-max', $style.wrapper]"
  >
    <li v-for="notification in $notifications.notifications.value" :key="notification.id">
      <NotificationBase
        :id="notification.id"
        :theme="notification.theme"
        @closeNotification="closeNotification"
      >
        {{ notification.message }}
      </NotificationBase>
    </li>
  </TransitionGroup>
</template>

<style module>
.wrapper {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

@media (max-width: 599px) {
  .wrapper {
    width: calc(100% - 40px);
    align-items: stretch;
  }
}
</style>
