<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
  name: "G-Button",

  setup() {
    const test = () => {
      console.log(2);
    };
    return {
      test,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>