const highlightHTMLContent = require('./highlightHTMLContent');

test('highlightHTMLContent should highlight plain text positions', () => {
  const htmlContent = '<p><span>...</span></p>';
  const plainText = '...';
  const plainTextPositions = [
    { start: 241, end: 247 },
    { start: 518, end: 525 }
  ];

  const expectedHighlightedHTML = '<p><span>...<mark>...</mark>...</span></p>';
  const highlightedHTML = highlightHTMLContent(htmlContent, plainText, plainTextPositions);

  expect(highlightedHTML).toBe(expectedHighlightedHTML);
});

// Add more test cases for different scenarios