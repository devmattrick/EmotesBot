import { Telegraf } from 'telegraf';
import { InlineQueryResultArticle } from 'telegram-typings';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.on('inline_query', (ctx) => {
  ctx.answerInlineQuery([
    {
      type: 'article',
      id: 'aa',
      title: 'xdd',
      input_message_content: {
        message_text: 'xd'
      }
    }
  ]);
});
