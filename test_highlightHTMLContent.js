function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  let highlightedHTML = htmlContent;

  plainTextPositions.forEach(({ start, end }) => {
    const openTag = '<mark>';
    const closeTag = '</mark>';

    const positionInHTMLStart = highlightedHTML.indexOf(plainText.slice(start, end));
    const positionInHTMLEnd = positionInHTMLStart + (end - start);

    if (positionInHTMLStart !== -1) {
      const prefix = highlightedHTML.slice(0, positionInHTMLStart);
      const highlightedText = highlightedHTML.slice(positionInHTMLStart, positionInHTMLEnd);
      const suffix = highlightedHTML.slice(positionInHTMLEnd);

      highlightedHTML = `${prefix}${openTag}${highlightedText}${closeTag}${suffix}`;
    }
  });

  return highlightedHTML;
}

// Example usage
const htmlContent = '<p><span>...</span></p>';
const plainText = '...';
const plainTextPositions = [
  { start: 241, end: 247 },
  { start: 518, end: 525 }
];

const highlightedHTML = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
console.log(highlightedHTML);

module.exports = highlightHTMLContent;