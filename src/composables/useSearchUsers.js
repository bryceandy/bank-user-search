import { computed, ref } from 'vue'

export default function useSearchUsers (users) {
  const searchQuery = ref('')
  const usersMatchingSearchQuery = computed(() => users.filter(
    userObject => userObject.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  ))

  return { searchQuery, usersMatchingSearchQuery }
}
