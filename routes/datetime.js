const express = require('express');
const router = express.Router();

router.get('/datetime/:locale', (req, res) => {
  const now = new Date();
  const locale = req.params.locale || 'pt-BR';

  try {
    const dataFormatada = now.toLocaleDateString(locale, {
      timeZone: 'America/Sao_Paulo'
    });

    const horaFormatada = now.toLocaleTimeString(locale, {
      timeZone: 'America/Sao_Paulo'
    });

    res.json({
      locale: locale,
      date: dataFormatada,
      time: horaFormatada,
      iso: now.toISOString()
    });

  } catch (error) {
    res.status(400).json({
      erro: 'Formato de localidade inválido',
      exemplo: 'Use algo como "pt-BR", "en-US", "ja-JP", etc.'
    });
  }
});

module.exports = router; // ESSENCIAL: isso exporta corretamente a rota