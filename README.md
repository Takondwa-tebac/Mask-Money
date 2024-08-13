# use-mask-money

`use-mask-money` is a simple and reusable Nuxt 3 composable that allows you to toggle masking and unmasking of monetary values with ease. It's designed to work seamlessly in Nuxt 3 projects and provides a straightforward API.

## Installation

First, install the package via npm:

```bash
npm install use-mask-money
```

## Usage

After installation, you can import and use the `useMaskMoney` composable in your Nuxt 3 components.

### Basic Usage

The composable initializes with an `initialValue` and provides a method to toggle between the masked and unmasked states.

```vue
<template>
  <div>
    <button @click="toggleAmount">
      {{ displayAmount }}
    </button>
  </div>
</template>

<script setup>
import { useMaskMoney } from "use-mask-money";

// Initialize with the amount you want to manage
const { displayValue: displayAmount, toggleValue: toggleAmount } =
  useMaskMoney("10,000,000.00");
</script>
```

### Explanation

- **`useMaskMoney(initialValue)`**: Initializes the composable with the provided `initialValue`.
- **`displayValue`**: A computed property that returns the masked or unmasked value based on the internal visibility state.
- **`toggleValue`**: A function to toggle between the masked and unmasked states.

### Example with Multiple Values

You can use the composable to handle multiple amounts independently, allowing each amount to be toggled separately.

```vue
<template>
  <div>
    <button @click="toggleTraderAmount">
      {{ traderAmount.displayValue }}
    </button>
    <button @click="toggleBiwiAmount">
      {{ biwiAmount.displayValue }}
    </button>
  </div>
</template>

<script setup>
import { useMaskMoney } from "use-mask-money";

// Create instances for each amount
const traderAmount = useMaskMoney("10,000,000.00");
const biwiAmount = useMaskMoney("5,000,000.00");

// Destructure methods for toggling
const { toggleValue: toggleTraderAmount, displayValue: traderDisplayValue } =
  traderAmount;
const { toggleValue: toggleBiwiAmount, displayValue: biwiDisplayValue } =
  biwiAmount;
</script>
```

### Explanation

- **`useMaskMoney('10,000,000.00')`**: Initializes the composable for `traderAmount` with the specified value.
- **`useMaskMoney('5,000,000.00')`**: Initializes the composable for `biwiAmount` with a different value.
- **`toggleValue`**: Used to toggle the display of each amount between masked and unmasked states.
- **`displayValue`**: Provides the current value to be displayed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

```
