export interface summaryDetails{
    loan_number: number;
    borrower_name: string;
    coborrower_name: string;
    loan_date: number; 
    loan_amount: number;
    loan_type: string;
    address: string;
    cibil_score: number;
    contact_no: number;
    dob: number;
    income: number;
    job: string;
    assets: boolean;
    interest: number;
    coborrower_contact: number;
    coborrower_relation: string;
    id: string;
}
export interface homeDetails{
    loan_number: number;
    borrower_name: string;
    coborrower_name: string;
    loan_date: number; 
    loan_amount: number;
    loan_status: string;
    loan_type: string;
    address: string;
    cibil_score: number;
    contact_no: number;
    status_reason:string;
}
