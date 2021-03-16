<script lang="ts">
  import Input from './base/Input.svelte';
  import Textarea from './base/Textarea.svelte';

  export let isWriting: boolean;

  let title = "";
  let content = "";
</script>

<style lang="scss">
  div.wrapper {
    background-color: #ffffff;
    margin-top: 10px;
    margin-bottom: 40px;
    padding: 15px;

    > div > p {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.25;
      letter-spacing: -0.24px;
      margin: 0;
      padding: 0;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    div:last-child {
      margin-top: 15px;
      width: 100%;
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 10px;

      button {
        font-size: 16px;
        line-height: 1.5;
        height: 50px;
        border-radius: 4px;
        border: 1px solid #d7d7d7;
        background-color: #ffffff;
      }

      button:last-child {
        background-color: #2ac1bc;
        border: 1px solid #2ac1bc;
        font-weight: bold;
        color: #ffffff;
      }
    }
  }
</style>
<div class="wrapper">
  <div>
    <p>제목</p>
    <Input bind:value={title} placeholder="제목을 입력하세요" />
  </div>
  <div>
    <p>내용</p>
    <Textarea bind:value={content} placeholder="내용을 입력하세요" />
  </div>
  <div>
    <button on:click={() => { isWriting = false }}>취소</button>
    <button on:click={() => { alert(`제목: ${title}\n내용: ${content}`) }}>제출</button>
  </div>
</div>