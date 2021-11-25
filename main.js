    const tabs=[...document.querySelectorAll(".tabs")],
       card=document.querySelectorAll(".card");
        tabs.forEach((tab) => tab.addEventListener("click", handleTabs))
          let index=0;
          function handleTabs(e){
            const currentEl=e.target;

            tabs[index].classList.remove("active");
            card[index].classList.remove("active-contente");
            
            index = tabs.indexOf(currentEl);

            tabs[index].classList.add("active");
            card[index].classList.add("active-contente");
     }