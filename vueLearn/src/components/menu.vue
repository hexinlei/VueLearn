<template>
  <div>
    <aFolder :folder="menus" :breadcrumbs="breadcrumbs"></aFolder>
  </div>
  
</template>

<script>
  export default {
    name: 'menu',
    props: ['menus', 'breadcrumbs'],
    methods: {}
  }
</script>

