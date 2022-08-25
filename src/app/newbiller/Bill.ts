
import {Accounts} from "../accounts/Accounts";
import {Biller} from "../masterbiller/Biller";




export interface Bill{
    sequenceId:number,
    amount: number;
    consumerNumber:string;
    dueDate:Date,
    status:string,
    accountNo:Accounts,
    billerCode:Biller
}
  