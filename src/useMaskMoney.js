// src/useMaskMoney.js

import { ref, computed } from 'vue';

export const useMaskMoney = (initialValue) => {
  const originalValue = ref(initialValue);
  const isVisible = ref(true);

  const toggleValue = () => {
    isVisible.value = !isVisible.value;
  };

  const displayValue = computed(() => {
    return isVisible.value ? originalValue.value : originalValue.value.replace(/\d/g, '*');
  });

  return { displayValue, toggleValue };
};

