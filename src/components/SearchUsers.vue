<template>
  <div class="relative max-w-[320px]">
    <svg id="search-icon" class="w-5 h-5 fill-current absolute transform translate-y-3/4 translate-x-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30 28.59 22.45 21A11 11 0 1 0 21 22.45L28.59 30ZM5 14a9 9 0 1 1 9 9 9 9 0 0 1-9-9Z" /><path fill="none" d="M0 0h32v32H0z" /></svg>
    <input
      class="rounded-full pl-8 pr-6 py-3 border focus:outline-none focus:ring-2 focus:ring-offset-2
      focus:ring-emerald-200 w-full"
      placeholder="Search bank users..."
      v-model="searchQuery"
    />
    <div
      id="users-list"
      class="py-2 flex flex-col absolute top-[110%] left-0 h-auto w-full z-10 rounded-lg bg-green-50"
      v-show="displayUsersList()"
    >
      <a
        href="#"
        class="block hover:bg-emerald-100 py-2 px-4 text-left"
        v-for="{ id, name } in usersToDisplay()"
        :key="id"
      >
        {{ name }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue'
import useListUsers from '@/composables/useListUsers'
import useSearchUsers from '@/composables/useSearchUsers'

const props = defineProps({ bankId: String })
const { users } = useListUsers(toRef(props, 'bankId'))
const { searchQuery, usersMatchingSearchQuery } = useSearchUsers(users)

const displayUsersList = () => users.length > 0 || usersMatchingSearchQuery.value.length > 0
const usersToDisplay = () => usersMatchingSearchQuery.value.length ? usersMatchingSearchQuery.value : users
</script>
