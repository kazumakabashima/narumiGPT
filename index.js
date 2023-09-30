function getAnswer() {
    const answers = [
        'まじぃ？',
        '今仕事中じゃけ、あとにして。',
        'PaaAN!',
        'いまは答えられんなぁ',
        'いま、うーんって感じ',
        'あとでしらべてみるわっ',
        'わからんからしゃーなし',
        'まぁ、あれがこうなってあーなる感じじゃねぇ～',
        'それはむずーしー',
    ];

    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

function getElements() {
    const message = document.getElementById('message');
    const sendBtn = document.getElementById('send');
    const list = document.getElementById('list');
    return { message, sendBtn, list };
}

const narumiGPT = () => {
    console.log('log: loadClear');

    const elements = getElements();
    console.log(`log: elements`, elements);

    elements.sendBtn.addEventListener('click', function (event) {
        event.preventDefault(); // フォームのデフォルトの送信を防止
        const question = elements.message.value;
        
        // 質問が空でない場合のみ処理を続行
        if (question.trim() !== '') {
            const randomAnswer = getAnswer();
            console.log(`log: question`, question);
            console.log(`log: answer`, randomAnswer);
    
            // 新しい要素を作成
            const questionElement = document.createElement('div');
            const answerElement = document.createElement('div');
    
            // 質問と回答を設定
            questionElement.textContent = question;
            answerElement.textContent = randomAnswer;
    
            // 質問と回答の要素をコンテナに追加
            elements.list.appendChild(questionElement);
            elements.list.appendChild(answerElement);
    
            // 入力フィールドをクリア
            elements.message.value = '';
        }
    });    
};

window.addEventListener('load', narumiGPT);
