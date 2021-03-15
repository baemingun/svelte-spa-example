<script lang="ts">
import type Post from "../models/Post";


  let post: Post;
  export let userId: number;
  export let title: string;
  export let content: string;
</script>

<style lang="scss">
  li {
    display: grid;
    grid-template-columns: 70px auto;
    column-gap: 15px;
    padding: 15px;
    background-color: #ffffff;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 10px;

    div.user-image-wrapper {
      width: 100%;
      height: 70px;
      box-sizing: border-box;
      border-radius: 25px;
      border: 1px solid #e6e6e6;
      background-color: #f6f6f6;
    }

    div.post-info-wrapper {
      width: 100%;
      box-sizing: border-box;
      padding-top: 4px;

      .user-info {
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 5px;
      }
      h2 {
        font-size: 16px;
        line-height: 20px;
        font-weight: bold;
        padding: 0;
        margin: 0;
        margin-bottom: 5px;
      }
      p {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
</style>

<!-- markup (zero or more items) goes here -->
<li>
  <div>
    <div class="user-image-wrapper"></div>
  </div>
  <div>
    <div class="post-info-wrapper">
      <div class="user-info">유저{userId}</div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </div>
</li>