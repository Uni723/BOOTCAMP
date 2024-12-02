document.getElementById('imcForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const altura = parseFloat(document.getElementById('altura').value) / 100; 
    const peso = parseFloat(document.getElementById('peso').value);
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    if (altura > 0 && peso > 0 && idade > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else if (imc < 34.9) {
            classificacao = 'Obesidade grau 1';
        } else if (imc < 39.9) {
            classificacao = 'Obesidade grau 2';
        } else {
            classificacao = 'Obesidade grau 3';
        }

        // Exibir resultado básico
        document.getElementById('resultado').textContent = 
            `Seu IMC é ${imc} (${classificacao}). Sexo: ${sexo}, Idade: ${idade} anos.`;

        // Exibir explicação detalhada
        const detalhesDiv = document.getElementById('detalhes');
        let detalhes = '';

        if (sexo === 'homem') {
            detalhes += 'Homens tendem a ter uma proporção maior de massa muscular, o que pode influenciar o IMC. ';
        } else {
            detalhes += 'Mulheres geralmente possuem maior porcentagem de gordura corporal em comparação aos homens. ';
        }

        detalhes += `Como você tem ${idade} anos, é importante considerar que as necessidades nutricionais e de atividade física podem variar com a idade. `;

        if (classificacao === 'Abaixo do peso') {
            detalhes += 'Você está abaixo do peso ideal. Considere uma dieta equilibrada para ganhar massa de forma saudável.';
        } else if (classificacao === 'Peso normal') {
            detalhes += 'Parabéns! Seu peso está dentro do ideal. Mantenha uma dieta equilibrada e pratique atividades físicas.';
        } else if (classificacao === 'Sobrepeso') {
            detalhes += 'Você está com sobrepeso. Uma alimentação saudável e exercícios regulares podem ajudar.';
        } else {
            detalhes += 'Você está em uma faixa de obesidade. É recomendável buscar orientação médica para melhorar sua saúde.';
        }

        detalhesDiv.textContent = detalhes;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos!';
        document.getElementById('detalhes').textContent = '';
    }
});
