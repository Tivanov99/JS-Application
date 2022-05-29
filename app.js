    let addButton = document.querySelector("#add");

    let addedProducts = document.querySelector("#addedProducts ol");

    let sumBtn= document.querySelector("#sum");

    sumBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(addedProducts.childNodes.length > 0){
            SumCalories(addedProducts);
        }else{
            alert('Моля добавете продукти!')
        }
    })

    addButton.addEventListener('click',(e)=>{

        if(addedProducts.parentNode.lastElementChild.id=='sumResult'){
            addedProducts.parentNode.removeChild(addedProducts.parentNode.lastElementChild);
        }

        let selectedFood = document.querySelector("#foods");
        let quantity = document.querySelector("#quantity");

        if(selectedFood.value=='Изберете продукт'){
            selectedFood.value='Изберете продукт';
            quantity.value='';
            alert("Невалиден продукт!")
        }
        else if(quantity.value==''){
            alert('Моля въведете грамаж!')
        }
        else{
            let liElement=CreateLiElement();

            let grams = document.createElement('label');
            grams.textContent=' грама';
           
            let productElement = CreateProductElement(selectedFood.value,quantity.value);

            let editButton = CreateEditButton(selectedFood,quantity);
    
            let deleteBtn = CreateDeleteButton(addedProducts);
    
            selectedFood.value='Изберете продукт';
            quantity.value='';
            
            liElement.id=`${addedProducts.children.length}`;
            liElement.appendChild(productElement);
            liElement.appendChild(grams);
            liElement.appendChild(editButton);
            liElement.appendChild(deleteBtn);
    
            addedProducts.appendChild(liElement);
        }

        e.preventDefault();
    })

    function CreateLiElement(){
        let liElement= document.createElement("li");
            liElement.classList.add('productParent');

            return liElement;
    }

    function CreateProductElement(food,quantity){
        let productElement = document.createElement('label')
        productElement.textContent=`${food} - ${quantity}`;
        productElement.classList.add('product');

        return productElement;
    }
    
    function CreateDeleteButton(addedProducts){
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent="Изтрий";
        deleteBtn.classList.add('delete-Btn');
        deleteBtn.addEventListener('click',()=>{
            addedProducts.removeChild(deleteBtn.parentNode);
        });
        return deleteBtn;
    }
    
    function CreateEditButton(food,quantity){
        let editButton = document.createElement("button");
        editButton.textContent="Редактирай";
        editButton.classList.add('editBtn');

        editButton.addEventListener('click',()=>{

            let values =editButton.parentNode.children[0].textContent.split(' - ');
            food.value= values[0];
            quantity.value=Number(values[1]);

            let updateButton = document.querySelector("#update");
            updateButton.classList.remove('hidden');

            updateButton.addEventListener('click',(e)=>{
                e.preventDefault();
                
                if(food.value !='Изберете продукт' && quantity.value!=''){
                    let edditedLi= document.getElementById(`${editButton.parentNode.id}`);
                    edditedLi.childNodes[0].textContent=`${food.value} - ${quantity.value}`;
                }else if(quantity.value==''){
                    alert('Моля въведете грамаж!')
                }

                addButton.classList.remove('hidden')
                updateButton.classList.add('hidden')
                food.selectedIndex=0;
                quantity.value=0;
            });
            addButton.classList.add('hidden')
        });

        return editButton;
    }

    function SumCalories(addedProducts){
        let count=0;
        let sum = 0;
        for(let el of addedProducts.childNodes){
            if(count>0){
                let values =el.childNodes[0].textContent.split(' - ');
                sum += GetCallories(values[0],Number(values[1]));
            }
            count++;
        }

        let sumElement = CreateSumElement(sum);
        addedProducts.parentNode.appendChild(sumElement);

        RemoveAllProducts(addedProducts);
    }

    function CreateSumElement(sum){
        let sumElement = document.createElement('label');
        sumElement.textContent=`${sum} калории общо.`
        sumElement.id="sumResult"
        return sumElement;
    }

    function RemoveAllProducts(addedProducts){
        let chield =addedProducts.lastElementChild;

        while(chield){
            addedProducts.removeChild(chield);
            chield = addedProducts.lastElementChild;
        }
    }
    function GetCallories(product, quantity){
        if(product=='Ягоди'){
            return (quantity/100)*32;
        }else if(product=='Банан'){
            return (quantity/100)*89;
        }else if(product=='Ябълкa'){
            return (quantity/100)*74;
        }else if(product=='Ябълков сос'){
            return (quantity/100)*42;
        }else if(product=='Шницел(Говежди)'){
            return (quantity/100)*337;
        }else if(product=='Пържола(Говежди)'){
            return (quantity/100)*214;
        }else if(product=='Говеждо(Варено)'){
            return (quantity/100)*214;
        }
        return 0;
    }