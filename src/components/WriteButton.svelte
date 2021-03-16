<script lang="ts">
  export let onClick: () => void;
</script>

<style lang="scss">
  button {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 10px;
    right: 10px;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: #2ac1bc;
    background-image: url('/images/write-eval.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 40% 40%;
    border: none;
    border-radius: 50%;
  }
</style>

<button on:click={onClick}></button>