// CS S読み込み
import sheet from './styles.css' assert { type: 'css' };
document.adoptedStyleSheets = [sheet];



// 追加ボタンが押された時の処理
const onClickAdd = () => {
    
    // テキストボックスの値を取得する
    const inputText = document.getElementById("add-text").value;

    // テキストボックスの値を初期化する
    document.getElementById("add-text").value = "";

    // 未完了のTODOリストに追加する
    createImcompleteList(inputText);

}


// 未完了リストからタスクを削除
const deleteFromImcompleteList = (target) => {

    // 押された削除ボタンの親タグ(li)を取得する
    const deleteTarget = target.parentNode;

    // 未完了リストからタスクを削除する
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
    
}


// 未完了リストに追加する関数
const createImcompleteList = (text) => {

    // li生成
    const li = document.createElement("li");
    li.className = "row";
    

    // p生成
    const p = document.createElement("p");
    p.innerText = text;


    // 完了ボタン生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {

        // 押された完了ボタンのタスクを未完了リストから削除する
        deleteFromImcompleteList(completeButton);

        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;

        // 完了リストに追加する要素のテキスト
        const addTargetText = addTarget.firstElementChild.innerText;

        // liタグ以下を初期化
        addTarget.textContent = null;

        // pタグを生成する
        const p = document.createElement("p");
        p.innerText = addTargetText;

        // 戻すボタンを生成する
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
        
            // 押された戻すボタンの親タグ(li)を完了リストから削除
            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);

            // テキスト取得
            const text = backButton.parentNode.firstElementChild.innerText;
            createImcompleteList(text);

        });

        // liタグにpタグを追加する
        addTarget.appendChild(p);
        addTarget.appendChild(backButton);

        // 完了リストに追加する
        document.getElementById("complete-list").appendChild(addTarget);

    });  


    // 削除ボタン生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
    
        // 押された削除ボタンの親タグを未完了リストから削除する
        deleteFromImcompleteList(deleteButton);

    });


    // liの子要素にp, 完了ボタン, 削除ボタンを追加
    li.appendChild(p);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // 未完了のTODOに追加
    document.getElementById("imcomplete-list").appendChild(li);

}
