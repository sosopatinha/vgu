const questions = [
    { question: "1. Você prefere trabalhar em grupo?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "2. Você gosta de resolver problemas matemáticos?", options: ["Sim", "Não", "Às vezes"], category: "exatas" },
    { question: "3. Você se interessa por ciências naturais, como física e química?", options: ["Sim", "Não", "Às vezes"], category: "biologicas" },
    { question: "4. Você gosta de ler livros de ficção?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "5. Você tem interesse em novas tecnologias e inovações?", options: ["Sim", "Não", "Às vezes"], category: "exatas" },
    { question: "6. Você se sente bem ao lidar com pessoas?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "7. Você gosta de experimentar novas receitas?", options: ["Sim", "Não", "Às vezes"], category: "biologicas" },
    { question: "8. Você prefere trabalhos criativos?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "9. Você se interessa por história?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "10. Você gosta de realizar experimentos científicos?", options: ["Sim", "Não", "Às vezes"], category: "biologicas" },
    { question: "11. Você gosta de resolver quebra-cabeças?", options: ["Sim", "Não", "Às vezes"], category: "exatas" },
    { question: "12. Você gosta de trabalhar em projetos voluntários?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "13. Você se interessa por economia?", options: ["Sim", "Não", "Às vezes"], category: "exatas" },
    { question: "14. Você tem interesse em aprender sobre saúde e bem-estar?", options: ["Sim", "Não", "Às vezes"], category: "biologicas" },
    { question: "15. Você gosta de escrever?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "16. Você tem facilidade com números?", options: ["Sim", "Não", "Às vezes"], category: "exatas" },
    { question: "17. Você gosta de estudar ciências sociais?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "18. Você gosta de observar a natureza?", options: ["Sim", "Não", "Às vezes"], category: "biologicas" },
    { question: "19. Você se interessa por design e arte?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "20. Você gosta de programação?", options: ["Sim", "Não", "Às vezes"], category: "exatas" },
    { question: "21. Você gosta de fazer apresentações?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "22. Você gosta de esportes?", options: ["Sim", "Não", "Às vezes"], category: "biologicas" },
    { question: "23. Você se sente confortável ao lidar com estatísticas?", options: ["Sim", "Não", "Às vezes"], category: "exatas" },
    { question: "24. Você gosta de cinema e teatro?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "25. Você se interessa por genética?", options: ["Sim", "Não", "Às vezes"], category: "biologicas" },
    { question: "26. Você prefere trabalhar com dados?", options: ["Sim", "Não", "Às vezes"], category: "exatas" },
    { question: "27. Você gosta de ajudar outras pessoas?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "28. Você se sente bem ao falar em público?", options: ["Sim", "Não", "Às vezes"], category: "humanas" },
    { question: "29. Você gosta de estudar biologia?", options: ["Sim", "Não", "Às vezes"], category: "biologicas" },
    { question: "30. Você se interessa por matemática?", options: ["Sim", "Não", "Às vezes"], category: "exatas" }
];

let currentQuestionIndex = 0;
let scores = { humanas: 0, exatas: 0, biologicas: 0 };

function displayQuestion() {
    // Verifica se a questão existe
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        
        // Atualiza o texto da pergunta
        document.getElementById("question").innerText = question.question;
        
        // Atualiza as opções
        const options = document.querySelectorAll(".option-btn");
        options.forEach((btn, index) => {
            btn.innerText = question.options[index];
            btn.onclick = () => answerQuestion(index);
        });
    }
}

function answerQuestion(answerIndex) {
    const question = questions[currentQuestionIndex];
    const points = (answerIndex === 0) ? 1 : (answerIndex === 1) ? 0 : 0.5;

    // Atualiza a pontuação
    scores[question.category] += points;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        flipCard();
        setTimeout(displayQuestion, 600); // Atraso para animação
    } else {
        showResult();
    }
}

function flipCard() {
    const card = document.getElementById("quiz-card");
    card.classList.add("flip");
    setTimeout(() => card.classList.remove("flip"), 300); // Remove a classe após a animação
}

function showResult() {
    const result = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    // Atualiza o texto com o resultado
    document.getElementById("result-title").innerText = `Resultado: ${result.charAt(0).toUpperCase() + result.slice(1)}`;
    document.getElementById("result").classList.remove("hidden");
    document.querySelector(".options").style.display = "none"; // Oculta as opções ao final

    // Redireciona imediatamente após a última pergunta
    let redirectUrl = "";
    if (result === "biologicas") {
        redirectUrl = "resul_biologicas.html"; // Página de Ciências Biológicas
    } else if (result === "exatas") {
        redirectUrl = "resul_exatas.html"; // Página de Ciências Exatas
    } else if (result === "humanas") {
        redirectUrl = "resul_humanas.html"; // Página de Ciências Humanas
    }

    // Redireciona imediatamente sem esperar
    window.location.href = redirectUrl;
}

// Inicia o quiz
displayQuestion();
