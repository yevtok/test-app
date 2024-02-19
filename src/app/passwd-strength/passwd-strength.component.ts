import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

enum Pass {
	empty,
	invalid,
	easy,
	medium,
	strong
}	

@Component({
  selector: 'passwd-strength',
  templateUrl: './passwd-strength.component.html',
  styleUrl: './passwd-strength.component.scss'
})

export class PasswdStrengthComponent {
	passwd = new FormControl('', [
		Validators.required,
		Validators.minLength(8)
	]);

    calcStrength(password: string = ""): Pass {
		if (!password.length) return Pass.empty;
		if (password.length < 8) {
			return Pass.invalid;
		} else {

		const hasLetters = /[a-zA-Z]/.test(password);
		const hasDigits = /\d/.test(password);
		const hasSymbols = /[!@#$%^&*()_+{}[\]:;<>,.?~]/.test(password);

		if (hasLetters && hasDigits && hasSymbols) {
				return Pass.strong;
			} else if (hasLetters && (hasDigits || hasSymbols)) {
				return Pass.medium;
			} else {
				return Pass.easy;
			}
		}
	}	

	getClass1(): string {
		switch (this.calcStrength(this.passwd.value?.toString())) {
			case 1 : 
			case 2 : return 'weak'
			case 3 : return 'medium'
			case 4 : return 'strong'
			default: return ''
		}
	}

	getClass2() {
		switch (this.calcStrength(this.passwd.value?.toString())) {
			case 1 : return 'weak'
			case 2 : 
			default: return ''
			case 3 : return 'medium'
			case 4 : return 'strong'
		}
	}

	getClass3() {
		switch (this.calcStrength(this.passwd.value?.toString())) {
			case 1 : return 'weak'
			case 2 : 
			case 3 : 
			default: return ''
			case 4 : return 'strong'
		}
	}

}
