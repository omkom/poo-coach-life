// app/server/api/chat.post.ts
import { defineEventHandler, readBody, createError } from 'h3'

// Importer le système prompt pour 💩 Coach
const POO_COACH_SYSTEM_PROMPT = `
Vous êtes 💩 Coach, une alliée experte en digestion douce, nutrition fonctionnelle et routines bien-être au quotidien. 
Vous aidez les femmes à soulager leur côlon paresseux et leur transit paresseux avec des conseils concrets, un ton bienveillant, exigeant et drôle. 
Vous ne donnez jamais de diagnostic ni de traitement. Vous êtes directe, chaleureuse, un peu cash, toujours motivante. 
Vous parlez simplement, comme une alliée exigeante et drôle. Votre devise : "C'est pas de la merde."

Quelques règles importantes à suivre:
1. Parlez toujours en "tu" familier et direct
2. Utilisez des emojis 💩 🧻 🥦 🧘‍♀️ avec modération mais efficacité
3. Soyez franche sans être brutale
4. N'hésitez pas à être drôle ou utiliser des jeux de mots digestifs
5. Restez toujours respectueuse et bienveillante

Vos domaines d'expertise:
- Recettes douces pour l'intestin
- Routines de respiration et étirements
- Conseils anti-constipation non médicamenteux
- Alternatives concrètes (ex: "Pas de courgette? remplace par fenouil ou poireau")
- Tisanes et boosters naturels

N'oubliez jamais: vous n'êtes pas médecin ni nutritionniste certifiée. En cas de symptômes graves ou persistants, encouragez la consultation d'un professionnel de santé.
`;

export default defineEventHandler(async (event) => {
  try {
    // 1. Récupérer le corps de la requête
    const { message, history = [] } = await readBody(event)
    
    if (!message) {
      throw createError({
        statusCode: 400,
        message: 'Le message est obligatoire'
      })
    }

    // 2. Récupérer la clé API OpenAI depuis la configuration
    const config = useRuntimeConfig()
    const apiKey = config.openaiApiKey
    
    if (!apiKey) {
      console.error('Clé API OpenAI manquante')
      throw createError({
        statusCode: 500,
        message: 'Configuration incomplète'
      })
    }

    // 3. Construire les messages pour l'API OpenAI
    const messages = [
      { role: 'system', content: POO_COACH_SYSTEM_PROMPT },
      ...history,
      { role: 'user', content: message }
    ]

    // 4. Faire l'appel à l'API OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
        temperature: 0.7,
        max_tokens: 800
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Erreur OpenAI:', error)
      throw createError({
        statusCode: response.status,
        message: 'Erreur lors de la communication avec l\'API'
      })
    }

    const data = await response.json()
    
    // 5. Extraire les suggestions potentielles
    const aiResponse = data.choices[0].message.content
    let suggestions: string[] = []
    
    // Rechercher des suggestions dans la réponse (format: [suggestions:X,Y,Z])
    const suggestionMatch = aiResponse.match(/\[suggestions:(.*?)\]/)
    if (suggestionMatch && suggestionMatch[1]) {
      // Retirer le tag de suggestions de la réponse
      const cleanResponse = aiResponse.replace(/\[suggestions:.*?\]/, '').trim()
      data.choices[0].message.content = cleanResponse
      
      // Extraire les suggestions
      suggestions = suggestionMatch[1].split(',').map((s: string) => s.trim())
    }

    // 6. Retourner la réponse formatée
    return {
      response: data.choices[0].message,
      suggestions
    }
    
  } catch (error: any) {
    console.error('Erreur dans le traitement de la requête chat:', error)
    
    // Si c'est déjà une erreur H3, la propager
    if (error.statusCode) {
      throw error
    }
    
    // Sinon créer une nouvelle erreur
    throw createError({
      statusCode: 500,
      message: error.message || 'Erreur lors du traitement de la requête'
    })
  }
})