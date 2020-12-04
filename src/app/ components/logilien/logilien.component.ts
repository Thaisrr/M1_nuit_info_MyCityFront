import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReptilianService} from '../../tools/services/reptilian.service';
import {User} from '../../tools/classes/User';

@Component({
  selector: 'app-logilien',
  templateUrl: './logilien.component.html',
  styleUrls: ['./logilien.component.css']
})
export class LogilienComponent implements OnInit {
  loginForm: FormGroup;
  errorOnAuth = false;

  constructor(private fb: FormBuilder, private reptiservice: ReptilianService) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)
      ]],
      remember: ['']

    });
  }

  getEmailErrorMessage(): string {
    return this.loginForm.get('email').hasError('required') ? 'Vous n\'avez pas saisi d\'email' :
      this.loginForm.get('email').hasError('email') ? 'Adresse email non valide.' :
        '';
  }
  getPasswordErrorMessage(): string {
    return this.loginForm.get('password').hasError('required') ? 'Vous n\'avez pas saisi de mot de passe' :
      '';
  }

  login(): void {
    if (this.loginForm.get('email').value !== '' && this.loginForm.get('password').value !== '') {
      this.reptiservice.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe();
    }
  }

}
