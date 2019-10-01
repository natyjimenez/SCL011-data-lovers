window.dataPokemon = {
  //Orden de aparición por horario
      sortData: (data, sortBy, sortOrder) => {
      let sorted = [];
      if (sortBy == "spawn_time"){
      if(sortOrder == "ascendente"){
      sorted = data.sort((a, b) => a.spawn_time.localeCompare(b.spawn_time));
      } else if (sortOrder == "descendente"){
      sorted = data.sort((a, b) => a.spawn_time.localeCompare(b.spawn_time)).reverse();
      } 
      return sorted;
      }
    },
  };