import React from 'react';

function FormData() {
    const [resultForm, addResult] = React.useState([])

    const resultList = (event) => {
        let fieldValue = event.target.name.value;
        if (fieldValue.match(/^[а-яА-ЯёЁa-zA-Z]/)) {
            event.preventDefault();
            addResult(currentList => currentList.concat([fieldValue]))
            event.target.name.value = '';

        } else {
            event.preventDefault();
            alert('Only name (Latin or Cyrillic)')
            event.target.name.value = '';
        }
        
    };

    const handleRemoveItem = index => {
        const temp = [...resultForm];
        temp.splice(index, 1);
        addResult(temp);
    }
    
    return (
        <div>
            <form onSubmit={resultList}>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="Send"/>
                <hr />
          
            </form>
            
              <ul>
               {resultForm.map((item, i) => 
               <li key={i}>{item}    
                    <button key={i} onClick={() => handleRemoveItem(i)}>Delete</button>
                </li> )}
              </ul>
        </div>
    ); 
};

export default FormData;