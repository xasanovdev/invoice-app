<template>
  <input
    type="text"
    :value="getPropertyValue()"
    @input="updateValue"
    class="py-3 px-4 w-full rounded-md duration-200 dark:bg-dark1 outline-none font-bold border border-light1 hover:border-indigo-400 dark:border-dark2 dark:hover:border-indigo-400 text-light4 dark:text-white"
  />
</template>

<script setup>
import {
  defineProps,
  ref,
} from 'vue';

const props = defineProps(['property', 'dataObject']);

console.log(props);

const getPropertyValue = () => {
  const properties = props.property ? props.property.split('.') : [];
  let value = props.dataObject?.[0];

  for (const prop of properties) {
    value = value?.[prop];
  }

  return value;
};

const updateValue = (event) => {
  if (props.dataObject.value && props.dataObject.value[0]) {
    const properties = props.property ? props.property.split('.') : [];
    let nestedObject = props.dataObject.value[0];

    for (let i = 0; i < properties.length - 1; i++) {
      nestedObject = nestedObject?.[properties[i]];

      if (!nestedObject) {
        console.warn(
          `Nested object is null or undefined for property ${props.property}`
        );
        return;
      }
    }

    nestedObject[properties[properties.length - 1]] = event.target.value;
  } else {
    console.warn(
      `dataObject or dataObject[0] is null or undefined for property ${props.property}`
    );
  }
};
</script>

<style></style>
