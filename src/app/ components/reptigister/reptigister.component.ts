import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ReptilianService} from '../../tools/services/reptilian.service';
import {MatDialog} from '@angular/material/dialog';
import {User} from '../../tools/classes/User';

@Component({
  selector: 'app-reptigister',
  templateUrl: './reptigister.component.html',
  styleUrls: ['./reptigister.component.css']
})
export class ReptigisterComponent implements OnInit {
  accountForm = new FormGroup({
    email: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    password: new FormControl(),
    password_validation: new FormControl(),
  });

  constructor(
    private fb: FormBuilder,
    private reptiservice: ReptilianService
  ) {

  }


  ngOnInit(): void {
    this.createForm();
  }
  /*
  ngOnChanges(): void {
    if (this.action) {
      this.status = StateEnum.OK.toString();
    }
    if (this.selectedAccount) {
      this.createForm();
    }

  }
*/

  /**
   * Construction du Formulaire
   */
  createForm(): void {
    const mailFC: FormControl = new FormControl();
    mailFC.setValue('');
    mailFC.setValidators([Validators.required, Validators.email]);
    const passwordFC: FormControl = new FormControl();
    passwordFC.setValue('');
    passwordFC.setValidators([Validators.required]);
    this.accountForm = this.fb.group(
      {
        firstName: [ '', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
        lastName: ['', [Validators.minLength(3), Validators.maxLength(30)]],
        email: mailFC,
        password : passwordFC,
        password_validation:  [Validators.pattern(passwordFC.value), Validators.required]
      }
    );
  }


  onSubmit(): void {
    const newRept = new User();
    newRept.email = this.accountForm.get(('email')).value;
    newRept.mdp = this.accountForm.get('password').value;
    newRept.nom = this.accountForm.get('lastName').value;
    newRept.prenom = this.accountForm.get('firstName').value;
    this.reptiservice.post(newRept).subscribe(_ => {});
  }

}
