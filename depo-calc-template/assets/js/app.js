

        function calc(){

            let sum  = +sumInput.value;
            let term = +termInput.value;
            let rate = +rateInput.value; // %/year
            let cap  = capInput.checked;

            let mRate = rate / 12;

            if(cap){

                sum = sum * (1 + mRate/100) ** term;

            }else {
                sum = sum + (sum * (mRate/100) * term);
            }

            sum = Math.round(sum * 100)/100;

            resultPlace.innerHTML = sum;      

           
        }