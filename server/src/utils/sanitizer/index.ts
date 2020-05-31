import sanitizeHtml from 'sanitize-html';

export const sanitizer = (text: string) => {
  return sanitizeHtml(text, {});
}

export default sanitizer;