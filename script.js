// 벨런스게임 문제들
const questions = [
    {
        question: "이상형 외모에서 가장 중요한 것은?",
        option1: "키가 크고 잘생긴 외모",
        option2: "평범하지만 스타일이 좋은 외모",
        traits1: ["키가 크고 잘생긴 외모", "시각적으로 매력적인 사람"],
        traits2: ["평범하지만 스타일이 좋은 외모", "개성 있는 매력"]
    },
    {
        question: "이상형 성격에서 가장 중요한 것은?",
        option1: "나를 무조건 챙겨주는 사람",
        option2: "나와 말이 잘 통하는 사람",
        traits1: ["나를 챙겨주는 성격", "헌신적인 사람"],
        traits2: ["말이 잘 통하는 성격", "소통 능력이 좋은 사람"]
    },
    {
        question: "데이트 장소 선호는?",
        option1: "화려한 레스토랑과 분위기 좋은 곳",
        option2: "편안한 카페나 산책하기 좋은 곳",
        traits1: ["화려한 분위기를 즐기는 사람", "로맨틱한 사람"],
        traits2: ["편안함을 중시하는 사람", "소박한 매력"]
    },
    {
        question: "상대방의 취미에 대한 생각은?",
        option1: "나와 같은 취미를 가진 사람",
        option2: "다른 취미를 가진 사람으로 서로 배우는 관계",
        traits1: ["나와 같은 취미를 가진 사람", "함께하는 것을 좋아하는 사람"],
        traits2: ["다른 취미를 가진 사람", "서로 배우는 관계를 즐기는 사람"]
    },
    {
        question: "연락 빈도에 대한 생각은?",
        option1: "하루에도 여러 번 연락하고 싶어",
        option2: "하루에 한 번 정도로 적당히 하고 싶어",
        traits1: ["자주 연락하는 사람", "애정 표현이 적극적인 사람"],
        traits2: ["적당한 연락을 하는 사람", "독립적인 사람"]
    },
    {
        question: "이상형의 직업이나 성취에서 중요한 것은?",
        option1: "성공하고 돈을 많이 버는 사람",
        option2: "자신의 일을 진심으로 사랑하는 사람",
        traits1: ["성공적인 사람", "경제력이 있는 사람"],
        traits2: ["자신의 일을 사랑하는 사람", "열정적인 사람"]
    },
    {
        question: "상대방의 외모 스타일 선호는?",
        option1: "세련되고 트렌디한 스타일",
        option2: "편안하고 캐주얼한 스타일",
        traits1: ["세련된 스타일", "트렌디한 사람"],
        traits2: ["편안한 스타일", "캐주얼한 매력"]
    },
    {
        question: "이상형의 연애 경험에 대한 생각은?",
        option1: "연애 경험이 많은 사람",
        option2: "연애 경험이 적은 순수한 사람",
        traits1: ["연애 경험이 많은 사람", "연애에 능숙한 사람"],
        traits2: ["연애 경험이 적은 사람", "순수한 사람"]
    },
    {
        question: "상대방의 유머 감각에서 중요한 것은?",
        option1: "언제나 웃게 만드는 재미있는 사람",
        option2: "진지할 때 진지하고 장난할 때 장난하는 사람",
        traits1: ["재미있는 사람", "유머 감각이 풍부한 사람"],
        traits2: ["상황에 맞는 사람", "밸런스 있는 사람"]
    },
    {
        question: "이상형의 SNS 사용 스타일은?",
        option1: "매일 포스팅하고 인생샷 많이 남기는 사람",
        option2: "가끔만 올리고 내 일을 잘 숨기는 사람",
        traits1: ["SNS 활발한 사람", "자기표현이 적극적인 사람"],
        traits2: ["SNS 조용한 사람", "프라이버시 중시하는 사람"]
    },
    {
        question: "연애 중 다퉜을 때 이상형의 대처는?",
        option1: "먼저 사과하고 화해하려는 사람",
        option2: "시간을 두고 생각한 후 이야기하는 사람",
        traits1: ["먼저 사과하는 사람", "화해를 원하는 사람"],
        traits2: ["신중한 사람", "충분히 생각하는 사람"]
    },
    {
        question: "이상형의 식성이나 음식 취향은?",
        option1: "맛집 탐방하고 좋은 음식 많이 아는 사람",
        option2: "집밥을 잘하고 건강한 음식을 좋아하는 사람",
        traits1: ["맛집 탐방가", "음식을 즐기는 사람"],
        traits2: ["요리 잘하는 사람", "건강 지향적인 사람"]
    },
    {
        question: "상대방의 집안일 능력은?",
        option1: "청소, 빨래, 요리 다 잘하는 사람",
        option2: "나를 도와주지만 완벽하진 않은 사람",
        traits1: ["집안일 잘하는 사람", "생활력이 좋은 사람"],
        traits2: ["도움을 주는 사람", "함께 노력하는 사람"]
    },
    {
        question: "싸웠을 때 어떤 상황이 더 낫다?",
        option1: "성격 좋지만 못생긴 사람이랑 싸움",
        option2: "성격 평범하지만 잘생긴 사람이랑 싸움",
        traits1: ["성격 좋은 사람", "이해심 있는 사람"],
        traits2: ["잘생긴 사람", "시각적 보상이 있는 사람"]
    }
];

