document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
        // Obtem a URL base do endpoint do back-end
        const configResponse = await fetch('/api/config');
        const configData = await configResponse.json();
        const apiBaseUrl = configData.apiBaseUrl;

        const response = await fetch(`${apiBaseUrl}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            this.reset();
        } else {
            alert('Erro ao enviar mensagem.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar mensagem.');
    }
});
