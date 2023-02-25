const { config: dotenvConfig } = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');

dotenvConfig();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const run = async () => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'can you generate vegetarian food plan for a week for 2 person with necessary ingredients',
    temperature: 0.7,
    max_tokens: 1000,
    top_p: 1,
    best_of: 5,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  console.log(response.data);
};

run();
