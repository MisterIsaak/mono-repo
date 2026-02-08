<template>
  <div class="demo-app">
    <h1>{{ capitalize('demo app') }} - @misterisaak/ui</h1>
    
    <div class="section">
      <h2>useExample Composable</h2>
      <p>Count: {{ count }}</p>
      <div class="button-group">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
      </div>
    </div>

    <div class="section">
      <h2>capitalize Utility</h2>
      <p>Input: "hello world"</p>
      <p>Output: "{{ capitalize('hello world') }}"</p>
    </div>

    <div class="section">
      <h2>Counter Example</h2>
      <p>Local Counter: {{ localCount }}</p>
      <div class="button-group">
        <button @click="localCount++">+1</button>
        <button @click="localCount--">-1</button>
        <button @click="localCount = 0">Reset</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useExample, capitalize } from '@misterisaak/ui'

// Using the useExample composable
const { count, increment, decrement } = useExample()

// Local reactive state
const localCount = ref(0)
</script>

<style scoped>
.demo-app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

h1 {
  color: #42b983;
  margin-bottom: 2rem;
}

h2 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

p {
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.button-group {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #42b983;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #359268;
}

button:active {
  background-color: #2d7a56;
}
</style>
