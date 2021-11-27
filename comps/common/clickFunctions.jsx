function handleClick() {
  /////////////////////////////////////////////////////////////////////////////
      // this function processess user interaction
      if (this.dataset.id>0){
      this.classList.toggle("fa");
      this.classList.toggle("far");
       console.log("this.dataset",this.dataset)
        
      const id = this.dataset.id;
      console.log(id);
      const title = this.dataset.title;
      console.log(title);
      const manufacturer= this.dataset.manufacturer;
      console.log(manufacturer);
      const price = this.dataset.price;
      const image_url = this.dataset.url;
      const currentFavs = getExistingFavs();
      /////////////////////////////////////////////////////////////////////////////
      // this part checks that the user has selected her/his favourites previously
      // Avoid multiple enteries into the favourites array for a single item
      const productExists = currentFavs.find(function (fav) {
          return fav.id === id;
      });
  
      if (productExists === undefined) {
        let  quantity=1;
          const product = { id: id, title:title,manufacturer:manufacturer , price:price, image_url:image_url};
          currentFavs.push(product);
          saveFavs(currentFavs);
  
      } else {
         const product = { id: id, title:title,manufacturer:manufacturer , price:price, image_url:image_url};
         const newFavs = currentFavs.filter((fav) => fav.id !== id);
         saveFavs(newFavs);
  //      currentFavs.push(product);
  //     saveFavs(currentFavs);
  //     saveFavs(newFavs);
      }
  }
  }
  ///////////////////////////////////////////////////////////////
  //This function uploads or saves the favourites into the local 
  //storage
  function saveFavs(favs) {
      localStorage.setItem("favourites", JSON.stringify(favs));
  }
  ////////////////////////////////////////////////////////////////