export const getSDKScript = (id = 1) => {
  const DEPLOY_ENV = process.env.DEPLOY_ENV;
  const baseUrl = DEPLOY_ENV == 'prod' ? 'https://chatbot.xunluai.com' : 'https://chatbot.funpinpin.top';
  return `<script src="https://cdn1.funpinpin.com/ai-chat-bot-static/${DEPLOY_ENV}/aigc-chat-bot-loader.js" id="aigc-chat-bot-loader" data-aid="${id}" data-backend_api="${baseUrl}/api/"></script>`
}
