const motherTypes = {

  1: {
    icon: "🔥",
    name: "引っ張る母ちゃん",
    description:
      "「大丈夫！私についてきな！」と家族を引っ張っていく頼れる母ちゃん。",
    mother:
      "家族を守ろうとする気持ちが強く、何かあったときには先頭に立って動くタイプ。",
    child:
      "「やってみな！」と挑戦する勇気を与えるのが得意。",
    angry:
      "思ったことをハッキリ言うタイプ。でも怒った後は意外とサッパリ。",
    charm:
      "頼れる存在感。子どもにとって「困ったときに頼れる母ちゃん」になりやすいです。"
  },

  2: {
    icon: "🐰",
    name: "寄り添う母ちゃん",
    description:
      "子どもの気持ちを大切にする、優しく温かな母ちゃん。相手の変化にもよく気がつきます。",
    mother:
      "子どもの気持ちを第一に考え、そっと支えてあげるタイプ。",
    child:
      "話を聞いてあげることが得意。安心できる居場所を作ります。",
    charm:
      "優しさと共感力。子どもが安心して戻ってこられる人です。"
  },

  3: {
    icon: "🏃",
    name: "楽しい母ちゃん",
    description:
      "明るく楽しいことが大好き！家庭に笑いを作るムードメーカータイプです。",
    mother:
      "子どもと一緒に楽しむことが得意。家族の思い出をたくさん作ります。",
    child:
      "「楽しそう！」を大切にして、子どもの自由な発想を応援します。",
    angry:
      "怒っていたのに、途中で自分が笑ってしまうことも。",
    charm:
      "明るさと遊び心。家の中をパッと明るくできる存在です。"
  },

  4: {
    icon: "👷‍♀️",
    name: "守る母ちゃん",
    description:
      "家族の土台をしっかり作る、安定感のある母ちゃんです。",
    mother:
      "生活のリズムやルールを大切にし、家族を安定させます。",
    child:
      "「これは大丈夫」「これは危ない」と、安心できる道を教えてあげます。",
    angry:
      "小さなことまで気になってしまい、「ちゃんとして！」が多くなる。",
    charm:
      "責任感と安定感。子どもに安心感を与えられる母ちゃんです。"
  },

  5: {
    icon: "🆓",
    name: "自由な母ちゃん",
    description:
      "自由と冒険が大好き！子どもの「やってみたい」を応援する母ちゃんです。",
    mother:
      "型にはめるよりも、子どもの個性を伸ばしたいタイプ。",
    child:
      "「やってみればいいじゃん！」と背中を押します。",
    angry:
      "同じことを何度も言うのが苦手。限界が来ると突然爆発する。",
    charm:
      "柔軟さと行動力。子どもに「自由に生きていい」が大事。"
  },

  6: {
    icon: "💛",
    name: "愛情たっぷり母ちゃん",
    description:
      "家族への愛情が深く、みんなを包み込む温かな母ちゃんです。",
    mother:
      "家族のことをいつも気にかけ、困っている人を放っておけません。",
    child:
      "たくさん褒めて、たくさん愛情を伝えるタイプ。",
    angry:
      "「あなたのために言ってるの！」が増える。",
    charm:
      "愛情と包容力。家族にとって心のよりどころになれる人です。"
  },

  7: {
    icon: "🌟",
    name: "見守る母ちゃん",
    description:
      "子どもをよく観察し、必要なときにそっと手を差し伸べる母ちゃんです。",
    mother:
      "ベタベタしすぎず、子どもの世界を尊重します。",
    child:
      "すぐに答えを教えず、自分で考える時間を与えます。",
    angry:
      "静かになるタイプ。怒っているときほど口数が少なくなる。",
    charm:
      "洞察力と冷静さ。子どもの個性をじっくり見つめられます。"
  },

  8: {
    icon: "🦁",
    name: "たくましい母ちゃん",
    description:
      "「大丈夫！」と家族を力強く支える、パワフルな母ちゃんです。",
    mother:
      "いざというときの行動力があり、家族を守る力があります。",
    child:
      "自分の力で人生を切り開く強さを教えます。",
    angry:
      "声が大きくなりやすい。でも本当は家族を心配している証拠。",
    charm:
      "強さと頼もしさ。何があっても家族を守ろうとする愛があります。"
  },

  9: {
    icon: "🐋",
    name: "包み込む母ちゃん",
    description:
      "広い心で家族を受け止める、包容力たっぷりの母ちゃんです。",
    mother:
      "多少のことでは動じず、子どもの失敗も受け止められます。",
    child:
      "「大丈夫だよ」と安心させることが得意。",
    angry:
      "普段優しいぶん、久々に怒ると子どもが驚く。",
    charm:
      "大きな愛と包容力。どんなときも味方でいてくれる存在です。"
  },

  11: {
    icon: "✨",
    name: "直感母ちゃん",
    description:
      "子どものちょっとした変化を感じ取る、直感力のある母ちゃんです。",
    mother:
      "言葉にされなくても「なんか今日いつもと違う？」と気づきます。",
    child:
      "子どもの気持ちを察しながら、必要なときにサポートします。",
    angry:
      "感情が一気に高まることも。でも切り替えも早いタイプ。",
    charm:
      "直感力と感受性。子どもの小さな変化に気づけるところが魅力です。"
  }

};


function calculateNumber(year, month, day) {

  let numbers =
    String(year) +
    String(month) +
    String(day);

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {

    let digits = String(sum).split("");

    sum = digits.reduce(
      (total, digit) => total + Number(digit),
      0
    );

  }

  return sum;
}


function diagnose() {

  const year =
    Number(document.getElementById("year").value);

  const month =
    Number(document.getElementById("month").value);

  const day =
    Number(document.getElementById("day").value);


  if (!year || !month || !day) {

    alert("生年月日を入力してください🌷");

    return;
  }


  const number =
    calculateNumber(year, month, day);


  /*
    22・33は今回は
    4・6として扱います
  */

  let typeNumber = number;

  if (number === 22) {
    typeNumber = 4;
  }

  if (number === 33) {
    typeNumber = 6;
  }


  const type =
    motherTypes[typeNumber];


  document.getElementById("resultIcon").textContent =
    type.icon;

  document.getElementById("typeName").textContent =
    type.name;

  document.getElementById("typeNumber").textContent =
    "数秘 " + number;

  document.getElementById("typeDescription").textContent =
    type.description;

  document.getElementById("motherText").textContent =
    type.mother;

  document.getElementById("childText").textContent =
    type.child;

  document.getElementById("angryText").textContent =
    type.angry;

  document.getElementById("charmText").textContent =
    type.charm;


  document.querySelector(".intro").classList.add("hidden");

  document.getElementById("result").classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function resetDiagnosis() {

  document.getElementById("result").classList.add("hidden");

  document.querySelector(".intro").classList.remove("hidden");

  document.getElementById("year").value = "";
  document.getElementById("month").value = "";
  document.getElementById("day").value = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
