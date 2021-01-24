const drawBoard = () => {
  let board = document.querySelector('.board');
  let block;
  let flag = true;

  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(j == 0) {
        flag = !flag;   
      };
      if ( i == 0) {
        if( j == 1) {
          str = `<div>&#9820;</div> `;
          block.innerHTML = str ;
        };
      };

      if ( i == 0) {
        if( j == 2) {
          str = `<div>&#9822;</div> `;
          block.innerHTML = str ;
        };
      };

      if ( i == 0) {
        if( j == 3) {
          str = `<div>&#9821;</div> `;
          block.innerHTML = str ;
        };
      };

      if ( i == 0) {
        if( j == 4) {
          str = `<div>&#9819;</div> `;
          block.innerHTML = str ;
        };
      };

      if ( i == 0) {
        if( j == 5) {
          str = `<div>&#9818;</div> `;
          block.innerHTML = str ;
        };
      };

      if ( i == 0) {
        if( j == 6) {
          str = `<div>&#9821;</div> `;
          block.innerHTML = str ;
        };
      };

      if ( i == 0) {
        if( j == 7) {
          str = `<div>&#9822;</div> `;
          block.innerHTML = str ;
        };
      };

      if ( i == 1) {
          str = `<div>&#9823;</div> `;
          block.innerHTML = str ;
      };

      if ( i == 2) {
        if( j == 0) {
          str = `<div>&#9823;</div> `;
          block.innerHTML = str ;
        };
      };

      if ( i == 1) {
        if( j == 0) {
          str = `<div>&#9820;</div> `;
          block.innerHTML = str ;
          
        };
      };

      if ( i == 7) {
        if( j == 1) {
          str = `<div>&#9820;</div> `;
          block.innerHTML = str ;
          block.style.color = 'white';
        };
      };

      if ( i == 7) {
        if( j == 2) {
          str = `<div>&#9822;</div> `;
          block.innerHTML = str ;
          block.style.color = 'white';
        };
      };

      if ( i == 7) {
        if( j == 3) {
          str = `<div>&#9821;</div> `;
          block.innerHTML = str ;
          block.style.color = 'white';
        };
      };

      if ( i == 7) {
        if( j == 4) {
          str = `<div>&#9819;</div> `;
          block.innerHTML = str ;
          block.style.color = 'white';
        };
      };

      if ( i == 7) {
        if( j == 5) {
          str = `<div>&#9818;</div> `;
          block.innerHTML = str ;
          block.style.color = 'white';
        };
      };

      if ( i == 7) {
        if( j == 6) {
          str = `<div>&#9821;</div> `;
          block.innerHTML = str ;
          block.style.color = 'white';
        };
      };

      if ( i == 7) {
        if( j == 7) {
          str = `<div>&#9822;</div> `;
          block.innerHTML = str ;
          block.style.color = 'white';
        };
      };

      if ( i == 2) {
        if( j == 0) {
          str = `<div>&#9823;</div> `;
          block.innerHTML = str ;
        };
      };
      
      block = document.createElement('div');
      
      if(flag){
        block.className='block black';
        if ( i == 6) {
          str = `<div>&#9823;</div> `;
          block.innerHTML = str ;
          block.style.color = 'white';
      }
      }else {

        block.className='block white';
        
        if ( i == 6) {
          str = `<div>&#9823;</div> `;
          block.innerHTML = str ;
          block.style.color = 'white';
        };

        if ( i == 7) {
          if( j == 7) {
            str = `<div>&#9820;</div> `;
            block.innerHTML = str ;
            block.style.color = 'white';
          };
        };
      };
      
      board.appendChild(block);
      flag = !flag;
      
    };
  };
};




drawBoard();