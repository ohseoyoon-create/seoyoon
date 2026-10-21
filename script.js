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
let userAnswers = [];

// DOM 요소
const startContainer = document.getElementById('start-container');
const questionText = document.getElementById('question-text');
const option1Btn = document.getElementById('option1');
const option2Btn = document.getElementById('option2');
const questionContainer = document.getElementById('question-container');
const previewContainer = document.getElementById('preview-container');
const previewList = document.getElementById('preview-list');
const resultContainer = document.getElementById('result-container');
const startBtn = document.getElementById('start-btn');
const previewBtn = document.getElementById('preview-btn');
const backBtn = document.getElementById('back-btn');
const restartBtn = document.getElementById('restart-btn');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const prevBtn = document.getElementById('prev-btn');
const shareBtn = document.getElementById('share-btn');
const resultCard = document.getElementById('result-card');

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

    // 진행 바 업데이트
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `${currentQuestion + 1} / ${questions.length}`;

    // 이전 버튼 상태
    prevBtn.disabled = currentQuestion === 0;
}

// 선택지 클릭 처리
function handleOption(option) {
    const currentQ = questions[currentQuestion];

    // 답변 저장
    userAnswers[currentQuestion] = option;

    // 특성 업데이트
    userTraits = [];
    for (let i = 0; i <= currentQuestion; i++) {
        const q = questions[i];
        if (userAnswers[i] === 1) {
            userTraits.push(...q.traits1);
        } else {
            userTraits.push(...q.traits2);
        }
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 이상형 타입 분석
function analyzeType() {
    let scores = {
        romantic: 0,
        realistic: 0,
        trendy: 0,
        calm: 0
    };

    // 답변에 따라 점수 계산
    if (userAnswers[0] === 1) scores.romantic += 2; // 키 크고 잘생긴
    if (userAnswers[0] === 2) scores.realistic += 2; // 스타일 좋은

    if (userAnswers[1] === 1) scores.romantic += 2; // 챙겨주는
    if (userAnswers[1] === 2) scores.realistic += 2; // 말 통하는

    if (userAnswers[2] === 1) scores.romantic += 2; // 화려한 레스토랑
    if (userAnswers[2] === 2) scores.calm += 2; // 편안한 카페

    if (userAnswers[3] === 1) scores.romantic += 1; // 같은 취미
    if (userAnswers[3] === 2) scores.realistic += 1; // 다른 취미

    if (userAnswers[4] === 1) scores.romantic += 2; // 자주 연락
    if (userAnswers[4] === 2) scores.calm += 2; // 적당히

    if (userAnswers[5] === 1) scores.realistic += 2; // 성공/돈
    if (userAnswers[5] === 2) scores.romantic += 2; // 일을 사랑

    if (userAnswers[6] === 1) scores.trendy += 2; // 세련된
    if (userAnswers[6] === 2) scores.calm += 2; // 편안한

    if (userAnswers[7] === 1) scores.trendy += 1; // 연애 경험 많은
    if (userAnswers[7] === 2) scores.calm += 1; // 순수한

    if (userAnswers[8] === 1) scores.trendy += 2; // 재미있는
    if (userAnswers[8] === 2) scores.calm += 2; // 밸런스 있는

    if (userAnswers[9] === 1) scores.trendy += 2; // SNS 활발
    if (userAnswers[9] === 2) scores.calm += 2; // SNS 조용

    if (userAnswers[10] === 1) scores.romantic += 1; // 먼저 사과
    if (userAnswers[10] === 2) scores.calm += 1; // 신중

    if (userAnswers[11] === 1) scores.trendy += 1; // 맛집 탐방
    if (userAnswers[11] === 2) scores.realistic += 1; // 요리 잘함

    if (userAnswers[12] === 1) scores.realistic += 2; // 집안일 완벽
    if (userAnswers[12] === 2) scores.romantic += 1; // 같이 노력

    if (userAnswers[13] === 1) scores.realistic += 2; // 성격 좋은
    if (userAnswers[13] === 2) scores.trendy += 2; // 잘생긴

    // 가장 높은 점수 타입 찾기
    const maxScore = Math.max(...Object.values(scores));
    const dominantType = Object.keys(scores).find(key => scores[key] === maxScore);

    const types = {
        romantic: {
            title: "로맨틱 드림형 💕",
            description: "나를 무조건 챙겨주고, 화려한 데이트를 즐기며, 자주 연락하는 당신의 이상형은 로맨틱한 분위기를 선호합니다. 감정 표현이 풍부하고 연애에 열정적인 사람을 찾고 있어요."
        },
        realistic: {
            title: "현실 실속형 💼",
            description: "성공적이고, 집안일을 잘하며, 현실적인 조건을 중요하게 생각하는 당신의 이상형은 안정적인 관계를 원합니다. 실속과 책임감을 중요하게 여기는 사람을 찾고 있어요."
        },
        trendy: {
            title: "트렌디 활기찬형 ✨",
            description: "세련되고, 재미있으며, SNS를 즐기는 당신의 이상형은 새로운 것을 좋아하고 활기찬 분위기를 선호합니다. 함께 즐겁게 놀 수 있는 사람을 찾고 있어요."
        },
        calm: {
            title: "차분한 여유형 🌿",
            description: "편안함을 중시하고, 밸런스가 있으며, 신중하게 생각하는 당신의 이상형은 차분하고 여유로운 관계를 원합니다. 서로를 존중하는 안정적인 사람을 찾고 있어요."
        }
    };

    return types[dominantType];
}

// 결과 표시
function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    // 타입 분석
    const type = analyzeType();
    document.getElementById('type-title').textContent = type.title;
    document.getElementById('type-description').textContent = type.description;

    // 특성을 카테고리별로 그룹화하고 중복 제거
    const categories = {
        외모매력: new Set(),
        챙겨줌: new Set(),
        소통: new Set(),
        화려분위기: new Set(),
        편안분위기: new Set(),
        연락: new Set(),
        성공: new Set(),
        열정: new Set(),
        세련스타일: new Set(),
        편안스타일: new Set(),
        연애경험: new Set(),
        순수: new Set(),
        유머: new Set(),
        밸런스: new Set(),
        SNS활발: new Set(),
        SNS조용: new Set(),
        사과: new Set(),
        신중: new Set(),
        맛집: new Set(),
        요리: new Set(),
        집안일: new Set(),
        도움: new Set(),
        성격좋음: new Set(),
        잘생김: new Set()
    };

    const uniqueTraits = [...new Set(userTraits)];

    uniqueTraits.forEach(trait => {
        if (trait.includes('외모') || trait.includes('매력') || trait.includes('시각')) {
            categories.외모매력.add('외모가 매력적인 사람');
        }
        if (trait.includes('챙겨') || trait.includes('헌신')) {
            categories.챙겨줌.add('나를 챙겨주는 성격');
        }
        if (trait.includes('통하는') || trait.includes('소통')) {
            categories.소통.add('말이 잘 통하는 성격');
        }
        if (trait.includes('화려') || trait.includes('로맨틱')) {
            categories.화려분위기.add('화려한 분위기를 즐기는 사람');
        }
        if (trait.includes('편안') && !trait.includes('스타일')) {
            categories.편안분위기.add('편안한 분위기를 즐기는 사람');
        }
        if (trait.includes('연락') || trait.includes('애정')) {
            categories.연락.add('자주 연락하는 사람');
        }
        if (trait.includes('성공') || trait.includes('경제력')) {
            categories.성공.add('성공적인 사람');
        }
        if (trait.includes('열정') || trait.includes('사랑')) {
            categories.열정.add('열정적인 사람');
        }
        if (trait.includes('세련') || trait.includes('트렌')) {
            categories.세련스타일.add('세련된 스타일');
        }
        if (trait.includes('캐주얼') || (trait.includes('편안') && trait.includes('스타일'))) {
            categories.편안스타일.add('편안한 스타일');
        }
        if (trait.includes('연애 경험') || trait.includes('능숙')) {
            categories.연애경험.add('연애 경험이 있는 사람');
        }
        if (trait.includes('순수')) {
            categories.순수.add('순수한 사람');
        }
        if (trait.includes('재미') || trait.includes('유머')) {
            categories.유머.add('유머 감각이 좋은 사람');
        }
        if (trait.includes('밸런스') || trait.includes('상황')) {
            categories.밸런스.add('밸런스 있는 사람');
        }
        if (trait.includes('SNS') && trait.includes('활발')) {
            categories.SNS활발.add('SNS를 활발하게 사용하는 사람');
        }
        if (trait.includes('SNS') && trait.includes('조용')) {
            categories.SNS조용.add('SNS를 조용하게 사용하는 사람');
        }
        if (trait.includes('사과') || trait.includes('화해')) {
            categories.사과.add('먼저 사과하는 사람');
        }
        if (trait.includes('신중') || trait.includes('충분히')) {
            categories.신중.add('신중한 사람');
        }
        if (trait.includes('맛집') || trait.includes('음식')) {
            categories.맛집.add('맛집 탐방을 좋아하는 사람');
        }
        if (trait.includes('요리') || trait.includes('건강')) {
            categories.요리.add('요리를 잘하는 사람');
        }
        if (trait.includes('집안일') || trait.includes('생활력')) {
            categories.집안일.add('집안일을 잘하는 사람');
        }
        if (trait.includes('도움') || trait.includes('노력')) {
            categories.도움.add('함께 노력하는 사람');
        }
        if (trait.includes('성격 좋')) {
            categories.성격좋음.add('성격이 좋은 사람');
        }
        if (trait.includes('잘생') && !trait.includes('매력')) {
            categories.잘생김.add('잘생긴 사람');
        }
    });

    // 각 카테고리에서 하나씩만 선택
    const sentences = [];
    Object.values(categories).forEach(set => {
        if (set.size > 0) {
            sentences.push(Array.from(set)[0]);
        }
    });

    // 문장들을 자연스럽게 연결
    let summary = '';
    if (sentences.length > 0) {
        if (sentences.length === 1) {
            summary = sentences[0] + '을/를 선호합니다.';
        } else if (sentences.length === 2) {
            summary = sentences[0] + '이면서 ' + sentences[1] + '을/를 선호합니다.';
        } else {
            const last = sentences.pop();
            summary = sentences.join(', ') + ', 그리고 ' + last + '을/를 선호합니다.';
        }
    } else {
        summary = '다양한 매력을 가진 사람을 선호합니다.';
    }

    document.getElementById('result-summary').textContent = summary;
}

// 게임 재시작
function restartGame() {
    currentQuestion = 0;
    userTraits = [];
    userAnswers = [];
    document.getElementById('result-summary').textContent = '';
    resultContainer.style.display = 'none';
    startContainer.style.display = 'block';
}

// 이전 질문으로 이동
function goPrev() {
    if (currentQuestion > 0) {
        currentQuestion--;

        // 특성 업데이트
        userTraits = [];
        for (let i = 0; i < currentQuestion; i++) {
            const q = questions[i];
            if (userAnswers[i] === 1) {
                userTraits.push(...q.traits1);
            } else {
                userTraits.push(...q.traits2);
            }
        }

        showQuestion();
    }
}

// 이벤트 리스너
startBtn.addEventListener('click', startGame);
previewBtn.addEventListener('click', showPreview);
backBtn.addEventListener('click', goBack);
option1Btn.addEventListener('click', () => handleOption(1));
option2Btn.addEventListener('click', () => handleOption(2));
restartBtn.addEventListener('click', restartGame);
prevBtn.addEventListener('click', goPrev);
shareBtn.addEventListener('click', shareResult);

// 결과 이미지로 공유
function shareResult() {
    html2canvas(resultCard).then(canvas => {
        const link = document.createElement('a');
        link.download = '이상형_분석결과.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
