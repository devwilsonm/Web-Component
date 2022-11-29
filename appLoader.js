class appLoader extends HTMLElement {
    constructor() {
      super();      

      const shadowRoot = this.attachShadow({mode: 'open'});

      const content = document.createElement('div');
      content.classList.add('app-loader-container');

      let pDisplay = this.getAttribute('display');
      pDisplay= (pDisplay==null) ? 'true':  pDisplay ;

      if (pDisplay!='true') {
        content.classList.add('d-none');        
      }


      content.innerHTML = `
      <div class="loadingio-spinner-double-ring-cujsaj67aj"><div class="ldio-ovtow3wsm1">
      <div></div>
      <div></div>
      <div><div></div></div>
      <div><div></div></div>
      </div></div>
      `;

      shadowRoot.appendChild(content);
 
         // Create new link Element
         var link = document.createElement('link');
  
         // set the attributes for link element
         link.rel = 'stylesheet';
      
         link.type = 'text/css';
      
         link.href = 'appLoader.css';
  
         // Append link element to HTML 
         shadowRoot.appendChild(link);
    }




  }

customElements.define('app-loader',appLoader);