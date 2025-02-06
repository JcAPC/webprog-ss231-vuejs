<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const countries = ref([])

async function getCountries() {
  try {
    const { data, error } = await supabase.from('countries').select()
    
    if (error) {
      throw new Error(error.message)
    }

    countries.value = data
  } catch (err) {
    console.error('Error fetching countries:', err)
  }
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <div>
    <h1>Countries</h1>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>

    <h1>Food</h1>
    <food-item/> <br>
    <food-item2/> <br>
    <personal-profile/>
  </div>
</template>

<style></style>