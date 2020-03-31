import { Directive, OnInit, OnDestroy, ElementRef, Input, HostListener } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormValidationService } from 'src/app/@services/forms/form-validation.service';

@Directive({
    selector: '[appFormControlValidationMsg]'
})
export class FormControlValidationMsgDirective implements OnInit, OnDestroy {
    // tslint:disable-next-line:no-input-rename
    @Input('validationMsgId') validationMsgId: string;
    errorSpanId: string;

    constructor(private elRef: ElementRef, private control: NgControl, private formValidationService: FormValidationService) { }

    statusChangeSubscription: Subscription;

    ngOnInit(): void {

        this.errorSpanId = `${this.validationMsgId}-${new Date().getTime()}-error-msg`;
        this.statusChangeSubscription = this.control.statusChanges.subscribe((status) => {
            if (status === 'INVALID') {
                this.showError();
            } else {
                this.removeError();
            }
        });
    }

    ngOnDestroy(): void {
        this.statusChangeSubscription.unsubscribe();
    }

    @HostListener('blur', ['$event'])
    handleBlurEvent(event) {
        // This is to handle misfire of error on initial click
        if (this.control.value == null || this.control.value === '') {
            if (this.control.errors) { this.showError(); } else { this.removeError(); }
        }
    }
    private showError() {
        this.removeError();
        const valErrors: ValidationErrors = this.control.errors;
        const firstKey = Object.keys(valErrors)[0];
        const errorMsgKey = this.validationMsgId + '-' + firstKey + '-msg';
        const errorMsg = this.formValidationService.getValidationMsg(errorMsgKey);
        const errSpan = `<span class="input-error" id="${this.errorSpanId}">${errorMsg}</span>`;
        this.elRef.nativeElement.parentElement.parentElement.insertAdjacentHTML('beforeend', errSpan);
    }

    private removeError(): void {
        const errorElement = document.getElementById(this.errorSpanId);
        if (errorElement) { errorElement.remove(); }
    }
}