let currentQuestion = 0;
let userTraits = [];

// DOM 요소
const startContainer = document.getElementById('start-container');
const questionText = document.getElementById('question-text');
const option1Btn = document.getElementById('option1');
const option2Btn = document.getElementById('option2');
const questionContainer = document.getElementById('question-container');
const previewContainer = document.getElementById('preview-container');
const previewList = document.getElementById('preview-list');
const resultContainer = document.getElementById('result-container');
const resultList = document.getElementById('result-list');
const startBtn = document.getElementById('start-btn');
const previewBtn = document.getElementById('preview-btn');
const backBtn = document.getElementById('back-btn');
const restartBtn = document.getElementById('restart-btn');

// 게임 시작
function startGame() {
    startContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion();
}

// 질문 미리보기
function showPreview() {
    startContainer.style.display = 'none';
    previewContainer.style.display = 'block';
    
    previewList.innerHTML = '';
    questions.forEach((q, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${index + 1}. ${q.question}</strong>
            <div class="option">A. ${q.option1}</div>
            <div class="option">B. ${q.option2}</div>
        `;
        previewList.appendChild(li);
    });
}

// 시작 화면으로 돌아가기
function goBack() {
    previewContainer.style.display = 'none';
    startContainer.style.display = 'block';
}

// 현재 질문 표시
function showQuestion() {
    const currentQ = questions[currentQuestion];
    questionText.textContent = currentQ.question;
    option1Btn.textContent = currentQ.option1;
    option2Btn.textContent = currentQ.option2;
}

// 선택지 클릭 처리
function handleOption(option) {
    const currentQ = questions[currentQuestion];
    
    if (option === 1) {
        userTraits.push(...currentQ.traits1);
    } else {
        userTraits.push(...currentQ.traits2);
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 결과 표시
function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // 중복 제거하고 결과 리스트 생성
    const uniqueTraits = [...new Set(userTraits)];
    
    uniqueTraits.forEach(trait => {
        const li = document.createElement('li');
        li.textContent = trait;
        resultList.appendChild(li);
    });
}

// 게임 재시작
function restartGame() {
    currentQuestion = 0;
    userTraits = [];
    resultList.innerHTML = '';
    resultContainer.style.display = 'none';
    startContainer.style.display = 'block';
}

// 이벤트 리스너
startBtn.addEventListener('click', startGame);
previewBtn.addEventListener('click', showPreview);
backBtn.addEventListener('click', goBack);
option1Btn.addEventListener('click', () => handleOption(1));
option2Btn.addEventListener('click', () => handleOption(2));
restartBtn.addEventListener('click', restartGame);
