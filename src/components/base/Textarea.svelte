<script lang="ts">
  export let value: string;
  export let placeholder: string = "";
</script>

<style lang="scss">
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    border: none;
    vertical-align: middle;
    resize: none;
    outline: none;
    font-size: 14px;
    letter-spacing: -0.35px;
    color: #222222;
    background-color: #f6f6f6;
    border-radius: 4px;
    padding: 15px 13px;

    :focus {
      border: none;
    }
  }
</style>

<textarea type="text" placeholder={placeholder} bind:value={value}></textarea>
