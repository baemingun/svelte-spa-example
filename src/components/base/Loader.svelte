<script lang="ts">
  export let isLoading: boolean;
</script>

<style lang="scss">
  div.loader-wrapper {
    z-index: 10000;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      display: inline-block;
      box-sizing: border-box;
      border-radius: 50%;
      background: rgba(34, 34, 34, 0.7);
      padding: 10px;

      img {
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
  }
</style>

{#if isLoading}
<div class="loader-wrapper">
  <div>
    <img src="/images/loading-gray.gif" alt="로딩중">
  </div>
</div>
{/if}
