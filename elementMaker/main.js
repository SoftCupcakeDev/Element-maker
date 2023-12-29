//body
const body = document.querySelector("body");

//tokenizer
function tokenizer(Var,symbol){
    let words = Var.split(symbol);
    return words;
}

//cake obj
const ElementMaker = {
    ce : function(varl){
        //여기서 변수를 ,기준으로 잘라서 
        let words = tokenizer(varl, ",");
        
        //요기서 엘러먼트로 만들어줌
        const createEle = document.createElement(words[ 0 ]);
        
        //생성된 엘러먼트에 택스트를 넣어주는 함수
        createEle.innerText = words[ 1 ];

        //id, class를 넣어주는 부분
        createEle.id = words[ 2 ];
        createEle.classList.add(words[ 3 ]);
        //생성이 되었나 확인하는 log를 할건지 선택하는 if문
        console.log(createEle);
    }
    
}

export{
    body,
    tokenizer,
    ElementMaker
}