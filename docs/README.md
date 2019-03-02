# 深入理解 TypeScript

此书是 [《TypeScript Deep Dive》](https://github.com/basarat/typescript-book/) 的中文翻译版，感谢作者 [Basarat](https://github.com/basarat) 的付出。

## Why

<img :src="$withBase('/typescript-downloads.jpg')" alt="ide"/>

> 数据来源：[npm 包下载量](https://npm-stat.com/charts.html?package=typescript&from=2016-01-01&to=2018-07-31)

如你所见，TypeScript 发展至今，已经成为大型项目的标配，其提供的静态类型系统，大大增强了代码的可读性以及可维护性；同时，它提供最新和不断发展的 JavaScript 特性，能让我们建立更健壮的组件。

[《TypeScript Deep Dive》](https://github.com/basarat/typescript-book/) 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老鸟，它都将适应你。此外，它不同于 TypeScript 官方给出的文档（当然 TypeScript 给出的文档是很好的），在此书中，结合实际应用下的场景用例，你将能更深入的理解 TypeScript。

如今社区已经存在部分翻译，但都似乎已经停止更新。

于是在某天的某个冲动之下，这个 RP 就诞生了。

## 翻译内容

《TypeScript Deep Dive》 书中包含一部分 JavaScript Future 和一些其他的内容，在这里，我们并不打算翻译它，如果你有兴趣，可以查看原书中 [JavaScript Future](https://basarat.gitbooks.io/typescript/content/docs/future-javascript.html) 的有关章节。

由于 TypeScript 更新频繁，在此书中，我也将加入一些原书中并没有涉及到的知识点，希望和大家相互学习，一起进步。

此外，在不违背原作者本意前提下，为了更直观的表达，部分内容将采用意译，而非直译。

## How to contribute

你可以：

- 通过 PR 修改错别字，或者错误的格式；
- 发 issue 讨论文章中出现的一些不合理地方；
- 翻译 TODO 文件夹下的文章，并顺手 Email 我。

希望你在翻译或者 PR 之前，阅读[中文文章排版指北](https://github.com/mzlogin/chinese-copywriting-guidelines)。

## 最后

如果你和我一样对 TypeScript 充满兴趣，可以订阅（star）本项目，及时收到有关于此项目的更新。

如果你对文章有任何疑问，欢迎提交 [issues](https://github.com/jkchao/typescript-book-chinese/issues) 和我交流。

如果你认为有些地方翻译不够准确，或者你想补充一些文中没提到但是非常有意思的知识点，欢迎 [PR](https://github.com/jkchao/typescript-book-chinese/pulls)。

赞赏支持：

<style>
.appreciate {
  display: flex;
  justify-content: space-around;
}

.appreciate-item {
  text-align: center;
}

@media (max-width: 719px) {
  .appreciate {
    flex-wrap: wrap;
  }

  .appreciate-item {
    width: 100%;
  }
}


</style>

<div class="appreciate">
  <div class="appreciate-item">
    <img :src="$withBase('/wechat.jpg')" width="200" alt="微信">
    <p>微信</p>
  </div>

  <div class="appreciate-item">
    <img :src="$withBase('/zhifubao.jpg')" width="200" alt="支付宝">
    <p>支付宝</p>
  </div>
</div>
