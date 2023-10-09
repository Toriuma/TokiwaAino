window.addEventListener("DOMContentLoaded", function() {
    // ページの読み込みが完了した時に実行されるコード
    setTimeout(function() {
      // 3秒後にローディング画面を非表示にする
      var loader = document.getElementById("loader");
      loader.style.display = "none";
    }, 2000); // 2000ミリ秒 (2秒)
  });

 
  const element = document.getElementById("vtuber");
  const rect = element.getBoundingClientRect();
  const offsetTop = rect.top + window.pageYOffset;

  console.log(offsetTop);

  const mokuji1 = document.getElementById("mokuji1");
  mokuji1.addEventListener("click", function() {
    window.scrollTo({
      top: offsetTop - 65,
      behavior: "smooth" // スムーズスクロールする場合
    });
  });


  const mokuji2 = document.getElementById("mokuji2");
  mokuji2.addEventListener("click", function() {
    window.scrollTo({
      top: offsetTop + 170,
      behavior: "smooth" // スムーズスクロールする場合
    });
  });

  const mokuji3 = document.getElementById("mokuji3");
  mokuji3.addEventListener("click", function() {
    window.scrollTo({
      top: offsetTop + 750,
      behavior: "smooth" // スムーズスクロールする場合
    });
  });

  const mokuji4 = document.getElementById("mokuji4");
  mokuji4.addEventListener("click", function() {
    window.scrollTo({
      top: offsetTop + 1000,
      behavior: "smooth" // スムーズスクロールする場合
    });
  });
