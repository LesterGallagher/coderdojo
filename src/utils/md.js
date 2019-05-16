import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

export const renderMarkdown = content => {
    return remark()
      .use(recommended)
      .use(remarkHtml)
      .processSync(content).toString();
}
