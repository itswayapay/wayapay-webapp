import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormValidationService {
    private errorMessages = {
        'first_name-required-msg': 'Please provide your first name.',
        'last_name-required-msg': 'Please provide your last name.',
        'email-required-msg': 'Please provide your last email.',

        'phone_number-required-msg': 'Please provide your phonenumber.',
        'phone_number-minlength-msg': 'Please provide a valid phonenumber.',
        'phone_number-maxlength-msg': 'Please provide a valid phonenumber.',

        'national_id-required-msg': 'Please provide your National ID.',
        'national_id-minlength-msg': 'Please provide a valid National ID.',
        'national_id-maxlength-msg': 'Please provide a valid National ID.',

        'password-required-msg': 'Please provide a password.',
        'password-minlength-msg': 'Password must be at least 6 characters.',

        'password_confirmation-required-msg': 'Please provide a confirmation password.',
        'password_confirmation-minlength-msg': 'Confirmation Password must be at least 6 characters.',
        'password_confirmation-ConfirmPassword-msg': 'Password does not match.',

        'terms-required-msg': 'Waiting on your confirmation.',

        // 'code-required-msg': 'Please provide confirmation.',
        // 'code-minlength-msg': 'Provide a valid confirmation code.',
        // 'code-maxlength-msg': 'Provide a valid confirmation code.',


        // 'deposit_amount-required-msg': 'Please provide deposit amount.',
        // 'deposit_amount-min-msg': 'Minimum deposit amount is ksh 1',
        // 'deposit_amount-max-msg': 'Minimum deposit amount is ksh 70000',

        // 'withdraw_amount-required-msg': 'Please provide withdrawal amount.',
        // 'withdraw_amount-min-msg': 'Minimum withdrawal amount is ksh 70',
        // 'withdraw_amount-max-msg': 'Minimum withdrawal amount is ksh 70000',


    };

    public getValidationMsg(validationId: string): string {
        return this.errorMessages[validationId];
    }
}
