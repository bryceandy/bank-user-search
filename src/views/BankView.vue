<template>
  <div class="px-5 sm:px-8 lg:px-20 lg:pb-12">
    <h1 class="text-5xl font-bold">Bank Users</h1>
    <div class="my-6 flex items-center gap-2 border-b border-emerald-400 pb-4">
      <label for="select-bank">Please select your bank:</label>
      <select
        id="select-bank"
        class="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-200"
        v-model="activeBank"
        name="select-bank"
      >
        <option :value="id" v-for="{ id, name } in banks" :key="id">{{ name }}</option>
      </select>
    </div>
    <search-users :bank-id="activeBank" />
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import SearchUsers from '@/components/SearchUsers'
import { ref } from 'vue'

const { banks } = sourceData
const activeBank = ref(banks[0].id)
</script>
