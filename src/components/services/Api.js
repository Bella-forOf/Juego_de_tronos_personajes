const getDataFromAPI = () => {
    return fetch('https://api.gameofthronesquotes.xyz/v1/characters')
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.map((user) => {
          return {
            name: user.name,
            slug: user.slug,
            id: crypto.randomUUID(),
            
          };
        });
        return cleanData;
        
      });
     
  };
  export default getDataFromAPI;