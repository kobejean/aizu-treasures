---
title: Post One
date: "2022-03-15"
---

Hello, I am _Post One._

**Nice to meet you!**

<script>
    let count = 0

    function increase() {
        count += 1
    }
</script>
{count}
<button on:click={increase}>increase</button>

<style>
 button {
     color: pink;
 }
</style>