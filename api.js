
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwZ6lhJyiT85V31iqrTS51O50Oovn-BT8HNr9TxdUqcQDMG36CWVcJSMkrz4oMDffSj/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message sent successfully!";
          setTimeout(() => { msg.innerHTML = ""; }, 5000);
          form.reset();
        })
        .catch(error => {
          msg.innerHTML = "Something went wrong!";
          console.error('Error!', error.message);
        });
    });

    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname, event){
      for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }

    const sidemenu = document.getElementById("sidemenu");

    function openmenu(){
      sidemenu.style.right = "0";
    }

    function closemenu(){
      sidemenu.style.right = "-200px";
    }