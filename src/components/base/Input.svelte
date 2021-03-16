<script lang="ts">
  export let value: string;
  export let placeholder: string = "";
</script>

<style lang="scss">
  input {
    position: relative;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 14px 12px 13px;
    margin: 0;
    font-size: 14px;
    letter-spacing: -0.35px;
    border-radius: 4px;
    border: none;
    background-color: #f6f6f6;
  }
</style>

<input type="text" placeholder={placeholder} bind:value={value}>