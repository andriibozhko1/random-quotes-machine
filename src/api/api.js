const api = {
   async getTagList() {
    const response = await fetch("https://5c869161cc034a0014bd25b1.mockapi.io/tags")
    const result = await response.json();
    
    return result;
  },
  async getQuotesByTagName(tagName) {
    const response = await fetch(`https://favqs.com/api/quotes/?filter=${tagName}&type=tag`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token="69e12446527f3708cc8efcc3aa162e7a"',
        'User-Token': '69e12446527f3708cc8efcc3aa162e7a',
        'Accept': 'application/vnd.favqs.v2+json'
      },
    });
    const result = await response.json();

    return result;
  }
};

export default api


// https://favqs.com/api/quotes/?filter=funny&type=tag
// https://favqs.com/api/typeahead