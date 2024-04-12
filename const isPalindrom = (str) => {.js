const isPalindrom = (str)  => {

    let result = false; 

    let temp = str.split('');

    for(let i = 0, j = temp.length -1; i < temp.length && j > 0; i++) {

        if(temp[i] === temp[j]) {
            result = true
        }else {
            result = false;
            i = temp.length
        }

        
    }

}