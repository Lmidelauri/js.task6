/**
 * შექმენი MyArr კლასი ისე რომ არ გამოიყენოთ Array built-in მეთოდები
 * მიაქციეთ ყურადღება როგორ არის იმპლემენტირებული მასივის კონსტრუქტორი , 
 * დაგჭირდებათ ობიექტის გამოყენება . 
 * მაგალითისთვის 
 * let arr = new MyArr('elem1','elem2','elem3') 
 * განსხვავებით Array კონსტრუქტორისგან თქვენ კლასის კონსტრუქტორს გადაეცით ის ელემენტები რაც გინდათ რომ საწყისად იყოს მასივში
 * arr.length - დააბრუნებს ელემენტების რაოდენობას ანუ მასივის ზომას
 * arr.pop() - უნდა დააბრუნოს ბოლო ელემენტი მასივიდან და თან წაშალოს, თუ კი ცარიელია მასივი მაშინ undefined
 * arr.push(elem) - გადაცემული ელემენტი უნდა დაამატოს და შესაბამისად ზომაც უნდა გაიზარდოს 
 * 
 * part 2 : 
 * შექმნილი კლასი დააიმპორტეთ მთავარ ჯს ფაილში , გამოიყენეთ ESmodules ანუ import/export მექანიზმი . 
 * ამ ფაილში ქმნით მასივს და html დოკუმენტში გამოგაქვთ ეს ელემენტები ul/li , ლისტის სახით . 
 * 
 * part 3 : 
 * გამოიყენეთ webpack რომ არ მოუხდეს ბრაუზერს ორივე ფაილის ცალცალკე ჩამოტვირთვა. 
 *  
 *
 */

export class MyArr {
    constructor(...El){
      this.cnt=0;
      this.El=El;
      this.arrLngth=0;
      this.lstEl=[];
      this.popStEl=0;
      this.popLstArr=[];
    }

    lengthMethod(){
        this.cnt=0;
        while(true){
            if(this.El[this.cnt]==undefined) return this.arrLngth=this.cnt;
            this.cnt++
        }

    }

    popMethod(){
       this.popStEl=0;
       this.popLstArr=[];
       while(true){
        if(this.El[this.popStEl]===undefined){
            this.lstEl=this.El[(this.popStEl)-1];
            for(let i=0; i<this.popStEl-1; i++){
                this.popLstArr[i]=this.El[i];
                // console.log(this.popLstArr)
            }
            this.El=this.popLstArr;
            return this.lstEl
        };
        this.popStEl++;
       }
    
    }

    pushMethod(el){
      this.El[this.lengthMethod()]=el;
      
      return this.El ;
    }
}
