import { defineStore } from 'pinia';
import { useCustomFetch } from '~/composables/useCustomFetch';
import { checkLocalStorageFavorite } from '~/helpers/checkLocalStorageFavorite';
import { IPeoples } from '~/interfaces/peoples';
interface IResponseData<T> {
  results: T;
  count: number;
}

export const usePeoplesStore = defineStore('peoples', () => {
  const { $notifications } = useNuxtApp();

  const {
    public: { baseUrl },
  } = useRuntimeConfig();

  const peoples = ref<IPeoples[]>();
  const searchResult = ref<IPeoples[]>();
  const currentPeople = ref<IPeoples>();
  const isLoading = ref(false);

  const favoritePeople = computed(() => {
    return peoples.value?.filter((people) => people.isFavorite);
  });

  async function fetchPeoples() {
    const { data } = await useFetch<IResponseData<IPeoples[]>>(`${baseUrl}/api/people`);
    peoples.value = data.value?.results.map((item) => ({
      name: item.name,
      height: item.height,
      mass: item.mass,
      hair_color: item.hair_color,
      url: item.url,
      isFavorite: false,
    }));
  }

  async function fetchPeople(id: string) {
    const { data } = await useFetch<IPeoples>(`${baseUrl}api/people/${id}`);
    if (data.value) {
      currentPeople.value = {
        name: data.value.name,
        height: data.value.height,
        mass: data.value.mass,
        hair_color: data.value.hair_color,
        url: data.value.url,
        isFavorite: false,
      };
    }
  }

  function checkFavorites() {
    peoples.value = peoples.value?.map((people) => ({
      ...people,
      isFavorite: checkLocalStorageFavorite(people.name),
    }));

    if (currentPeople.value) {
      currentPeople.value = {
        ...currentPeople.value,
        isFavorite: checkLocalStorageFavorite(currentPeople.value?.name),
      };
    }
  }

  function toggleFavorite(item: IPeoples) {
    const index = peoples.value?.findIndex((person) => person.name === item.name);
    if (item.name === currentPeople.value?.name && currentPeople.value) {
      currentPeople.value.isFavorite = !currentPeople.value.isFavorite;
    }
    if (index !== undefined && index >= 0 && peoples.value) {
      peoples.value[index].isFavorite = !peoples.value[index].isFavorite;
    }

    localStorage.setItem(
      'tableFavorites',
      JSON.stringify(peoples.value?.filter((people) => people.isFavorite).map((people) => people)),
    );
    if (!item.isFavorite) {
      $notifications.addNotification(
        'gray',
        `Пользователь ${item.name} успешно добавлен в избранное`,
      );
    } else {
      $notifications.addNotification(
        'gray',
        `Пользователь ${item.name} успешно удален из избранного`,
      );
    }
  }

  async function fetchSearch(q: string) {
    isLoading.value = true;
    const { data } = await useFetch<IResponseData<IPeoples[]>>(
      `${baseUrl}/api/people/?search=${q}`,
    );
    searchResult.value = data.value?.results.map((item) => ({
      name: item.name,
      height: item.height,
      mass: item.mass,
      hair_color: item.hair_color,
      url: item.url,
      isFavorite: false,
    }));
    isLoading.value = false;
  }

  return {
    fetchPeoples,
    toggleFavorite,
    checkFavorites,
    fetchSearch,
    fetchPeople,
    peoples,
    favoritePeople,
    searchResult,
    isLoading,
    currentPeople,
  };
});
