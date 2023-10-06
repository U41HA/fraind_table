import { INotification } from '~/interfaces/notification';

export default defineNuxtPlugin(() => {
  const notifications = ref<INotification[]>([]);
  const isBlockOtherNotify = ref(false);
  function closeNotification(id: number) {
    const index = notifications.value.findIndex((item) => item.id === id);
    notifications.value.splice(index, 1);
  }

  function addNotification(
    theme: 'red' | 'gray',
    message: string,
    timeout = 3000,
    isOneNotification = false,
  ) {
    const id = Date.now();
    if (!isBlockOtherNotify.value) {
      notifications.value.unshift({ theme, message, id });
    }
    isBlockOtherNotify.value = isOneNotification;
    setTimeout(() => {
      closeNotification(id);
      isBlockOtherNotify.value = false;
    }, timeout);
  }

  return {
    provide: {
      notifications: {
        notifications,
        addNotification,
        closeNotification,
      },
    },
  };
});
