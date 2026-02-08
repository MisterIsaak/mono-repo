import { ref } from 'vue'

/**
 * Example composable
 */
export function useExample() {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--

  return {
    count,
    increment,
    decrement,
  }
}
